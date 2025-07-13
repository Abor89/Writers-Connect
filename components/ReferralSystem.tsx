"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Share2, Gift, Users, DollarSign, Star, Check } from "lucide-react"

interface ReferralSystemProps {
  userType: "writer" | "client"
}

export default function ReferralSystem({ userType }: ReferralSystemProps) {
  const [referralCode] = useState("WC" + Math.random().toString(36).substr(2, 8).toUpperCase())
  const [copied, setCopied] = useState(false)
  const [referralStats] = useState({
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarned: userType === "writer" ? 240 : 180,
    pendingRewards: userType === "writer" ? 60 : 45,
  })

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join Writers Connect",
        text: `Join me on Writers Connect with my referral code: ${referralCode}`,
        url: `https://writersconnect.com/signup?ref=${referralCode}`,
      })
    }
  }

  const writerBenefits = [
    {
      icon: DollarSign,
      title: "Earn $20 per referral",
      description: "Get $20 for each writer who joins and completes their first project",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Star,
      title: "Priority matching",
      description: "Referred writers get priority in our matching algorithm",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Users,
      title: "Build your network",
      description: "Create a network of writers and earn from their success",
      color: "from-blue-400 to-blue-600",
    },
  ]

  const clientBenefits = [
    {
      icon: DollarSign,
      title: "Earn $15 per referral",
      description: "Get $15 for each client who joins and posts their first project",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Gift,
      title: "Service credits",
      description: "Earn credits towards your next writing project",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Star,
      title: "VIP support",
      description: "Get priority customer support and dedicated account management",
      color: "from-orange-400 to-orange-600",
    },
  ]

  const benefits = userType === "writer" ? writerBenefits : clientBenefits

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Referral Program</h2>
        <p className="text-xl text-gray-600">
          {userType === "writer" ? "Invite fellow writers and earn together" : "Refer clients and get rewarded"}
        </p>
      </div>

      {/* Referral Code Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass card-shadow rounded-2xl p-8"
      >
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
            <Gift className="w-10 h-10 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Your Referral Code</h3>
            <div className="bg-white/50 rounded-xl p-4 border-2 border-dashed border-blue-300">
              <div className="text-3xl font-bold text-blue-600 mb-4">{referralCode}</div>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyReferralCode}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all ${
                    copied ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  <span>{copied ? "Copied!" : "Copy Code"}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shareReferral}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 transition-colors"
                >
                  <Share2 size={18} />
                  <span>Share</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Total Referrals", value: referralStats.totalReferrals, icon: Users },
          { label: "Active Referrals", value: referralStats.activeReferrals, icon: Star },
          { label: "Total Earned", value: `$${referralStats.totalEarned}`, icon: DollarSign },
          { label: "Pending Rewards", value: `$${referralStats.pendingRewards}`, icon: Gift },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {userType === "writer" ? "Writer Referral Benefits" : "Client Referral Benefits"}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass card-shadow rounded-2xl p-6 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* How it Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass card-shadow rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Share Your Code",
              description: `Share your referral code with ${userType === "writer" ? "fellow writers" : "potential clients"}`,
            },
            {
              step: "2",
              title: "They Sign Up",
              description: `When they join using your code, you both get ${userType === "writer" ? "priority matching" : "bonus credits"}`,
            },
            {
              step: "3",
              title: "Earn Rewards",
              description: `Get paid when they complete their first ${userType === "writer" ? "project" : "hire"}`,
            },
          ].map((step, index) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{step.step}</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Terms */}
      <div className="text-center text-sm text-gray-500">
        <p>
          * Referral rewards are paid within 30 days of successful completion.
          <br />
          Terms and conditions apply. Maximum 50 referrals per month.
        </p>
      </div>
    </div>
  )
}
