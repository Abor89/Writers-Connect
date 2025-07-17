"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, ChevronLeft, DollarSign, Calendar, Plus, Trash2 } from "lucide-react"

interface ProjectPostingFlowProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (projectData: any) => void
}

interface ProjectData {
  title: string
  description: string
  category: string
  budget: {
    type: "fixed" | "hourly"
    amount: string
    currency: "USD"
  }
  timeline: string
  skills: string[]
  attachments: File[]
  requirements: string[]
}

const categories = [
  "Blog Writing",
  "Copywriting",
  "Technical Writing",
  "Creative Writing",
  "SEO Writing",
  "Social Media Content",
  "Email Marketing",
  "Product Descriptions",
  "Grant Writing",
  "Academic Writing",
]

const timelineOptions = ["Less than 1 week", "1-2 weeks", "2-4 weeks", "1-2 months", "2-3 months", "More than 3 months"]

export default function ProjectPostingFlow({ isOpen, onClose, onComplete }: ProjectPostingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [projectData, setProjectData] = useState<ProjectData>({
    title: "",
    description: "",
    category: "",
    budget: {
      type: "fixed",
      amount: "",
      currency: "USD",
    },
    timeline: "",
    skills: [],
    attachments: [],
    requirements: [],
  })
  const [newSkill, setNewSkill] = useState("")
  const [newRequirement, setNewRequirement] = useState("")

  const steps = [
    {
      title: "Project Basics",
      subtitle: "Tell us about your project",
    },
    {
      title: "Budget & Timeline",
      subtitle: "Set your budget and deadline",
    },
    {
      title: "Requirements",
      subtitle: "Add skills and requirements",
    },
    {
      title: "Review & Post",
      subtitle: "Review your project details",
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(projectData)
      onClose()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const addSkill = () => {
    if (newSkill.trim() && !projectData.skills.includes(newSkill.trim())) {
      setProjectData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }))
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setProjectData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }))
  }

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setProjectData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()],
      }))
      setNewRequirement("")
    }
  }

  const removeRequirement = (index: number) => {
    setProjectData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return projectData.title.trim() && projectData.description.trim() && projectData.category
      case 1:
        return projectData.budget.amount && projectData.timeline
      case 2:
        return projectData.skills.length > 0
      default:
        return true
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass card-shadow rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{steps[currentStep].title}</h2>
            <p className="text-gray-600">{steps[currentStep].subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/30 transition-colors">
            <X size={20} />
          </button>
        </div>

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
            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={projectData.title}
                    onChange={(e) => setProjectData((prev) => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Blog posts for tech startup"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                  <textarea
                    value={projectData.description}
                    onChange={(e) => setProjectData((prev) => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your project in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    value={projectData.category}
                    onChange={(e) => setProjectData((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Type *</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setProjectData((prev) => ({
                          ...prev,
                          budget: { ...prev.budget, type: "fixed" },
                        }))
                      }
                      className={`p-4 rounded-lg border-2 transition-all ${
                        projectData.budget.type === "fixed"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <DollarSign className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium">Fixed Price</div>
                      <div className="text-sm text-gray-600">One-time payment</div>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setProjectData((prev) => ({
                          ...prev,
                          budget: { ...prev.budget, type: "hourly" },
                        }))
                      }
                      className={`p-4 rounded-lg border-2 transition-all ${
                        projectData.budget.type === "hourly"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium">Hourly Rate</div>
                      <div className="text-sm text-gray-600">Pay per hour</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Amount * ({projectData.budget.type === "hourly" ? "per hour" : "total"})
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={projectData.budget.amount}
                      onChange={(e) =>
                        setProjectData((prev) => ({
                          ...prev,
                          budget: { ...prev.budget, amount: e.target.value },
                        }))
                      }
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                  <select
                    value={projectData.timeline}
                    onChange={(e) => setProjectData((prev) => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills *</label>
                  <div className="flex space-x-2 mb-3">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., SEO, Content Marketing"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projectData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
                  <div className="flex space-x-2 mb-3">
                    <input
                      type="text"
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addRequirement())}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Must have portfolio samples"
                    />
                    <button
                      type="button"
                      onClick={addRequirement}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {projectData.requirements.map((req, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                        <span className="text-sm">{req}</span>
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">Project Summary</h3>

                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Title:</span>
                      <p className="text-gray-600">{projectData.title}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">Category:</span>
                      <p className="text-gray-600">{projectData.category}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">Budget:</span>
                      <p className="text-gray-600">
                        ${projectData.budget.amount} ({projectData.budget.type})
                      </p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">Timeline:</span>
                      <p className="text-gray-600">{projectData.timeline}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">Skills:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {projectData.skills.map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {projectData.requirements.length > 0 && (
                      <div>
                        <span className="font-medium text-gray-700">Requirements:</span>
                        <ul className="list-disc list-inside text-gray-600 mt-1">
                          {projectData.requirements.map((req, index) => (
                            <li key={index} className="text-sm">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBack}
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
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
              canProceed()
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <span>{currentStep === steps.length - 1 ? "Post Project" : "Continue"}</span>
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
