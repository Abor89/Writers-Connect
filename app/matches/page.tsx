"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { MessageCircle, Star, MapPin, Clock, DollarSign, Heart } from "lucide-react"

// Mock matches data
const mockMatches = [
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
    matchedAt: "2 hours ago",
    lastMessage: "Hi! I'd love to discuss your project requirements.",
    isOnline: true,
    skills: ["Technical Writing", "SaaS", "API Documentation"],
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
    matchedAt: "1 day ago",
    lastMessage: "Thanks for the match! When would be a good time to chat?",
    isOnline: false,
    skills: ["Copywriting", "Email Marketing", "Landing Pages"],
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
    matchedAt: "3 days ago",
    lastMessage: "I have some great ideas for your content strategy!",
    isOnline: true,
    skills: ["Content Strategy", "SEO Writing", "Editorial"],
  },
]

export default function MatchesPage() {
  const [matches] = useState(mockMatches)
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null)

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Matches</h1>
            <p className="text-gray-600">Writers who are interested in working with you</p>
          </div>

          {matches.length === 0 ? (
            /* Empty State */
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
              <div className="glass card-shadow rounded-3xl p-12 max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Matches Yet</h3>
                <p className="text-gray-600 mb-6">
                  Start exploring writers to find your perfect matches. Swipe right on writers you'd like to work with!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Explore Writers
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* Matches Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass card-shadow rounded-2xl p-6 cursor-pointer"
                  onClick={() => setSelectedMatch(match.id)}
                >
                  {/* Match Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={match.avatar || "/placeholder.svg"}
                          alt={match.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {match.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{match.name}</h3>
                        <p className="text-blue-600 font-medium text-sm">{match.title}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{match.matchedAt}</div>
                  </div>

                  {/* Match Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{match.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{match.rating}</span>
                        <span className="text-gray-500">({match.reviewCount})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-green-600">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold">${match.hourlyRate}/hr</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{match.responseTime}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {match.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {match.skills.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{match.skills.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Last Message */}
                  {match.lastMessage && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-700 line-clamp-2">{match.lastMessage}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full font-medium text-sm flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={16} />
                      <span>Message</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 font-medium text-sm hover:bg-gray-50"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Match Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <div className="glass card-shadow rounded-2xl p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">💡 Tips for Better Matches</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <strong className="text-gray-800">Be Specific:</strong> Clearly describe your project needs and
                  expectations in your first message.
                </div>
                <div>
                  <strong className="text-gray-800">Respond Quickly:</strong> Fast responses show professionalism and
                  keep momentum going.
                </div>
                <div>
                  <strong className="text-gray-800">Check Portfolios:</strong> Review their previous work to ensure it
                  aligns with your project style.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
