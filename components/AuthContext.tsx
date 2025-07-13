"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  userType: "writer" | "client"
  avatar?: string
  isVerified: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, userType: "writer" | "client") => Promise<boolean>
  signup: (userData: any) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, userType: "writer" | "client"): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful login
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      firstName: "John",
      lastName: "Doe",
      userType,
      avatar: "/placeholder.svg?height=100&width=100",
      isVerified: true,
    }

    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    setIsLoading(false)
    return true
  }

  const signup = async (userData: any): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful signup
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      userType: userData.userType,
      avatar: "/placeholder.svg?height=100&width=100",
      isVerified: false,
    }

    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
