// WeatherCard.jsx
// UI component for showing the fetched weather details

export default function WeatherCard({ weather }) {
  return (

    
    //City, State, Country
    <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg text-center">
      <h2 className="text-xl font-bold text-gray-800">
        {weather.city}
        {weather.state && `, ${weather.state}`} — {weather.country}
      </h2>


      <div className="mt-4 space-y-2 text-gray-700">

        {/* Temperature */}
        <p className="text-2xl font-semibold">{Math.round(weather.temperature)}°C</p>

        
        {/* Weather condition label */}
        <p className="text-lg">{weather.label}</p>


        {/* Extra details */}
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind: {weather.windspeed} km/h</p>
      </div>
    </div>
  );
}
