"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HeaderOptimizedLogo() {
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

  // Header version - compact and clean
  const headerSVG = `<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
  <!-- Left pen -->
  <rect x="5" y="18" width="18" height="2" fill="#1E293B" rx="1"/>
  <rect x="4" y="17.5" width="2" height="3" fill="#2563EB" rx="1"/>
  <polygon points="23,18 27,19 23,20" fill="#2563EB"/>
  
  <!-- Right pen -->
  <rect x="32" y="18" width="18" height="2" fill="#1E293B" rx="1"/>
  <rect x="49" y="17.5" width="2" height="3" fill="#2563EB" rx="1"/>
  <polygon points="32,18 28,19 32,20" fill="#2563EB"/>
  
  <!-- Dollar sign hub -->
  <circle cx="27.5" cy="19" r="4" fill="#2563EB"/>
  <path d="M26.5 16.5v5M28.5 16.5v5M26.5 17.5h2M26.5 20.5h2" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
  
  <!-- Text -->
  <text x="60" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="#1E293B">Writters</text>
  <text x="115" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="#2563EB">_</text>
  <text x="122" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="#1E293B">Connect</text>
</svg>`

  // Mobile version - even more compact
  const mobileSVG = `<svg width="120" height="32" viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Simplified symbol -->
  <rect x="3" y="14" width="12" height="1.5" fill="#1E293B" rx="0.75"/>
  <rect x="18" y="14" width="12" height="1.5" fill="#1E293B" rx="0.75"/>
  
  <!-- Dollar hub -->
  <circle cx="16" cy="14.75" r="3" fill="#2563EB"/>
  <path d="M15.2 13v3.5M16.8 13v3.5M15.2 13.8h1.6M15.2 15.7h1.6" stroke="white" strokeWidth="0.6" strokeLinecap="round"/>
  
  <!-- Compact text -->
  <text x="38" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="11" fill="#1E293B">Writters</text>
  <text x="82" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="11" fill="#2563EB">_</text>
  <text x="87" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="11" fill="#1E293B">Connect</text>
</svg>`

  // Icon only version for very small spaces
  const iconOnlySVG = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="16" cy="16" r="16" fill="#2563EB"/>
  
  <!-- Simplified pen connection -->
  <rect x="6" y="15" width="8" height="1.5" fill="white" rx="0.75"/>
  <rect x="18" y="15" width="8" height="1.5" fill="white" rx="0.75"/>
  
  <!-- Dollar sign -->
  <circle cx="16" cy="15.75" r="3" fill="white"/>
  <path d="M15.2 14v3.5M16.8 14v3.5M15.2 14.8h1.6M15.2 16.7h1.6" stroke="#2563EB" strokeWidth="0.8" strokeLinecap="round"/>
</svg>`

  // Dark theme version
  const darkHeaderSVG = `<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
  <!-- Left pen -->
  <rect x="5" y="18" width="18" height="2" fill="white" rx="1"/>
  <rect x="4" y="17.5" width="2" height="3" fill="#60A5FA" rx="1"/>
  <polygon points="23,18 27,19 23,20" fill="#60A5FA"/>
  
  <!-- Right pen -->
  <rect x="32" y="18" width="18" height="2" fill="white" rx="1"/>
  <rect x="49" y="17.5" width="2" height="3" fill="#60A5FA" rx="1"/>
  <polygon points="32,18 28,19 32,20" fill="#60A5FA"/>
  
  <!-- Dollar sign hub -->
  <circle cx="27.5" cy="19" r="4" fill="#60A5FA"/>
  <path d="M26.5 16.5v5M28.5 16.5v5M26.5 17.5h2M26.5 20.5h2" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
  
  <!-- Text -->
  <text x="60" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="white">Writters</text>
  <text x="115" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="#60A5FA">_</text>
  <text x="122" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="white">Connect</text>
