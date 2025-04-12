import WeatherDashboard from "@/components/weather-dashboard"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800 dark:text-blue-400">
          Real-Time Weather Dashboard
        </h1>
        <WeatherDashboard />
      </div>
    </main>
  )
}
