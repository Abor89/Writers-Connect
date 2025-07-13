"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import {
  FileText,
  Search,
  Briefcase,
  GraduationCap,
  Users,
  Zap,
  Brain,
  BarChart3,
  Shield,
  DollarSign,
  Target,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Palette,
  Code,
  TrendingUp,
  Award,
  Mic,
} from "lucide-react"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("services")

  // 🔹 SERVICES = What clients can hire/pay for
  const writingServices = [
    {
      category: "Content & Marketing",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "Blog Writing", price: "$25+", description: "SEO-optimized blog posts and articles" },
        { name: "Copywriting", price: "$50+", description: "Sales copy, ads, and marketing materials" },
        { name: "SEO Writing", price: "$35+", description: "Search-optimized content that ranks" },
        { name: "Email Marketing", price: "$30+", description: "Email campaigns and newsletters" },
        { name: "Social Media Content", price: "$20+", description: "Posts, captions, and social copy" },
        { name: "Product Descriptions", price: "$15+", description: "E-commerce and catalog copy" },
      ],
    },
    {
      category: "Technical & Business",
      icon: Code,
      color: "from-purple-500 to-indigo-500",
      services: [
        { name: "Technical Writing", price: "$60+", description: "Documentation, manuals, API docs" },
        { name: "Grant Writing", price: "$100+", description: "Funding proposals and applications" },
        { name: "Resume Writing", price: "$40+", description: "Professional resumes and cover letters" },
        { name: "Business Plans", price: "$150+", description: "Comprehensive business documentation" },
        { name: "White Papers", price: "$200+", description: "Research-based industry reports" },
        { name: "Case Studies", price: "$80+", description: "Success stories and client testimonials" },
      ],
    },
    {
      category: "Creative & Entertainment",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      services: [
        { name: "Screenwriting", price: "$100+", description: "Scripts, screenplays, and video content" },
        { name: "Creative Writing", price: "$30+", description: "Fiction, poetry, and storytelling" },
        { name: "Book Writing", price: "$500+", description: "Novels, non-fiction, and memoirs" },
        { name: "Song Lyrics", price: "$50+", description: "Music lyrics and creative verse" },
        { name: "Game Writing", price: "$75+", description: "Video game narratives and dialogue" },
        { name: "Speech Writing", price: "$100+", description: "Presentations and public speaking" },
      ],
    },
    {
      category: "Specialized & Niche",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Translation", price: "$15+", description: "50+ languages with cultural adaptation" },
        { name: "Data Storytelling", price: "$80+", description: "Transform data into compelling narratives" },
        { name: "AI Product Documentation", price: "$90+", description: "AI/ML product guides and tutorials" },
        { name: "Legal Writing", price: "$120+", description: "Contracts, terms, and legal documents" },
        { name: "Medical Writing", price: "$100+", description: "Healthcare content and research papers" },
        { name: "Academic Writing", price: "$60+", description: "Research papers and scholarly articles" },
      ],
    },
  ]

  // Community-based services (optional/engagement)
  const communityServices = [
    {
      icon: Users,
      title: "Writers Lounge",
      description: "Showcase creative work, get community feedback, and participate in contests",
      price: "Free",
    },
    {
      icon: GraduationCap,
      title: "Writers Academy",
      description: "Professional courses and certification programs",
      price: "$49+",
    },
    {
      icon: Award,
      title: "Writing Challenges",
      description: "Weekly contests with prizes and recognition",
      price: "Free",
    },
    {
      icon: Mic,
      title: "Live Writer Battles",
      description: "Real-time writing competitions and sprints",
      price: "Free",
    },
  ]

  // 🔹 FEATURES = How our platform delivers services better
  const platformFeatures = [
    {
      category: "Smart Discovery & Matching",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      features: [
        {
          icon: Target,
          title: "Tinder-Style Swiping",
          description: "Swipe through writers or clients for instant matching",
        },
        {
          icon: Brain,
          title: "AI-Powered Matching",
          description: "Smart algorithm considers tone, style, industry, and success data",
        },
        {
          icon: Search,
          title: "Advanced Filters",
          description: "Find exactly what you need with precise search criteria",
        },
        {
          icon: TrendingUp,
          title: "Success Prediction",
          description: "AI predicts project success based on historical data",
        },
      ],
    },
    {
      category: "Writing Enhancement Tools",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      features: [
        {
          icon: Zap,
          title: "AI Co-Writing Assistant",
          description: "Brainstorming, rewriting, and grammar checking in real-time",
        },
        {
          icon: Shield,
          title: "Plagiarism Checker",
          description: "Automatic content verification and originality scoring",
        },
        {
          icon: FileText,
          title: "Auto Brief Generator",
          description: "AI creates detailed project scopes from simple inputs",
        },
        {
          icon: BarChart3,
          title: "Style Consistency",
          description: "Maintain brand voice across all content",
        },
      ],
    },
    {
      category: "Analytics & Insights",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      features: [
        {
          icon: BarChart3,
          title: "Writer Analytics Dashboard",
          description: "Track performance, engagement, and earnings trends",
        },
        {
          icon: TrendingUp,
          title: "Market Insights",
          description: "See trending topics and in-demand writing types",
        },
        {
          icon: Star,
          title: "Performance Tracking",
          description: "Monitor project success rates and client satisfaction",
        },
        {
          icon: DollarSign,
          title: "Dynamic Pricing",
          description: "AI suggests fair rates based on complexity and market data",
        },
      ],
    },
    {
      category: "Collaboration & Security",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      features: [
        {
          icon: Users,
          title: "Team Building Tools",
          description: "Drag-and-drop interface to build writing teams",
        },
        {
          icon: Shield,
          title: "Secure Escrow",
          description: "Protected payments with milestone-based releases",
        },
        {
          icon: Clock,
          title: "Real-Time Collaboration",
          description: "Live editing, comments, and revision tracking",
        },
        {
          icon: FileText,
          title: "Smart Contracts",
          description: "Automated agreements with built-in protection",
        },
      ],
    },
  ]

  const tabs = [
    { id: "services", label: "What We Offer", icon: Briefcase },
    { id: "features", label: "Why Writers Connect?", icon: Zap },
    { id: "pricing", label: "Pricing", icon: DollarSign },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Services & Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional writing services powered by revolutionary platform features
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="glass card-shadow rounded-2xl p-2 mb-8 max-w-2xl mx-auto">
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
            {activeTab === "services" && (
              <div className="space-y-12">
                {/* Services Header */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">🔹 What Clients Can Hire For</h2>
                  <p className="text-lg text-gray-600">Professional writing services across every industry and niche</p>
                </div>

                {/* Writing Services */}
                {writingServices.map((category, categoryIndex) => {
                  const CategoryIcon = category.icon
                  return (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                      className="space-y-6"
                    >
                      {/* Category Header */}
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <CategoryIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.category}</h3>
                      </div>

                      {/* Services Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                            className="glass card-shadow rounded-xl p-4 hover:shadow-lg transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{service.name}</h4>
                              <span className="text-green-600 font-bold text-sm">{service.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}

                {/* Community Services */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Community & Learning Services</h3>
                    <p className="text-gray-600">Extra value through community engagement and skill development</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {communityServices.map((service, index) => {
                      const Icon = service.icon
                      return (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="glass card-shadow rounded-xl p-6 text-center"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2">{service.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                          <span className="text-green-600 font-bold">{service.price}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-12">
                {/* Features Header */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">🔹 How We Deliver Services Better</h2>
                  <p className="text-lg text-gray-600">
                    Revolutionary platform features that make Writers Connect superior to Fiverr & Upwork
                  </p>
                </div>

                {/* Platform Features */}
                {platformFeatures.map((category, categoryIndex) => {
                  const CategoryIcon = category.icon
                  return (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.2 }}
                      className="space-y-6"
                    >
                      {/* Category Header */}
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <CategoryIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.category}</h3>
                      </div>

                      {/* Features Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.features.map((feature, index) => {
                          const Icon = feature.icon
                          return (
                            <motion.div
                              key={feature.title}
                              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                              className="glass card-shadow rounded-2xl p-6"
                            >
                              <div className="flex items-start space-x-4">
                                <div
                                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                                >
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                                  <p className="text-gray-600">{feature.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="space-y-12">
                {/* Pricing Header */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">💰 Transparent Pricing</h2>
                  <p className="text-lg text-gray-600">Fair rates for everyone, no hidden fees</p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      name: "Writer",
                      price: "5%",
                      period: "commission",
                      description: "Keep 95% of what you earn",
                      features: [
                        "Unlimited project applications",
                        "AI writing assistant",
                        "Analytics dashboard",
                        "Community access",
                        "Payment protection",
                        "24/7 support",
                      ],
                      color: "from-purple-500 to-purple-600",
                      popular: false,
                    },
                    {
                      name: "Client",
                      price: "3%",
                      period: "processing fee",
                      description: "Pay only when you hire",
                      features: [
                        "Unlimited project posting",
                        "AI brief generator",
                        "Smart writer matching",
                        "Escrow protection",
                        "Revision management",
                        "Priority support",
                      ],
                      color: "from-blue-500 to-blue-600",
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      period: "pricing",
                      description: "For teams and agencies",
                      features: [
                        "Volume discounts",
                        "Dedicated account manager",
                        "Custom integrations",
                        "Advanced analytics",
                        "White-label options",
                        "SLA guarantees",
                      ],
                      color: "from-green-500 to-green-600",
                      popular: false,
                    },
                  ].map((plan, index) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`glass card-shadow rounded-2xl p-8 relative ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                        <div className="mb-2">
                          <span
                            className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                          >
                            {plan.price}
                          </span>
                          <span className="text-gray-600 ml-2">{plan.period}</span>
                        </div>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>

                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-6 rounded-lg font-semibold ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                            : "bg-white/50 border border-white/30 text-gray-700 hover:bg-white/70"
                        } transition-colors`}
                      >
                        {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="glass card-shadow rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Difference?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the platform that combines professional services with revolutionary features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Hire for This</span>
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/50 border border-white/30 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/70 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Offer Services</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
