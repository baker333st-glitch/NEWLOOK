interface CurrentWeatherProps {
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
}

const CurrentWeather = ({ current }: CurrentWeatherProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              {current.city}, {current.country}
            </h2>
            <div className="text-6xl font-bold mb-2">{Math.round(current.temp)}°C</div>
            <p className="text-xl capitalize opacity-90">{current.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-400 bg-opacity-30 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Feels Like</p>
            <p className="text-2xl font-bold">{Math.round(current.feels_like)}°C</p>
          </div>
          
          <div className="bg-blue-400 bg-opacity-30 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Humidity</p>
            <p className="text-2xl font-bold">{current.humidity}%</p>
          </div>
          
          <div className="bg-blue-400 bg-opacity-30 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Pressure</p>
            <p className="text-2xl font-bold">{current.pressure} hPa</p>
          </div>
          
          <div className="bg-blue-400 bg-opacity-30 rounded-lg p-4">
            <p className="text-sm opacity-75 mb-1">Wind Speed</p>
            <p className="text-2xl font-bold">{Math.round(current.wind_speed)} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
