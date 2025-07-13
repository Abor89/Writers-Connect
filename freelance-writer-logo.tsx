"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FreelanceWriterLogo() {
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

  // Professional freelance writer logo
  const professionalSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Left pen (modern, sleek) -->
  <rect x="10" y="42" width="35" height="4" fill="#1E293B" rx="2"/>
  <rect x="8" y="41" width="4" height="6" fill="#2563EB" rx="2"/>
  <polygon points="45,42 52,44 45,46" fill="#2563EB"/>
  
  <!-- Right pen -->
  <rect x="65" y="42" width="35" height="4" fill="#1E293B" rx="2"/>
  <rect x="100" y="41" width="4" height="6" fill="#2563EB" rx="2"/>
  <polygon points="65,42 58,44 65,46" fill="#2563EB"/>
  
  <!-- Connection hub with dollar sign (freelance/business) -->
  <circle cx="56" cy="44" r="8" fill="#2563EB"/>
  <path d="M54 40v8M58 40v8M54 42h4M54 46h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  
  <!-- Collaboration lines -->
  <path d="M48 38L64 38" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2,1"/>
  <path d="M48 50L64 50" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2,1"/>
  
  <!-- Text -->
  <text x="120" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B">Writters</text>
  <text x="250" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#2563EB">_</text>
  <text x="270" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B">Connect</text>
</svg>`

  // Alternative with handshake concept
  const handshakeSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Left pen -->
  <rect x="15" y="45" width="30" height="3" fill="#1E293B" rx="1.5"/>
  <circle cx="12" cy="46.5" r="3" fill="#2563EB"/>
  
  <!-- Right pen -->
  <rect x="65" y="45" width="30" height="3" fill="#1E293B" rx="1.5"/>
  <circle cx="98" cy="46.5" r="3" fill="#2563EB"/>
  
  <!-- Handshake/connection in middle -->
  <path d="M45 42L50 46.5L55 42" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M55 51L50 46.5L45 51" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="50" cy="46.5" r="2" fill="#2563EB"/>
  
  <!-- Professional accent lines -->
  <line x1="50" y1="35" x2="50" y2="40" stroke="#60A5FA" strokeWidth="1"/>
  <line x1="50" y1="53" x2="50" y2="58" stroke="#60A5FA" strokeWidth="1"/>
  
  <!-- Text -->
  <text x="115" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B">Writters</text>
  <text x="245" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#2563EB">_</text>
  <text x="265" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B">Connect</text>
</svg>`

  // Modern tech-savvy version
  const techSVG = `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Left writing tool (modern stylus/pen) -->
  <rect x="12" y="43" width="32" height="3" fill="#1E293B" rx="1.5"/>
  <rect x="10" y="42" width="4" height="5" fill="#2563EB" rx="2"/>
  
  <!-- Right writing tool -->
  <rect x="66" y="43" width="32" height="3" fill="#1E293B" rx="1.5"/>
  <rect x="96" y="42" width="4" height="5" fill="#2563EB" rx="2"/>
  
  <!-- Digital connection hub -->
  <rect x="48" y="40" width="14" height="9" fill="#2563EB" rx="4"/>
  <circle cx="52" cy="44.5" r="1" fill="white"/>
  <circle cx="55" cy="44.5" r="1" fill="white"/>
  <circle cx="58" cy="44.5" r="1" fill="white"/>
  
  <!-- Network lines -->
  <path d="M44 35L62 35M44 54L62 54" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3,2"/>
  
  <!-- Text with modern spacing -->
  <text x="115" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B" letterSpacing="1px">Writters</text>
  <text x="245" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#2563EB">_</text>
  <text x="265" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B" letterSpacing="1px">Connect</text>
</svg>`

  // Icon versions for each
  const iconProfessionalSVG = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="100" height="100" rx="20" fill="url(#grad1)"/>
  
  <!-- Simplified pen connection -->
  <rect x="20" y="47" width="25" height="3" fill="white" rx="1.5"/>
  <rect x="55" y="47" width="25" height="3" fill="white" rx="1.5"/>
  
  <!-- Central hub with dollar -->
  <circle cx="50" cy="48.5" r="8" fill="white"/>
  <path d="M48 44v9M52 44v9M48 46h4M48 51h4" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
  
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1E40AF"/>
      <stop offset="100%" stopColor="#2563EB"/>
    </linearGradient>
  </defs>
