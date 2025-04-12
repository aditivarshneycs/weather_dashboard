import { NextResponse } from "next/server"

// This is a mock API route for testing without an API key
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")

  if (!city) {
    return NextResponse.json({ message: "City parameter is required" }, { status: 400 })
  }

  // Mock data for London
  if (city.toLowerCase() === "london") {
    return NextResponse.json({
      city: "London",
      country: "GB",
      temperature: 15,
      feels_like: 14,
      description: "scattered clouds",
      icon: "03d",
      humidity: 76,
      wind_speed: 4.12,
      pressure: 1012,
      visibility: 10000,
      timestamp: Math.floor(Date.now() / 1000),
    })
  }

  // Mock data for New York
  if (city.toLowerCase() === "new york") {
    return NextResponse.json({
      city: "New York",
      country: "US",
      temperature: 22,
      feels_like: 23,
      description: "clear sky",
      icon: "01d",
      humidity: 65,
      wind_speed: 3.6,
      pressure: 1015,
      visibility: 10000,
      timestamp: Math.floor(Date.now() / 1000),
    })
  }

  // Mock data for Tokyo
  if (city.toLowerCase() === "tokyo") {
    return NextResponse.json({
      city: "Tokyo",
      country: "JP",
      temperature: 28,
      feels_like: 30,
      description: "light rain",
      icon: "10d",
      humidity: 80,
      wind_speed: 2.1,
      pressure: 1008,
      visibility: 8000,
      timestamp: Math.floor(Date.now() / 1000),
    })
  }

  // Default response for other cities
  return NextResponse.json({ message: "City not found" }, { status: 404 })
}
