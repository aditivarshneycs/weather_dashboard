"use client"

import { useState } from "react"
import SearchBar from "./search-bar"
import WeatherCard from "./weather-card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export type WeatherData = {
  city: string
  country: string
  temperature: number
  feels_like: number
  description: string
  icon: string
  humidity: number
  wind_speed: number
  pressure: number
  visibility: number
  timestamp: number
}

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async (city: string) => {
    if (!city.trim()) {
      setError("Please enter a city name")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather data")
      }

      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <SearchBar onSearch={fetchWeather} isLoading={loading} />

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {weatherData && <WeatherCard data={weatherData} />}

      {!weatherData && !error && !loading && (
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-500 dark:text-gray-400">Enter a city name to get the current weather information</p>
        </div>
      )}
    </div>
  )
}
