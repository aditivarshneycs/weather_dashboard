import { NextResponse } from "next/server"

// Normally you would use environment variables for API keys
// For this example, you would need to add OPENWEATHER_API_KEY to your .env.local file
const API_KEY = process.env.OPENWEATHER_API_KEY || ""

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")

  if (!city) {
    return NextResponse.json({ message: "City parameter is required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    )

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        {
          message: errorData.message || "Failed to fetch weather data",
        },
        { status: response.status },
      )
    }

    const data = await response.json()

    // Transform the data to our desired format
    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility,
      timestamp: data.dt,
    }

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error("Error fetching weather data:", error)
    return NextResponse.json({ message: "Failed to fetch weather data" }, { status: 500 })
  }
}
