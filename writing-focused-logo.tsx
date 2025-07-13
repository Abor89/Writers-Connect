"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WritingFocusedLogo() {
  const downloadSVG = (filename: string, svgContent: string) => {
    const blob = new Blob([svgContent], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Logo with pen/quill connecting writers
  const penConnectSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Pen/Quill -->
  <path d="M20 80L50 20L55 25L25 85L20 80Z" fill="#1E293B"/>
  <path d="M50 20L60 10L65 15L55 25L50 20Z" fill="#2563EB"/>
  
  <!-- Writing lines/connection -->
  <path d="M25 85L80 70" stroke="#2563EB" strokeWidth="2" strokeDasharray="3,2"/>
  <path d="M80 70L120 65" stroke="#2563EB" strokeWidth="2" strokeDasharray="3,2"/>
  
  <!-- Text -->
  <text x="90" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Writters</text>
  <text x="240" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#2563EB">_</text>
  <text x="260" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Connect</text>
</svg>`

  // Logo with connected W letters
  const connectedWSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- First W (for Writers) -->
  <path d="M15 25L20 65L25 40L30 65L35 25" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  
  <!-- Connection line -->
  <path d="M40 45L70 45" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
  <circle cx="55" cy="45" r="2" fill="#2563EB"/>
  
  <!-- Second W (for Writers connecting) -->
  <path d="M75 25L80 65L85 40L90 65L95 25" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  
  <!-- Text -->
  <text x="120" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Writters</text>
  <text x="270" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#2563EB">_</text>
  <text x="290" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Connect</text>
</svg>`

  // Logo with pencils forming connection
  const pencilBridgeSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Left pencil -->
  <rect x="15" y="40" width="30" height="6" fill="#1E293B" rx="3"/>
  <polygon points="45,40 55,43 45,46" fill="#2563EB"/>
  
  <!-- Right pencil -->
  <rect x="65" y="40" width="30" height="6" fill="#1E293B" rx="3"/>
  <polygon points="65,40 55,43 65,46" fill="#2563EB"/>
  
  <!-- Connection spark/idea -->
  <circle cx="55" cy="43" r="3" fill="#2563EB"/>
  <path d="M52 40L58 46M58 40L52 46" stroke="#2563EB" strokeWidth="1"/>
  
  <!-- Text -->
  <text x="110" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Writters</text>
  <text x="260" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#2563EB">_</text>
  <text x="280" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Connect</text>
</svg>`

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Writing-Focused Logo Concepts</h1>
          <p className="text-slate-600">Logos that clearly represent writing and connection</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Concept 1: Pen with Connection Trail */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-center">Concept 1: Pen Trail</h3>
              <p className="text-sm text-slate-600 text-center">Quill/pen with dotted connection line</p>
              <div className="bg-white p-6 rounded border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <path d="M20 80L50 20L55 25L25 85L20 80Z" fill="#1E293B" />
                  <path d="M50 20L60 10L65 15L55 25L50 20Z" fill="#2563EB" />
                  <path d="M25 85L80 70" stroke="#2563EB" strokeWidth="2" strokeDasharray="3,2" />
                  <path d="M80 70L120 65" stroke="#2563EB" strokeWidth="2" strokeDasharray="3,2" />
                  <text x="90" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E293B">
                    Writters
                  </text>
                  <text x="190" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#2563EB">
                    _
                  </text>
                  <text x="200" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button onClick={() => downloadSVG("writters-connect-pen.svg", penConnectSVG)} className="w-full">
                Download Pen Version
              </Button>
            </CardContent>
          </Card>

          {/* Concept 2: Connected W's */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-center">Concept 2: Connected W's</h3>
              <p className="text-sm text-slate-600 text-center">Two W's linked together</p>
              <div className="bg-white p-6 rounded border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <path
                    d="M15 25L20 65L25 40L30 65L35 25"
                    stroke="#1E293B"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M40 45L70 45" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="55" cy="45" r="2" fill="#2563EB" />
                  <path
                    d="M75 25L80 65L85 40L90 65L95 25"
                    stroke="#1E293B"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text x="110" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E293B">
                    Writters
                  </text>
                  <text x="210" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#2563EB">
                    _
                  </text>
                  <text x="220" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button onClick={() => downloadSVG("writters-connect-w.svg", connectedWSVG)} className="w-full">
                Download W Version
              </Button>
            </CardContent>
          </Card>

          {/* Concept 3: Pencil Bridge */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-center">Concept 3: Pencil Bridge</h3>
              <p className="text-sm text-slate-600 text-center">Two pencils meeting with creative spark</p>
              <div className="bg-white p-6 rounded border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <rect x="15" y="40" width="30" height="6" fill="#1E293B" rx="3" />
                  <polygon points="45,40 55,43 45,46" fill="#2563EB" />
                  <rect x="65" y="40" width="30" height="6" fill="#1E293B" rx="3" />
                  <polygon points="65,40 55,43 65,46" fill="#2563EB" />
                  <circle cx="55" cy="43" r="3" fill="#2563EB" />
                  <path d="M52 40L58 46M58 40L52 46" stroke="#2563EB" strokeWidth="1" />
                  <text x="110" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E293B">
                    Writters
                  </text>
                  <text x="210" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#2563EB">
                    _
                  </text>
                  <text x="220" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button onClick={() => downloadSVG("writters-connect-pencil.svg", pencilBridgeSVG)} className="w-full">
                Download Pencil Version
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Explanation */}
        <Card className="p-8">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">How These Connect to "Writters_Connect"</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Pen Trail</h4>
                <p className="text-sm text-slate-600">
                  The quill/pen represents writing, and the dotted trail shows how ideas and words flow between writers,
                  creating connections.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Connected W's</h4>
                <p className="text-sm text-slate-600">
                  Two "W"s (for Writers) physically linked together, literally showing writers connecting with each
                  other.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Pencil Bridge</h4>
                <p className="text-sm text-slate-600">
                  Two pencils (writing tools) meeting in the middle with a creative spark, symbolizing collaboration and
                  shared creativity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
