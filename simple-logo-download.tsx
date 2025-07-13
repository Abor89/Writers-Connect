"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SimpleLogoDownload() {
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

  // Clean, simple logo SVG
  const logoSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Connection nodes -->
  <circle cx="30" cy="30" r="4" fill="#1E293B"/>
  <circle cx="60" cy="30" r="4" fill="#1E293B"/>
  <circle cx="30" cy="70" r="4" fill="#1E293B"/>
  <circle cx="60" cy="70" r="4" fill="#1E293B"/>
  
  <!-- Connection lines -->
  <line x1="34" y1="30" x2="56" y2="30" stroke="#1E293B" strokeWidth="2"/>
  <line x1="30" y1="34" x2="30" y2="66" stroke="#1E293B" strokeWidth="2"/>
  <line x1="34" y1="70" x2="56" y2="70" stroke="#1E293B" strokeWidth="2"/>
  <line x1="60" y1="34" x2="60" y2="66" stroke="#1E293B" strokeWidth="2"/>
  
  <!-- Center connection point -->
  <circle cx="45" cy="50" r="3" fill="#2563EB"/>
  
  <!-- Text -->
  <text x="90" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Writters</text>
  <text x="240" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#2563EB">_</text>
  <text x="260" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">Connect</text>
</svg>`

  const iconSVG = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="100" height="100" rx="20" fill="#1E293B"/>
  
  <!-- Connection symbol -->
  <circle cx="30" cy="30" r="5" fill="white"/>
  <circle cx="70" cy="30" r="5" fill="white"/>
  <circle cx="30" cy="70" r="5" fill="white"/>
  <circle cx="70" cy="70" r="5" fill="white"/>
  
  <line x1="35" y1="30" x2="65" y2="30" stroke="white" strokeWidth="3"/>
  <line x1="30" y1="35" x2="30" y2="65" stroke="white" strokeWidth="3"/>
  <line x1="35" y1="70" x2="65" y2="70" stroke="white" strokeWidth="3"/>
  <line x1="70" y1="35" x2="70" y2="65" stroke="white" strokeWidth="3"/>
  
  <circle cx="50" cy="50" r="4" fill="#2563EB"/>
</svg>`

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Writters_Connect Logo</h1>
          <p className="text-slate-600">Ready-to-use logo files</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Logo Preview */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-center">Main Logo</h3>
              <div className="bg-white p-6 rounded border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <circle cx="30" cy="30" r="4" fill="#1E293B" />
                  <circle cx="60" cy="30" r="4" fill="#1E293B" />
                  <circle cx="30" cy="70" r="4" fill="#1E293B" />
                  <circle cx="60" cy="70" r="4" fill="#1E293B" />
                  <line x1="34" y1="30" x2="56" y2="30" stroke="#1E293B" strokeWidth="2" />
                  <line x1="30" y1="34" x2="30" y2="66" stroke="#1E293B" strokeWidth="2" />
                  <line x1="34" y1="70" x2="56" y2="70" stroke="#1E293B" strokeWidth="2" />
                  <line x1="60" y1="34" x2="60" y2="66" stroke="#1E293B" strokeWidth="2" />
                  <circle cx="45" cy="50" r="3" fill="#2563EB" />
                  <text x="90" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">
                    Writters
                  </text>
                  <text x="240" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#2563EB">
                    _
                  </text>
                  <text x="260" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button onClick={() => downloadSVG("writters-connect-logo.svg", logoSVG)} className="w-full">
                Download Main Logo
              </Button>
            </CardContent>
          </Card>

          {/* Icon Preview */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-center">Icon Version</h3>
              <div className="bg-white p-6 rounded border flex justify-center">
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <rect width="100" height="100" rx="20" fill="#1E293B" />
                  <circle cx="30" cy="30" r="5" fill="white" />
                  <circle cx="70" cy="30" r="5" fill="white" />
                  <circle cx="30" cy="70" r="5" fill="white" />
                  <circle cx="70" cy="70" r="5" fill="white" />
                  <line x1="35" y1="30" x2="65" y2="30" stroke="white" strokeWidth="3" />
                  <line x1="30" y1="35" x2="30" y2="65" stroke="white" strokeWidth="3" />
                  <line x1="35" y1="70" x2="65" y2="70" stroke="white" strokeWidth="3" />
                  <line x1="70" y1="35" x2="70" y2="65" stroke="white" strokeWidth="3" />
                  <circle cx="50" cy="50" r="4" fill="#2563EB" />
                </svg>
              </div>
              <Button onClick={() => downloadSVG("writters-connect-icon.svg", iconSVG)} className="w-full">
                Download Icon
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <CardContent>
            <h3 className="font-semibold mb-4">Quick Info</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Format:</strong> SVG (scalable)
              </div>
              <div>
                <strong>Colors:</strong> Navy (#1E293B) + Blue (#2563EB)
              </div>
              <div>
                <strong>Use:</strong> Web, print, apps
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
