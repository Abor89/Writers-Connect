"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import AuthModal from "@/components/AuthModal"
import { Users, Star, Shield, Zap } from "lucide-react"
import { useAuth } from "@/components/AuthContext"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup")
  const [userType, setUserType] = useState<"writer" | "client">("client")

  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      // Redirect to appropriate dashboard
      if (user.userType === "writer") {
        router.push("/dashboard/writer")
      } else {
        router.push("/dashboard/client")
      }
    }
  }, [user, router])

  const openAuth = (mode: "signin" | "signup", type: "writer" | "client") => {
    setAuthMode(mode)
    setUserType(type)
    setShowAuthModal(true)
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">Join Writers Connect</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your path and start connecting with the right people for your writing needs
              </p>
            </motion.div>
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Writer Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass card-shadow rounded-3xl p-8 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">I'm a Writer</h2>
              <p className="text-gray-600 mb-8">
                Showcase your skills, connect with quality clients, and build your writing career with fair compensation
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Fair pay guaranteed</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Quality client matching</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <Zap className="w-4 h-4 text-purple-500" />
                  <span>Professional growth tools</span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openAuth("signup", "writer")}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg"
                >
                  Join as Writer
                </motion.button>
                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => openAuth("signin", "writer")}
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </motion.div>

            {/* Client Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass card-shadow rounded-3xl p-8 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">I'm a Client</h2>
              <p className="text-gray-600 mb-8">
                Find talented writers, get quality content, and grow your business with professional writing services
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Vetted professional writers</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Quality guarantee</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>Fast project delivery</span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openAuth("signup", "client")}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg"
                >
                  Join as Client
                </motion.button>
                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => openAuth("signin", "client")}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Why Choose Writers Connect?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Secure Platform", desc: "Your data and payments are protected" },
                { icon: Users, title: "Quality Matches", desc: "AI-powered matching algorithm" },
                { icon: Star, title: "Top Rated", desc: "Only verified, high-quality professionals" },
                { icon: Zap, title: "Fast Results", desc: "Quick turnaround on all projects" },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="glass card-shadow rounded-2xl p-6"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
        userType={userType}
      />
    </>
  )
}
