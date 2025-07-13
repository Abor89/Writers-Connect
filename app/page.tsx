"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import OnboardingFlow from "@/components/OnboardingFlow"
import { ArrowRight, Star, Users, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const router = useRouter()

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
  }

  const stats = [
    { label: "Active Writers", value: "10K+", icon: Users },
    { label: "Projects Completed", value: "50K+", icon: Star },
    { label: "Client Satisfaction", value: "98%", icon: Shield },
    { label: "Average Response", value: "2hrs", icon: Zap },
  ]

  return (
    <>
      <Navbar />

      {showOnboarding && <OnboardingFlow onComplete={handleOnboardingComplete} />}

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="gradient-text">Writers Connect</span>
                  <br />
                  <span className="text-gray-800">Where Quality Meets</span>
                  <br />
                  <span className="text-gray-800">Opportunity</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The premium platform connecting talented writers with quality clients through curated matches, fair
                  pricing, and secure transactions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <Link href="/auth">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-xl shadow-lg flex items-center space-x-3"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={24} />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass card-shadow rounded-2xl p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Writers Connect?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've solved the problems that plague other freelancing platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Curated Quality",
                  description:
                    "Every writer is pre-screened and verified. No more sifting through low-quality proposals.",
                  icon: Shield,
                  color: "from-green-400 to-green-600",
                },
                {
                  title: "Fair Pricing",
                  description: "Transparent rates with no hidden fees. Secure escrow protects all transactions.",
                  icon: Star,
                  color: "from-yellow-400 to-yellow-600",
                },
                {
                  title: "Perfect Matches",
                  description: "Our algorithm connects you with the right people based on style, genre, and expertise.",
                  icon: Users,
                  color: "from-blue-400 to-blue-600",
                },
                {
                  title: "Community Driven",
                  description: "Fair ratings and dispute resolution protect both writers and clients.",
                  icon: Shield,
                  color: "from-purple-400 to-purple-600",
                },
                {
                  title: "Fast Response",
                  description: "Average response time of 2 hours. Get your projects moving quickly.",
                  icon: Zap,
                  color: "from-orange-400 to-orange-600",
                },
                {
                  title: "Secure Platform",
                  description: "End-to-end encryption and secure payments keep your data and money safe.",
                  icon: Shield,
                  color: "from-red-400 to-red-600",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="glass card-shadow rounded-2xl p-8 text-center"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass card-shadow rounded-3xl p-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Writing Business?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of writers and clients who've found their perfect match
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/auth")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                Get Started Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
