import { NextRequest, NextResponse } from "next/server";

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const WEATHER_API_BASE = "https://api.open-meteo.com/v1";
const GEO_API_BASE = "https://geocoding-api.open-meteo.com/v1";

interface GeoLocation {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

interface WeatherResponse {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    description: string;
    icon: string;
    city: string;
    country: string;
  };
  forecast: Array<{
    date: string;
    temp_max: number;
    temp_min: number;
    description: string;
    icon: string;
  }>;
}

function getWeatherDescription(weatherCode: number): string {
  const weatherCodes: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return weatherCodes[weatherCode] || "Unknown";
}

async function getGeoLocation(city: string): Promise<GeoLocation> {
  const response = await fetch(
    `${GEO_API_BASE}/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch geolocation");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const result = data.results[0];
  return {
    latitude: result.latitude,
    longitude: result.longitude,
    name: result.name,
    country: result.country,
  };
}

async function getWeatherData(
  latitude: number,
  longitude: number,
  city: string,
  country: string
): Promise<WeatherResponse> {
  const response = await fetch(
    `${WEATHER_API_BASE}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  const current = data.current;
  const daily = data.daily;

  // Build forecast
  const forecast = daily.time.map((date: string, index: number) => ({
    date,
    temp_max: daily.temperature_2m_max[index],
    temp_min: daily.temperature_2m_min[index],
    description: getWeatherDescription(daily.weather_code[index]),
    icon: daily.weather_code[index].toString(),
  }));

  return {
    current: {
      temp: current.temperature_2m,
      feels_like: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      pressure: current.pressure_msl,
      wind_speed: current.wind_speed_10m,
      description: getWeatherDescription(current.weather_code),
      icon: current.weather_code.toString(),
      city,
      country,
    },
    forecast,
  };
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const city = searchParams.get("city");

    if (!city) {
      return NextResponse.json(
        { error: "City parameter is required" },
        { status: 400 }
      );
    }

    // Get geolocation
    const geoLocation = await getGeoLocation(city);

    // Get weather data
    const weatherData = await getWeatherData(
      geoLocation.latitude,
      geoLocation.longitude,
      geoLocation.name,
      geoLocation.country
    );

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Weather API Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
