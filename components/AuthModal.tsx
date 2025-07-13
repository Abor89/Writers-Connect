"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Briefcase } from "lucide-react"
import { useAuth } from "./AuthContext"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: "signin" | "signup"
  userType?: "writer" | "client"
}

export default function AuthModal({ isOpen, onClose, initialMode = "signin", userType = "client" }: AuthModalProps) {
  const { login, signup } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mode, setMode] = useState(initialMode)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    profession: "",
    referralCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`)
    // In a real app, this would integrate with OAuth providers
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (mode === "signin") {
        const success = await login(formData.email, formData.password, userType)
        if (success) {
          onClose()
          // Redirect will happen in the parent component
        }
      } else {
        const success = await signup({
          ...formData,
          userType,
        })
        if (success) {
          onClose()
          // Redirect will happen in the parent component
        }
      }
    } catch (error) {
      console.error("Auth error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass card-shadow rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {mode === "signin" ? "Welcome Back" : "Join Writers Connect"}
            </h2>
            <p className="text-gray-600">
              {mode === "signin" ? `Sign in to your ${userType} account` : `Create your ${userType} account`}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 transition-colors">
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          {[
            { name: "Google", icon: "🔍", color: "from-red-500 to-red-600" },
            { name: "Facebook", icon: "📘", color: "from-blue-600 to-blue-700" },
            { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-blue-800" },
            { name: "X (Twitter)", icon: "🐦", color: "from-gray-800 to-black" },
          ].map((provider) => (
            <motion.button
              key={provider.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSocialLogin(provider.name)}
              className={`w-full bg-gradient-to-r ${provider.color} text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-3 shadow-lg`}
            >
              <span className="text-xl">{provider.icon}</span>
              <span>Continue with {provider.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="location"
                  placeholder="Location (City, State)"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {userType === "writer" && (
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="profession"
                    placeholder="Writing Specialization"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {mode === "signup" && (
            <>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Referral Code */}
              <div className="relative">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">Referral Code (Optional)</span>
                  <div className="group relative">
                    <span className="text-blue-500 cursor-help">ℹ️</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Get bonus credits with a referral code!
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Enter referral code"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-xl font-semibold shadow-lg ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            }`}
          >
            {isSubmitting ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
          </motion.button>
        </form>

        {/* Toggle Mode */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {mode === "signin" ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              {mode === "signin" ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        {/* Forgot Password */}
        {mode === "signin" && (
          <div className="text-center mt-4">
            <button className="text-blue-600 text-sm hover:underline">Forgot your password?</button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
