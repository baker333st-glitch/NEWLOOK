import WeatherDashboard from "@/components/weather/WeatherDashboard";

export const metadata = {
  title: "Weather Dashboard - NEW LOOK",
  description: "Real-time weather information and forecasts",
};

export default function WeatherPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Weather Dashboard</h1>
      <p className="text-gray-600 mb-8">Get real-time weather information for any location</p>
      <WeatherDashboard />
    </div>
  );
}
