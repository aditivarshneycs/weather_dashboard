"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onSearch: (city: string) => void
  isLoading: boolean
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [city, setCity] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="pr-10"
          disabled={isLoading}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Searching..." : "Get Weather"}
      </Button>
    </form>
  )
}
