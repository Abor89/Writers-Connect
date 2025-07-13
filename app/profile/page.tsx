"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { Edit, Star, MapPin, Clock, DollarSign, Award, Briefcase, User, Settings } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass card-shadow rounded-3xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <Edit size={18} />
                </motion.button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Sarah Chen</h1>
                    <p className="text-xl text-blue-600 font-medium mb-2">Technical Content Writer</p>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>Responds in 1 hour</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold mt-4 md:mt-0"
                  >
                    Edit Profile
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-2xl font-bold text-gray-800">4.9</span>
                    </div>
                    <p className="text-gray-600 text-sm">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">127</div>
                    <p className="text-gray-600 text-sm">Reviews</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-2xl font-bold text-gray-800">85</span>
                    </div>
                    <p className="text-gray-600 text-sm">Per Hour</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">89%</div>
                    <p className="text-gray-600 text-sm">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="glass card-shadow rounded-2xl p-2 mb-8">
            <div className="flex space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-gray-600 hover:bg-white/30"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* About */}
                <div className="glass card-shadow rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">About Me</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I'm a specialized technical writer with 8+ years of experience creating clear, engaging content for
                    tech companies. I help SaaS companies explain complex products simply, focusing on API
                    documentation, user guides, and developer resources. My background in software engineering gives me
                    a unique perspective on technical communication.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Technical Writing",
                      "API Documentation",
                      "SaaS",
                      "User Guides",
                      "Developer Resources",
                      "Content Strategy",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="glass card-shadow rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Experience</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Senior Technical Writer",
                        company: "Stripe",
                        period: "2020 - Present",
                        description:
                          "Lead technical documentation for payment APIs, serving millions of developers worldwide.",
                      },
                      {
                        title: "Content Strategist",
                        company: "Notion",
                        period: "2018 - 2020",
                        description: "Developed comprehensive documentation strategy and user onboarding content.",
                      },
                      {
                        title: "Technical Writer",
                        company: "Various Startups",
                        period: "2016 - 2018",
                        description: "Freelance technical writing for early-stage SaaS companies and developer tools.",
                      },
                    ].map((job, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{job.title}</h4>
                          <p className="text-blue-600 font-medium">{job.company}</p>
                          <p className="text-gray-500 text-sm mb-2">{job.period}</p>
                          <p className="text-gray-700">{job.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="glass card-shadow rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { icon: Award, title: "Top Rated Writer", description: "Maintained 4.9+ rating for 2+ years" },
                      { icon: Star, title: "100+ Projects", description: "Successfully completed over 100 projects" },
                      { icon: User, title: "Repeat Clients", description: "85% of clients return for more work" },
                      { icon: Clock, title: "Fast Delivery", description: "Average delivery 20% faster than promised" },
                    ].map((achievement, index) => {
                      const Icon = achievement.icon
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                            <p className="text-gray-600 text-sm">{achievement.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div className="glass card-shadow rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Portfolio</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -5 }}
                      className="bg-white/50 rounded-xl p-4 border border-white/30"
                    >
                      <img
                        src={`/placeholder.svg?height=200&width=300`}
                        alt={`Portfolio item ${item}`}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h4 className="font-semibold text-gray-800 mb-2">API Documentation Project</h4>
                      <p className="text-gray-600 text-sm">Comprehensive API docs for fintech startup</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="glass card-shadow rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Client Reviews</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "John Smith",
                      company: "TechCorp",
                      rating: 5,
                      review:
                        "Sarah delivered exceptional technical documentation that exceeded our expectations. Her ability to simplify complex concepts is remarkable.",
                      date: "2 weeks ago",
                    },
                    {
                      name: "Maria Garcia",
                      company: "StartupXYZ",
                      rating: 5,
                      review:
                        "Outstanding work on our API documentation. Sarah was professional, responsive, and delivered on time. Highly recommended!",
                      date: "1 month ago",
                    },
                    {
                      name: "David Lee",
                      company: "DevTools Inc",
                      rating: 5,
                      review:
                        "Sarah transformed our scattered documentation into a cohesive, user-friendly resource. Our developer adoption increased significantly.",
                      date: "2 months ago",
                    },
                  ].map((review, index) => (
                    <div key={index} className="bg-white/50 rounded-xl p-6 border border-white/30">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-800">{review.name}</h4>
                          <p className="text-blue-600 text-sm">{review.company}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-8">
                <div className="glass card-shadow rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Notifications</label>
                      <div className="space-y-2">
                        {["New messages", "Project updates", "Payment notifications", "Marketing emails"].map(
                          (option) => (
                            <label key={option} className="flex items-center">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-blue-600 mr-3"
                                defaultChecked
                              />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Availability Status</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Available for new projects</option>
                        <option>Busy - limited availability</option>
                        <option>Not accepting new projects</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}