</svg>`

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Header-Optimized Logos</h1>
          <p className="text-slate-600">Perfect for your web app navigation bar</p>
        </div>

        {/* Header Previews */}
        <div className="space-y-6">
          {/* Desktop Header */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-lg">Desktop Header Version</h3>
              <p className="text-sm text-slate-600">Perfect size for desktop navigation (200x40px)</p>

              {/* Mock header */}
              <div className="bg-white border rounded-lg p-4 flex justify-between items-center">
                <svg width="200" height="40" viewBox="0 0 200 40">
                  <rect x="5" y="18" width="18" height="2" fill="#1E293B" rx="1" />
                  <rect x="4" y="17.5" width="2" height="3" fill="#2563EB" rx="1" />
                  <polygon points="23,18 27,19 23,20" fill="#2563EB" />
                  <rect x="32" y="18" width="18" height="2" fill="#1E293B" rx="1" />
                  <rect x="49" y="17.5" width="2" height="3" fill="#2563EB" rx="1" />
                  <polygon points="32,18 28,19 32,20" fill="#2563EB" />
                  <circle cx="27.5" cy="19" r="4" fill="#2563EB" />
                  <path
                    d="M26.5 16.5v5M28.5 16.5v5M26.5 17.5h2M26.5 20.5h2"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                  <text
                    x="60"
                    y="25"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="14"
                    fill="#1E293B"
                  >
                    Writters
                  </text>
                  <text
                    x="115"
                    y="25"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="14"
                    fill="#2563EB"
                  >
                    _
                  </text>
                  <text
                    x="122"
                    y="25"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="14"
                    fill="#1E293B"
                  >
                    Connect
                  </text>
                </svg>
                <div className="flex space-x-4 text-sm text-slate-600">
                  <span>Dashboard</span>
                  <span>Projects</span>
                  <span>Profile</span>
                </div>
              </div>

              <Button onClick={() => downloadSVG("writters-connect-header.svg", headerSVG)} className="w-full">
                Download Desktop Header Logo
              </Button>
            </CardContent>
          </Card>

          {/* Mobile Header */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-lg">Mobile Header Version</h3>
              <p className="text-sm text-slate-600">Compact version for mobile navigation (120x32px)</p>

              {/* Mock mobile header */}
              <div className="bg-white border rounded-lg p-3 flex justify-between items-center max-w-sm">
                <svg width="120" height="32" viewBox="0 0 120 32">
                  <rect x="3" y="14" width="12" height="1.5" fill="#1E293B" rx="0.75" />
                  <rect x="18" y="14" width="12" height="1.5" fill="#1E293B" rx="0.75" />
                  <circle cx="16" cy="14.75" r="3" fill="#2563EB" />
                  <path
                    d="M15.2 13v3.5M16.8 13v3.5M15.2 13.8h1.6M15.2 15.7h1.6"
                    stroke="white"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                  />
                  <text
                    x="38"
                    y="20"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="11"
                    fill="#1E293B"
                  >
                    Writters
                  </text>
                  <text
                    x="82"
                    y="20"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="11"
                    fill="#2563EB"
                  >
                    _
                  </text>
                  <text
                    x="87"
                    y="20"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="11"
                    fill="#1E293B"
                  >
                    Connect
                  </text>
                </svg>
                <div className="text-xl">☰</div>
              </div>

              <Button
                onClick={() => downloadSVG("writters-connect-mobile.svg", mobileSVG)}
                className="w-full"
                variant="outline"
              >
                Download Mobile Header Logo
              </Button>
            </CardContent>
          </Card>

          {/* Icon Only */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-lg">Icon Only Version</h3>
              <p className="text-sm text-slate-600">For very small spaces or as favicon (32x32px)</p>

              <div className="flex justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="16" fill="#2563EB" />
                  <rect x="6" y="15" width="8" height="1.5" fill="white" rx="0.75" />
                  <rect x="18" y="15" width="8" height="1.5" fill="white" rx="0.75" />
                  <circle cx="16" cy="15.75" r="3" fill="white" />
                  <path
                    d="M15.2 14v3.5M16.8 14v3.5M15.2 14.8h1.6M15.2 16.7h1.6"
                    stroke="#2563EB"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <Button
                onClick={() => downloadSVG("writters-connect-icon-only.svg", iconOnlySVG)}
                className="w-full"
                variant="outline"
              >
                Download Icon Only
              </Button>
            </CardContent>
          </Card>

          {/* Dark Theme */}
          <Card className="p-6 bg-slate-800">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-lg text-white">Dark Theme Version</h3>
              <p className="text-sm text-slate-300">For dark navigation bars or themes</p>

              <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 flex justify-between items-center">
                <svg width="200" height="40" viewBox="0 0 200 40">
                  <rect x="5" y="18" width="18" height="2" fill="white" rx="1" />
                  <rect x="4" y="17.5" width="2" height="3" fill="#60A5FA" rx="1" />
                  <polygon points="23,18 27,19 23,20" fill="#60A5FA" />
                  <rect x="32" y="18" width="18" height="2" fill="white" rx="1" />
                  <rect x="49" y="17.5" width="2" height="3" fill="#60A5FA" rx="1" />
                  <polygon points="32,18 28,19 32,20" fill="#60A5FA" />
                  <circle cx="27.5" cy="19" r="4" fill="#60A5FA" />
                  <path
                    d="M26.5 16.5v5M28.5 16.5v5M26.5 17.5h2M26.5 20.5h2"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                  <text
                    x="60"
                    y="25"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="14"
                    fill="white"
                  >
                    Writters
                  </text>
                  <text
                    x="115"
                    y="25"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="14"
                    fill="#60A5FA"
                  >
                    _
                  </text>
                  <text
                    x="122"
                    y="25"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize="14"
                    fill="white"
                  >
                    Connect
                  </text>
                </svg>
                <div className="flex space-x-4 text-sm text-slate-300">
                  <span>Dashboard</span>
                  <span>Projects</span>
                  <span>Profile</span>
                </div>
              </div>

              <Button
                onClick={() => downloadSVG("writters-connect-dark.svg", darkHeaderSVG)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Download Dark Theme Logo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Guide */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <CardContent>
            <h3 className="text-xl font-bold mb-4 text-blue-900">Implementation Guide</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-800">CSS Implementation</h4>
                <div className="bg-white p-3 rounded border text-sm font-mono">
                  {`/* Desktop */
.logo {
  width: 200px;
  height: 40px;
}

/* Mobile */
@media (max-width: 768px) {
  .logo {
    width: 120px;
    height: 32px;
  }
}`}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-800">Usage Tips</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use desktop version for screens &gt; 768px</li>
                  <li>• Switch to mobile version on smaller screens</li>
                  <li>• Icon-only for very tight spaces</li>
                  <li>• Dark version for dark themes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
