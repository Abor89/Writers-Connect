"use client"

import Navbar from "@/components/Navbar"
import ReferralSystem from "@/components/ReferralSystem"

export default function ReferralsPage() {
  // In a real app, this would come from user context/auth
  const userType = "writer" // or "client"

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <ReferralSystem userType={userType} />
        </div>
      </div>
    </>
  )
}
