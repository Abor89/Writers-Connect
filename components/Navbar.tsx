"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Heart, User, MessageCircle, Menu, X, Gift, Briefcase } from "lucide-react"
import { useAuth } from "./AuthContext"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/matches", label: "Matches", icon: Heart },
  { href: "/messages", label: "Messages", icon: MessageCircle },
  { href: "/referrals", label: "Referrals", icon: Gift },
  { href: "/profile", label: "Profile", icon: User },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-1" : "py-2"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          animate={{
            scale: isScrolled ? 0.98 : 1,
            borderRadius: isScrolled ? "20px" : "16px",
          }}
          className="glass card-shadow rounded-2xl px-6 py-3"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 32 32" className="text-blue-600">
                  <rect x="4" y="14" width="10" height="1.5" fill="currentColor" rx="0.75" />
                  <rect x="18" y="14" width="10" height="1.5" fill="currentColor" rx="0.75" />
                  <circle cx="16" cy="14.75" r="3" fill="currentColor" />
                  <path
                    d="M15.2 13v3.5M16.8 13v3.5M15.2 13.8h1.6M15.2 16.7h1.6"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-bold text-sm gradient-text">Writers Connect</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-blue-500/20 text-blue-600"
                          : "text-gray-600 hover:bg-white/30 hover:text-blue-600"
                      }`}
                    >
                      <Icon size={16} />
                      <span className="font-medium text-sm">{item.label}</span>
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-2">
                  <img
                    src={user.avatar || "/placeholder.svg?height=32&width=32"}
                    alt={user.firstName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">{user.firstName}</span>
                  <button onClick={logout} className="text-xs text-gray-500 hover:text-red-500 transition-colors">
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/auth" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2"
            >
              <div className="glass card-shadow rounded-2xl p-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.href} href={item.href}>
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                          isActive
                            ? "bg-blue-500/20 text-blue-600"
                            : "text-gray-600 hover:bg-white/30 hover:text-blue-600"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
