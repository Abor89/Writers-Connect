"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/components/AuthContext"
import { Plus, Briefcase, Users, CheckCircle, DollarSign, Star, MessageCircle } from "lucide-react"

export default function ClientDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    } else if (user.userType !== "client") {
      router.push("/dashboard/writer")
    }
  }, [user, router])

  if (!user || user.userType !== "client") {
    return <div>Loading...</div>
  }

  const stats = [
    { label: "Active Projects", value: "5", icon: Briefcase, color: "from-blue-400 to-blue-600" },
    { label: "Total Spent", value: "$3,200", icon: DollarSign, color: "from-green-400 to-green-600" },
    { label: "Writers Hired", value: "12", icon: Users, color: "from-purple-400 to-purple-600" },
    { label: "Avg. Rating Given", value: "4.8", icon: Star, color: "from-yellow-400 to-yellow-600" },
  ]

  const activeProjects = [
    {
      id: "1",
      title: "Website Content Rewrite",
      writer: "Sarah Chen",
      status: "In Progress",
      deadline: "Dec 28, 2024",
      budget: "$1,200",
      progress: 60,
    },
    {
      id: "2",
      title: "Product Launch Blog Series",
      writer: "Marcus Rodriguez",
      status: "Review",
      deadline: "Dec 22, 2024",
      budget: "$800",
      progress: 100,
    },
    {
      id: "3",
      title: "Email Marketing Campaign",
      writer: "Emily Watson",
      status: "Starting",
      deadline: "Jan 5, 2025",
      budget: "$600",
      progress: 10,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, {user.firstName}! 👋</h1>
                <p className="text-gray-600">Manage your projects and find talented writers</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg flex items-center space-x-2"
              >
                <Plus size={16} />
                <span>Post New Project</span>
              </motion.button>
            </div>
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
            {/* Active Projects */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass card-shadow rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Active Projects</h3>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="bg-white/50 rounded-lg p-4 border border-white/30">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800 text-sm">{project.title}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === "Review"
                              ? "bg-yellow-100 text-yellow-700"
                              : project.status === "Starting"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">Writer: {project.writer}</p>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-500">Due: {project.deadline}</span>
                        <span className="font-semibold text-green-600">{project.budget}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex-1 mr-4">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 mt-1">{project.progress}% complete</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions & Recent Activity */}
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
                    Find Writers
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/50 border border-white/30 text-gray-700 py-2 px-4 rounded-lg font-medium text-sm hover:bg-white/70 transition-colors"
                  >
                    View Proposals
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/50 border border-white/30 text-gray-700 py-2 px-4 rounded-lg font-medium text-sm hover:bg-white/70 transition-colors"
                  >
                    Payment History
                  </motion.button>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass card-shadow rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: CheckCircle,
                      text: "Project completed by Sarah Chen",
                      time: "2h ago",
                      color: "text-green-500",
                    },
                    {
                      icon: MessageCircle,
                      text: "New message from Marcus Rodriguez",
                      time: "4h ago",
                      color: "text-blue-500",
                    },
                    {
                      icon: Users,
                      text: "3 new proposals received",
                      time: "1d ago",
                      color: "text-purple-500",
                    },
                  ].map((activity, index) => {
                    const Icon = activity.icon
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon className={`w-5 h-5 ${activity.color} mt-0.5`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-800">{activity.text}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