</svg>`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Freelance Writers Platform Logo</h1>
          <p className="text-lg text-slate-600">Professional logos designed for freelance writing marketplace</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Professional Business Version */}
          <Card className="p-6 border-2 border-blue-200">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-center text-lg">Professional Business</h3>
              <p className="text-sm text-slate-600 text-center">Dollar sign hub emphasizes freelance/business aspect</p>
              <div className="bg-white p-6 rounded-lg border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <rect x="10" y="42" width="35" height="4" fill="#1E293B" rx="2" />
                  <rect x="8" y="41" width="4" height="6" fill="#2563EB" rx="2" />
                  <polygon points="45,42 52,44 45,46" fill="#2563EB" />
                  <rect x="65" y="42" width="35" height="4" fill="#1E293B" rx="2" />
                  <rect x="100" y="41" width="4" height="6" fill="#2563EB" rx="2" />
                  <polygon points="65,42 58,44 65,46" fill="#2563EB" />
                  <circle cx="56" cy="44" r="8" fill="#2563EB" />
                  <path d="M54 40v8M58 40v8M54 42h4M54 46h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M48 38L64 38" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2,1" />
                  <path d="M48 50L64 50" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2,1" />
                  <text x="120" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1E293B">
                    Writters
                  </text>
                  <text x="210" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#2563EB">
                    _
                  </text>
                  <text x="225" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button
                onClick={() => downloadSVG("writters-connect-professional.svg", professionalSVG)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Download Professional Version
              </Button>
            </CardContent>
          </Card>

          {/* Collaboration Version */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-center text-lg">Collaboration Focus</h3>
              <p className="text-sm text-slate-600 text-center">Handshake symbol shows partnership between writers</p>
              <div className="bg-white p-6 rounded-lg border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <rect x="15" y="45" width="30" height="3" fill="#1E293B" rx="1.5" />
                  <circle cx="12" cy="46.5" r="3" fill="#2563EB" />
                  <rect x="65" y="45" width="30" height="3" fill="#1E293B" rx="1.5" />
                  <circle cx="98" cy="46.5" r="3" fill="#2563EB" />
                  <path
                    d="M45 42L50 46.5L55 42"
                    stroke="#2563EB"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M55 51L50 46.5L45 51"
                    stroke="#2563EB"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="46.5" r="2" fill="#2563EB" />
                  <line x1="50" y1="35" x2="50" y2="40" stroke="#60A5FA" strokeWidth="1" />
                  <line x1="50" y1="53" x2="50" y2="58" stroke="#60A5FA" strokeWidth="1" />
                  <text x="115" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1E293B">
                    Writters
                  </text>
                  <text x="205" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#2563EB">
                    _
                  </text>
                  <text x="220" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button
                onClick={() => downloadSVG("writters-connect-collaboration.svg", handshakeSVG)}
                className="w-full"
                variant="outline"
              >
                Download Collaboration Version
              </Button>
            </CardContent>
          </Card>

          {/* Tech-Savvy Version */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-center text-lg">Tech Platform</h3>
              <p className="text-sm text-slate-600 text-center">Digital hub emphasizes modern web platform</p>
              <div className="bg-white p-6 rounded-lg border flex justify-center">
                <svg width="300" height="75" viewBox="0 0 400 100">
                  <rect x="12" y="43" width="32" height="3" fill="#1E293B" rx="1.5" />
                  <rect x="10" y="42" width="4" height="5" fill="#2563EB" rx="2" />
                  <rect x="66" y="43" width="32" height="3" fill="#1E293B" rx="1.5" />
                  <rect x="96" y="42" width="4" height="5" fill="#2563EB" rx="2" />
                  <rect x="48" y="40" width="14" height="9" fill="#2563EB" rx="4" />
                  <circle cx="52" cy="44.5" r="1" fill="white" />
                  <circle cx="55" cy="44.5" r="1" fill="white" />
                  <circle cx="58" cy="44.5" r="1" fill="white" />
                  <path d="M44 35L62 35M44 54L62 54" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="115" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1E293B">
                    Writters
                  </text>
                  <text x="205" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#2563EB">
                    _
                  </text>
                  <text x="220" y="58" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1E293B">
                    Connect
                  </text>
                </svg>
              </div>
              <Button
                onClick={() => downloadSVG("writters-connect-tech.svg", techSVG)}
                className="w-full"
                variant="outline"
              >
                Download Tech Version
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* App Icon Preview */}
        <Card className="p-8">
          <CardContent className="space-y-6">
            <h3 className="text-2xl font-bold text-center">App Icon Version</h3>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg border flex justify-center">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <rect width="100" height="100" rx="20" fill="url(#grad1)" />
                  <rect x="20" y="47" width="25" height="3" fill="white" rx="1.5" />
                  <rect x="55" y="47" width="25" height="3" fill="white" rx="1.5" />
                  <circle cx="50" cy="48.5" r="8" fill="white" />
                  <path d="M48 44v9M52 44v9M48 46h4M48 51h4" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E40AF" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <Button
              onClick={() => downloadSVG("writters-connect-icon.svg", iconProfessionalSVG)}
              className="w-full max-w-md mx-auto block"
            >
              Download App Icon
            </Button>
          </CardContent>
        </Card>

        {/* Why This Works for Freelancers */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <CardContent>
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
              Perfect for Freelance Writers Platform
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9L21 9ZM15 11V13L21 13V11L15 11ZM21 15V17L15 17V15L21 15Z" />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-900 text-center">Professional Business</h4>
                <p className="text-sm text-blue-800 text-center">
                  Dollar sign clearly communicates this is about paid freelance work, not just hobby writing
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M16 4H18V16H16V4ZM6 4H8V16H6V4ZM10 4H14V16H10V4ZM4 18H20V20H4V18Z" />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-900 text-center">Writing Tools</h4>
                <p className="text-sm text-blue-800 text-center">
                  Modern pens/styluses represent both traditional and digital writing - perfect for today's freelancers
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-900 text-center">Connection Hub</h4>
                <p className="text-sm text-blue-800 text-center">
                  Central meeting point shows your platform brings freelance writers and clients together
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
