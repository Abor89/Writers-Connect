"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Check, Users, Shield, DollarSign, Star } from "lucide-react"

interface OnboardingStep {
  id: number
  title: string
  subtitle: string
  content: React.ReactNode
}

export default function OnboardingFlow({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [userType, setUserType] = useState<"writer" | "client" | null>(null)

  const steps: OnboardingStep[] = [
    {
      id: 0,
      title: "Welcome to Writers Connect",
      subtitle: "Where quality writing meets fair opportunities",
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-white">
              <rect x="8" y="22" width="14" height="2" fill="currentColor" rx="1" />
              <rect x="26" y="22" width="14" height="2" fill="currentColor" rx="1" />
              <circle cx="24" cy="23" r="4" fill="currentColor" />
              <path d="M22.5 20v6M25.5 20v6M22.5 21h3M22.5 25h3" stroke="white" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg">
            Join the platform that's revolutionizing how writers and clients connect
          </p>
        </div>
      ),
    },
    {
      id: 1,
      title: "Choose Your Path",
      subtitle: "Are you looking to hire writers or offer writing services?",
      content: (
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setUserType("client")}
            className={`w-full p-6 rounded-2xl border-2 transition-all ${
              userType === "client" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">I'm a Client</h3>
                <p className="text-gray-600">I need quality writing services</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setUserType("writer")}
            className={`w-full p-6 rounded-2xl border-2 transition-all ${
              userType === "writer" ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">I'm a Writer</h3>
                <p className="text-gray-600">I offer professional writing services</p>
              </div>
            </div>
          </motion.button>
        </div>
      ),
    },
    {
      id: 2,
      title: userType === "client" ? "Why Choose Writers Connect?" : "Why Writers Love Us",
      subtitle:
        userType === "client"
          ? "We solve the problems you face on other platforms"
          : "We protect your interests and value your work",
      content: (
        <div className="space-y-6">
          {userType === "client" ? (
            <>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Curated Quality</h4>
                  <p className="text-gray-600 text-sm">
                    No more sifting through hundreds of low-quality proposals. We pre-screen all writers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Transparent Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Fair rates with no hidden fees. Secure escrow protects your payments.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Perfect Matches</h4>
                  <p className="text-gray-600 text-sm">
                    Our algorithm connects you with writers who specialize in your industry and style.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Fair Pay Guaranteed</h4>
                  <p className="text-gray-600 text-sm">
                    No race to the bottom. We enforce minimum rates and protect against exploitation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Community Protection</h4>
                  <p className="text-gray-600 text-sm">
                    Fair dispute resolution and community-driven ratings protect your reputation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Quality Clients</h4>
                  <p className="text-gray-600 text-sm">
                    Work with clients who value quality writing and pay fairly for your expertise.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ),
    },
    {
      id: 3,
      title: "You're All Set!",
      subtitle: "Ready to start your Writers Connect journey",
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>
          <p className="text-gray-600 text-lg">
            {userType === "client"
              ? "Start exploring talented writers who match your needs"
              : "Begin connecting with quality clients who value your work"}
          </p>
        </div>
      ),
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = currentStep !== 1 || userType !== null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass card-shadow rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{steps[currentStep].title}</h2>
              <p className="text-gray-600">{steps[currentStep].subtitle}</p>
            </div>

            <div className="py-4">{steps[currentStep].content}</div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
              currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-white/30"
            }`}
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStep}
            disabled={!canProceed}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
              canProceed
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <span>{currentStep === steps.length - 1 ? "Get Started" : "Continue"}</span>
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
