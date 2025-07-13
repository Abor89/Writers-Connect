"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LogoGenerator() {
  const [downloadedLogo, setDownloadedLogo] = useState<string | null>(null)

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
    setDownloadedLogo(filename)
    setTimeout(() => setDownloadedLogo(null), 2000)
  }

  const primaryLogoSVG = `<svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- Connection Symbol -->
<circle cx="20" cy="25" r="3" fill="#1E293B"/>
<circle cx="45" cy="25" r="3" fill="#1E293B"/>
<circle cx="20" cy="55" r="3" fill="#1E293B"/>
<circle cx="45" cy="55" r="3" fill="#1E293B"/>
<path d="M23 25L42 25M20 28L20 52M23 55L42 55M45 28L45 52" stroke="#1E293B" strokeWidth="2"/>
<circle cx="32.5" cy="40" r="2.5" fill="#2563EB"/>

<!-- Text -->
<text x="75" y="50" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B">Writters</text>
<text x="190" y="50" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#2563EB">_</text>
<text x="205" y="50" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#1E293B">Connect</text>
</svg>`

  const darkLogoSVG = `<svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- Dark Background -->
<rect width="300" height="80" fill="#1E293B" rx="8"/>

<!-- Connection Symbol -->
<circle cx="20" cy="25" r="3" fill="white"/>
<circle cx="45" cy="25" r="3" fill="white"/>
<circle cx="20" cy="55" r="3" fill="white"/>
<circle cx="45" cy="55" r="3" fill="white"/>
<path d="M23 25L42 25M20 28L20 52M23 55L42 55M45 28L45 52" stroke="white" strokeWidth="2"/>
<circle cx="32.5" cy="40" r="2.5" fill="#60A5FA"/>

<!-- Text -->
<text x="75" y="50" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="white">Writters</text>
<text x="190" y="50" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#60A5FA">_</text>
<text x="205" y="50" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="white">Connect</text>
</svg>`

  const iconLogoSVG = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- Background -->
<rect width="80" height="80" fill="url(#gradient)" rx="16"/>

<!-- Connection Symbol -->
<circle cx="25" cy="25" r="4" fill="white"/>
<circle cx="55" cy="25" r="4" fill="white"/>
<circle cx="25" cy="55" r="4" fill="white"/>
<circle cx="55" cy="55" r="4" fill="white"/>
<path d="M29 25L51 25M25 29L25 51M29 55L51 55M55 29L55 51" stroke="white" strokeWidth="3"/>
<circle cx="40" cy="40" r="3" fill="#60A5FA"/>

<defs>
<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#1E40AF"/>
<stop offset="100%" stopColor="#2563EB"/>
</linearGradient>
</defs>
</svg>`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Writters_Connect Logo Files</h1>
          <p className="text-lg text-slate-600">Professional logo files ready for download and use</p>
        </div>

        {/* Logo Previews and Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Logo */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Primary Logo</h3>
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <svg width="40" height="40" viewBox="0 0 65 80" className="text-slate-700">
                    <circle cx="15" cy="15" r="3" fill="currentColor" />
                    <circle cx="35" cy="15" r="3" fill="currentColor" />
                    <circle cx="15" cy="35" r="3" fill="currentColor" />
                    <circle cx="35" cy="35" r="3" fill="currentColor" />
                    <path d="M18 15L32 15M15 18L15 32M18 35L32 35M35 18L35 32" stroke="currentColor" strokeWidth="2" />
                    <circle cx="25" cy="25" r="2" fill="#2563EB" />
                  </svg>
                  <div className="text-xl font-bold text-slate-800">
                    Writters<span className="text-blue-600">_</span>Connect
                  </div>
                </div>
              </div>
              <Button
                onClick={() => downloadSVG("writters-connect-primary.svg", primaryLogoSVG)}
                className="w-full"
                variant={downloadedLogo === "writters-connect-primary.svg" ? "default" : "outline"}
              >
                {downloadedLogo === "writters-connect-primary.svg" ? "Downloaded!" : "Download Primary"}
              </Button>
            </CardContent>
          </Card>

          {/* Dark Logo */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Dark Version</h3>
              <div className="bg-slate-800 p-6 rounded-lg flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <svg width="40" height="40" viewBox="0 0 65 80" className="text-white">
                    <circle cx="15" cy="15" r="3" fill="currentColor" />
                    <circle cx="35" cy="15" r="3" fill="currentColor" />
                    <circle cx="15" cy="35" r="3" fill="currentColor" />
                    <circle cx="35" cy="35" r="3" fill="currentColor" />
                    <path d="M18 15L32 15M15 18L15 32M18 35L32 35M35 18L35 32" stroke="currentColor" strokeWidth="2" />
                    <circle cx="25" cy="25" r="2" fill="#60A5FA" />
                  </svg>
                  <div className="text-xl font-bold text-white">
                    Writters<span className="text-blue-400">_</span>Connect
                  </div>
                </div>
              </div>
              <Button
                onClick={() => downloadSVG("writters-connect-dark.svg", darkLogoSVG)}
                className="w-full"
                variant={downloadedLogo === "writters-connect-dark.svg" ? "default" : "outline"}
              >
                {downloadedLogo === "writters-connect-dark.svg" ? "Downloaded!" : "Download Dark"}
              </Button>
            </CardContent>
          </Card>

          {/* Icon Logo */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Icon Only</h3>
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 65 80" className="text-white">
                    <circle cx="15" cy="15" r="3" fill="currentColor" />
                    <circle cx="35" cy="15" r="3" fill="currentColor" />
                    <circle cx="15" cy="35" r="3" fill="currentColor" />
                    <circle cx="35" cy="35" r="3" fill="currentColor" />
                    <path d="M18 15L32 15M15 18L15 32M18 35L32 35M35 18L35 32" stroke="currentColor" strokeWidth="2" />
                    <circle cx="25" cy="25" r="2" fill="#60A5FA" />
                  </svg>
                </div>
              </div>
              <Button
                onClick={() => downloadSVG("writters-connect-icon.svg", iconLogoSVG)}
                className="w-full"
                variant={downloadedLogo === "writters-connect-icon.svg" ? "default" : "outline"}
              >
                {downloadedLogo === "writters-connect-icon.svg" ? "Downloaded!" : "Download Icon"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card className="p-8">
          <CardContent className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-700">File Formats</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>
                    • <strong>SVG:</strong> Perfect for web, scalable, small file size
                  </li>
                  <li>
                    • <strong>Primary:</strong> Use on light backgrounds
                  </li>
                  <li>
                    • <strong>Dark:</strong> Use on dark backgrounds or as standalone
                  </li>
                  <li>
                    • <strong>Icon:</strong> For app icons, favicons, social media
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-700">Best Practices</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Maintain minimum size of 120px width for readability</li>
                  <li>• Use adequate white space around the logo</li>
                  <li>• Don't modify colors or proportions</li>
                  <li>• Test visibility on different backgrounds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specs */}
        <Card className="p-8">
          <CardContent>
            <h3 className="text-2xl font-semibold text-center mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">300×80</div>
                <div className="text-sm text-slate-600">Primary Logo Dimensions</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">80×80</div>
                <div className="text-sm text-slate-600">Icon Dimensions</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">SVG</div>
                <div className="text-sm text-slate-600">Vector Format</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
