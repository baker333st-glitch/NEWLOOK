const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping"></div>
        <div className="absolute inset-0 bg-blue-600 rounded-full"></div>
      </div>
      <p className="ml-4 text-gray-600 font-semibold">Fetching weather data...</p>
    </div>
  );
};

export default LoadingSpinner;
