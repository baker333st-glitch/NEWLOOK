interface ForecastItem {
  date: string;
  temp_max: number;
  temp_min: number;
  description: string;
  icon: string;
}

interface WeatherForecastProps {
  forecast: ForecastItem[];
}

const WeatherForecast = ({ forecast }: WeatherForecastProps) => {
  const getWeatherIcon = (description: string) => {
    const desc = description.toLowerCase();
    if (desc.includes("rain")) return "🌧️";
    if (desc.includes("cloud")) return "☁️";
    if (desc.includes("clear") || desc.includes("sunny")) return "☀️";
    if (desc.includes("snow")) return "❄️";
    if (desc.includes("thunder")) return "⛈️";
    if (desc.includes("wind")) return "💨";
    return "🌤️";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">5-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow hover:shadow-lg transition"
          >
            <p className="font-semibold text-gray-700 mb-3">{formatDate(day.date)}</p>
            <div className="text-4xl mb-3">{getWeatherIcon(day.description)}</div>
            <div className="flex justify-center gap-2 mb-3">
              <div>
                <p className="text-xs text-gray-500">High</p>
                <p className="text-lg font-bold text-red-500">{Math.round(day.temp_max)}°</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Low</p>
                <p className="text-lg font-bold text-blue-500">{Math.round(day.temp_min)}°</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 capitalize">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
