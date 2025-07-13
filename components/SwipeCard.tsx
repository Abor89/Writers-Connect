"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { Star, MapPin, Clock, DollarSign, Heart, X } from "lucide-react"

interface Writer {
  id: string
  name: string
  avatar: string
  title: string
  location: string
  rating: number
  reviewCount: number
  hourlyRate: number
  responseTime: string
  skills: string[]
  bio: string
  portfolio: string[]
}

interface SwipeCardProps {
  writer: Writer
  onSwipe: (direction: "left" | "right", writer: Writer) => void
  isTop?: boolean
}

export default function SwipeCard({ writer, onSwipe, isTop = false }: SwipeCardProps) {
  const [exitX, setExitX] = useState(0)
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0])

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100
    if (info.offset.x > threshold) {
      setExitX(200)
      onSwipe("right", writer)
    } else if (info.offset.x < -threshold) {
      setExitX(-200)
      onSwipe("left", writer)
    }
  }

  const handleButtonSwipe = (direction: "left" | "right") => {
    setExitX(direction === "right" ? 200 : -200)
    onSwipe(direction, writer)
  }

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x, rotate, opacity }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={exitX !== 0 ? { x: exitX } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileHover={isTop ? { scale: 1.02 } : {}}
    >
      <div className="glass card-shadow rounded-3xl p-6 h-full max-w-sm mx-auto">
        {/* Profile Image */}
        <div className="relative mb-4">
          <img
            src="/placeholder.svg?height=256&width=400"
            alt={writer.name}
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className="absolute top-4 right-4 glass rounded-full px-3 py-1">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold">{writer.rating}</span>
            </div>
          </div>
        </div>

        {/* Writer Info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{writer.name}</h3>
            <p className="text-blue-600 font-medium">{writer.title}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{writer.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{writer.responseTime}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-600">${writer.hourlyRate}/hr</span>
            </div>
            <div className="text-sm text-gray-600">{writer.reviewCount} reviews</div>
          </div>

          <p className="text-gray-700 text-sm line-clamp-3">{writer.bio}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {writer.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
            {writer.skills.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{writer.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {isTop && (
          <div className="flex justify-center space-x-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleButtonSwipe("left")}
              className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <X size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleButtonSwipe("right")}
              className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <Heart size={24} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  )
}
