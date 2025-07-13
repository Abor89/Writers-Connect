"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/components/AuthContext"
import { DollarSign, Star, Briefcase, Clock } from "lucide-react"

export default function WriterDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    } else if (user.userType !== "writer") {
      router.push("/dashboard/client")
    }
  }, [user, router])

  if (!user || user.userType !== "writer") {
    return <div>Loading...</div>
  }

  const stats = [
    { label: "Total Earnings", value: "$2,450", icon: DollarSign, color: "from-green-400 to-green-600" },
    { label: "Active Projects", value: "3", icon: Briefcase, color: "from-blue-400 to-blue-600" },
    { label: "Client Rating", value: "4.9", icon: Star, color: "from-yellow-400 to-yellow-600" },
    { label: "Response Time", value: "1.2hrs", icon: Clock, color: "from-purple-400 to-purple-600" },
  ]

  const recentProjects = [
    {
      id: "1",
      title: "Technical Documentation for SaaS Platform",
      client: "TechCorp Inc.",
      status: "In Progress",
      deadline: "Dec 25, 2024",
      payment: "$850",
      progress: 75,
    },
    {
      id: "2",
      title: "Blog Posts for Marketing Agency",
      client: "Creative Solutions",
      status: "Review",
      deadline: "Dec 20, 2024",
      payment: "$450",
      progress: 100,
    },
    {
      id: "3",
      title: "Product Descriptions for E-commerce",
      client: "ShopMart",
      status: "Completed",
      deadline: "Dec 15, 2024",
      payment: "$320",
      progress: 100,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, {user.firstName}! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your writing business</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass card-shadow rounded-xl p-4"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-3`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Projects */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass card-shadow rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Projects</h3>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="bg-white/50 rounded-lg p-4 border border-white/30">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800 text-sm">{project.title}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : project.status === "Review"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{project.client}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Due: {project.deadline}</span>
                        <span className="font-semibold text-green-600">{project.payment}</span>
                      </div>
                      {project.progress < 100 && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 mt-1">{project.progress}% complete</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions & Notifications */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass card-shadow rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-sm"
                  >
                    Browse New Projects
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/50 border border-white/30 text-gray-700 py-2 px-4 rounded-lg font-medium text-sm hover:bg-white/70 transition-colors"
                  >
                    Update Portfolio
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/50 border border-white/30 text-gray-700 py-2 px-4 rounded-lg font-medium text-sm hover:bg-white/70 transition-colors"
                  >
                    View Analytics
                  </motion.button>
                </div>
              </motion.div>

              {/* Recent Messages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass card-shadow rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Messages</h3>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Johnson", message: "Great work on the blog post!", time: "2h ago" },
                    { name: "Mike Chen", message: "Can we schedule a call?", time: "4h ago" },
                    { name: "Lisa Park", message: "Project approved, thanks!", time: "1d ago" },
                  ].map((msg, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img src="/placeholder.svg?height=32&width=32" alt={msg.name} className="w-8 h-8 rounded-full" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">{msg.name}</p>
                        <p className="text-xs text-gray-600 truncate">{msg.message}</p>
                        <p className="text-xs text-gray-500">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
