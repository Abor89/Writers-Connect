"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import SwipeCard from "@/components/SwipeCard"
import { Filter, Heart, X, RotateCcw } from "lucide-react"

// Mock data for writers
const mockWriters = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=400&width=400",
    title: "Technical Content Writer",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 85,
    responseTime: "1 hour",
    skills: ["Technical Writing", "SaaS", "API Documentation", "User Guides", "Blog Posts"],
    bio: "Specialized technical writer with 8+ years creating clear, engaging content for tech companies. I help SaaS companies explain complex products simply.",
    portfolio: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    avatar: "/placeholder.svg?height=400&width=400",
    title: "Marketing Copywriter",
    location: "Austin, TX",
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 75,
    responseTime: "2 hours",
    skills: ["Copywriting", "Email Marketing", "Landing Pages", "Social Media", "Brand Voice"],
    bio: "Creative copywriter who crafts compelling marketing content that converts. Experienced with e-commerce, fintech, and lifestyle brands.",
    portfolio: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    id: "3",
    name: "Emily Watson",
    avatar: "/placeholder.svg?height=400&width=400",
    title: "Content Strategist",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 156,
    hourlyRate: 95,
    responseTime: "30 minutes",
    skills: ["Content Strategy", "SEO Writing", "Editorial", "Brand Storytelling", "Analytics"],
    bio: "Strategic content creator with a data-driven approach. I help brands build authority through thoughtful, SEO-optimized content that engages audiences.",
    portfolio: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "/placeholder.svg?height=400&width=400",
    title: "UX Writer",
    location: "Seattle, WA",
    rating: 4.7,
    reviewCount: 73,
    hourlyRate: 90,
    responseTime: "1 hour",
    skills: ["UX Writing", "Microcopy", "User Research", "Product Content", "Voice & Tone"],
    bio: "UX writer passionate about creating intuitive, user-friendly interfaces. I work with product teams to craft clear, helpful copy that guides users.",
    portfolio: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    id: "5",
    name: "Lisa Thompson",
    avatar: "/placeholder.svg?height=400&width=400",
    title: "Blog Writer & Editor",
    location: "Denver, CO",
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: 65,
    responseTime: "3 hours",
    skills: ["Blog Writing", "Editing", "Research", "SEO", "Content Planning"],
    bio: "Versatile writer and editor specializing in long-form content. I create engaging blog posts that drive traffic and establish thought leadership.",
    portfolio: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
]

export default function ExplorePage() {
  const [writers, setWriters] = useState(mockWriters)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matches, setMatches] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const handleSwipe = (direction: "left" | "right", writer: any) => {
    if (direction === "right") {
      setMatches((prev) => [...prev, writer.id])
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 300)
  }

  const resetStack = () => {
    setCurrentIndex(0)
    setWriters([...mockWriters])
  }

  const currentWriter = writers[currentIndex]
  const nextWriter = writers[currentIndex + 1]

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Discover Writers</h1>
              <p className="text-gray-600">Swipe right to connect, left to pass</p>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="glass px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <Filter size={18} />
                <span>Filters</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetStack}
                className="glass px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <RotateCcw size={18} />
                <span>Reset</span>
              </motion.button>
            </div>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="glass card-shadow rounded-2xl p-6 mb-8"
              >
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>Any Rate</option>
                      <option>$25-50/hr</option>
                      <option>$50-75/hr</option>
                      <option>$75-100/hr</option>
                      <option>$100+/hr</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>All Specializations</option>
                      <option>Technical Writing</option>
                      <option>Marketing Copy</option>
                      <option>Content Strategy</option>
                      <option>UX Writing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>Any Rating</option>
                      <option>4.5+ Stars</option>
                      <option>4.0+ Stars</option>
                      <option>3.5+ Stars</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Response Time</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>Any Time</option>
                      <option>Within 1 hour</option>
                      <option>Within 3 hours</option>
                      <option>Within 24 hours</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card Stack */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-[600px]">
              {currentIndex >= writers.length ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass card-shadow rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No More Writers!</h3>
                  <p className="text-gray-600 mb-6">
                    You've seen all available writers. Check back later for new matches or adjust your filters.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetStack}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Start Over
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {/* Next card (behind) */}
                  {nextWriter && (
                    <SwipeCard key={`${nextWriter.id}-next`} writer={nextWriter} onSwipe={handleSwipe} isTop={false} />
                  )}

                  {/* Current card (top) */}
                  {currentWriter && (
                    <SwipeCard
                      key={`${currentWriter.id}-current`}
                      writer={currentWriter}
                      onSwipe={handleSwipe}
                      isTop={true}
                    />
                  )}
                </>
              )}
            </div>
          </div>

          {/* Match Counter */}
          {matches.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-8">
              <div className="glass px-6 py-3 rounded-full inline-flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-semibold">
                  {matches.length} {matches.length === 1 ? "Match" : "Matches"}
                </span>
              </div>
            </motion.div>
          )}

          {/* Instructions */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-600">Swipe right to connect • Swipe left to pass • Use buttons below</p>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2 text-red-500">
                <X size={20} />
                <span className="text-sm">Pass</span>
              </div>
              <div className="flex items-center space-x-2 text-green-500">
                <Heart size={20} />
                <span className="text-sm">Connect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
