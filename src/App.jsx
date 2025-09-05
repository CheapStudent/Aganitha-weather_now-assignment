import { useState } from "react";
import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";

// simple mapping
const weatherLabels = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  51: "Light Drizzle",
  61: "Rain",
  71: "Snow",
};

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Geocoding ---
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=10`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const lowerInput = city.toLowerCase();
      let match = geoData.results.find(
        (r) =>
          r.country_code === "IN" &&
          r.admin1 &&
          r.admin1.toLowerCase().includes("uttar pradesh")
      );

      // fallback: any Indian city
      if (!match) {
        match =
          geoData.results.find((r) => r.country_code === "IN") ||
          geoData.results[0];
      }

      const { latitude, longitude, name, admin1, country } = match;

      //Weather ---
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m`
      );
      const weatherData = await weatherRes.json();

      const { temperature, windspeed, weathercode } = weatherData.current_weather;
      const humidity = weatherData.hourly.relative_humidity_2m?.[0] ?? "—";

      setWeather({
        city: name,
        state: admin1 || "",
        country,
        temperature,
        humidity,
        windspeed,
        label: weatherLabels[weathercode] || "Unknown",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
        Weather Now
      </h1>

      {/* Search Box */}
      <form onSubmit={fetchWeather} className="flex w-full max-w-lg gap-3 mb-8">
        <input
          type="text"
          placeholder="Search city"
          className="flex-1 px-5 py-3 rounded-xl bg-white/90 border shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
        >
          Search
        </button>
      </form>

      {loading && <Loader />}
      {error && (
        <p className="bg-red-600 text-white px-4 py-2 rounded shadow">{error}</p>
      )}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
