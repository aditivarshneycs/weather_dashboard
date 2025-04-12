import { Cloud, Droplets, Eye, Thermometer, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeatherData } from "./weather-dashboard"

interface WeatherCardProps {
  data: WeatherData
}

export default function WeatherCard({ data }: WeatherCardProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">
              {data.city}, {data.country}
            </CardTitle>
            <p className="text-sm opacity-90">Updated at {formatTime(data.timestamp)}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt={data.description}
              width={80}
              height={80}
              className="mb-1"
            />
            <p className="text-sm capitalize">{data.description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Thermometer className="h-6 w-6 text-orange-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
                <p className="text-2xl font-bold">{data.temperature}°C</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Thermometer className="h-6 w-6 text-red-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Feels Like</p>
                <p className="text-2xl font-bold">{data.feels_like}°C</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Wind className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
                <p className="text-2xl font-bold">{data.wind_speed} m/s</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Droplets className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
                <p className="text-2xl font-bold">{data.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3">
            <Cloud className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pressure</p>
              <p className="font-medium">{data.pressure} hPa</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Eye className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Visibility</p>
              <p className="font-medium">{(data.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
