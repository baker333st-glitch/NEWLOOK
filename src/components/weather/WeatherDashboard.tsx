"use client";

import { useState, useEffect } from "react";
import SearchWeather from "./SearchWeather";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

interface WeatherData {
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

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState("London");

  const fetchWeather = async (searchCity: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(searchCity)}`
      );
      
      if (!response.ok) {
        throw new Error("City not found. Please try another search.");
      }
      
      const data = await response.json();
      setWeatherData(data);
      setCity(searchCity);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather data");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="space-y-8">
      <SearchWeather onSearch={fetchWeather} />
      
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} />}
      
      {weatherData && !loading && (
        <>
          <CurrentWeather current={weatherData.current} />
          <WeatherForecast forecast={weatherData.forecast} />
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
