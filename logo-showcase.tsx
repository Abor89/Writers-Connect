export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Writters_Connect Logo Concepts</h1>
          <p className="text-lg text-slate-600">Modern, sleek designs for your creative writing platform</p>
        </div>

        {/* Logo Variations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo 1: Pen with Connection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold text-slate-700">Concept 1: Connected Pen</h3>
              <div className="flex items-center justify-center space-x-3">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-slate-700">
                  <path
                    d="M8 32L32 8M28 4L36 12L32 16L24 8L28 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="28" r="2" fill="currentColor" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                  <circle cx="28" cy="12" r="2" fill="currentColor" />
                  <path d="M10 30L18 22L26 14" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                </svg>
                <div className="text-3xl font-bold tracking-tight text-slate-800">
                  Writters<span className="text-blue-600">_</span>Connect
                </div>
              </div>
            </div>
          </div>

          {/* Logo 2: Abstract Connection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold text-slate-700">Concept 2: Abstract Links</h3>
              <div className="flex items-center justify-center space-x-3">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-blue-600">
                  <path
                    d="M12 8C12 8 8 12 8 16C8 20 12 24 16 24C20 24 24 20 24 16"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M28 16C28 16 32 20 32 24C32 28 28 32 24 32C20 32 16 28 16 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-3xl font-bold tracking-tight text-slate-800">
                  Writters<span className="text-blue-600">_</span>Connect
                </div>
              </div>
            </div>
          </div>

          {/* Logo 3: Quill Modern */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold text-white">Concept 3: Modern Quill (Dark)</h3>
              <div className="flex items-center justify-center space-x-3">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-white">
                  <path d="M30 4L36 10L20 26L14 32L8 26L14 20L30 4Z" fill="url(#gradient1)" />
                  <circle cx="32" cy="8" r="1.5" fill="white" opacity="0.8" />
                  <circle cx="28" cy="12" r="1" fill="white" opacity="0.6" />
                  <circle cx="24" cy="16" r="0.8" fill="white" opacity="0.4" />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-3xl font-bold tracking-tight text-white">
                  Writters<span className="text-blue-400">_</span>Connect
                </div>
              </div>
            </div>
          </div>

          {/* Logo 4: Minimalist W */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold text-white">Concept 4: Minimalist W</h3>
              <div className="flex items-center justify-center space-x-3">
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-white">
                    <path
                      d="M8 8L12 28L16 16L20 28L24 8"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 12L32 12M28 16L32 16M28 20L32 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold tracking-tight text-white">
                  Writters<span className="text-blue-200">_</span>Connect
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Layouts */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center">Horizontal Layout Variations</h2>

          {/* Horizontal Logo 1 */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="flex items-center justify-center space-x-4">
              <svg width="50" height="50" viewBox="0 0 50 50" className="text-slate-700">
                <circle cx="15" cy="15" r="3" fill="currentColor" />
                <circle cx="35" cy="15" r="3" fill="currentColor" />
                <circle cx="15" cy="35" r="3" fill="currentColor" />
                <circle cx="35" cy="35" r="3" fill="currentColor" />
                <path d="M18 15L32 15M15 18L15 32M18 35L32 35M35 18L35 32" stroke="currentColor" strokeWidth="2" />
                <circle cx="25" cy="25" r="2" fill="#3B82F6" />
              </svg>
              <div className="text-4xl font-bold tracking-tight text-slate-800">
                Writters<span className="text-blue-600">_</span>Connect
              </div>
            </div>
          </div>

          {/* Horizontal Logo 2 - Gradient */}
          <div className="bg-slate-50 rounded-2xl p-12 shadow-lg">
            <div className="flex items-center justify-center space-x-4">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <path
                  d="M10 40L40 10M35 5L45 15L40 20L30 10L35 5Z"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="15" cy="35" r="2" fill="url(#gradient2)" />
                <circle cx="25" cy="25" r="2" fill="url(#gradient2)" />
                <circle cx="35" cy="15" r="2" fill="url(#gradient2)" />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Writters
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">_</span>
                Connect
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-700 mb-6 text-center">Usage Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* App Icon */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                <svg width="32" height="32" viewBox="0 0 40 40" className="text-white">
                  <path
                    d="M8 8L12 28L16 16L20 28L24 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 12L32 12M28 16L32 16M28 20L32 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-600">App Icon</p>
            </div>

            {/* Favicon */}
            <div className="text-center space-y-3">
              <div className="w-8 h-8 mx-auto bg-slate-800 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 40 40" className="text-white">
                  <path
                    d="M8 8L12 28L16 16L20 28L24 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-600">Favicon</p>
            </div>

            {/* Business Card */}
            <div className="text-center space-y-3">
              <div className="w-24 h-16 mx-auto bg-slate-100 rounded border-2 border-slate-200 flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  <svg width="12" height="12" viewBox="0 0 40 40" className="text-slate-700">
                    <circle cx="15" cy="15" r="2" fill="currentColor" />
                    <circle cx="25" cy="25" r="2" fill="currentColor" />
                    <path d="M17 17L23 23" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <span className="text-xs font-bold text-slate-700">WC</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">Business Card</p>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-700 mb-6 text-center">Color Palette</h3>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg shadow-md"></div>
              <p className="text-sm mt-2 text-slate-600">#1E293B</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-lg shadow-md"></div>
              <p className="text-sm mt-2 text-slate-600">#475569</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg shadow-md"></div>
              <p className="text-sm mt-2 text-slate-600">#2563EB</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-lg shadow-md"></div>
              <p className="text-sm mt-2 text-slate-600">#60A5FA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-lg shadow-md"></div>
              <p className="text-sm mt-2 text-slate-600">#FFFFFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
