import React from "react"

// Fixed full-viewport background shared by every section.
const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a192f] pointer-events-none">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1000&q=50"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover absolute inset-0 opacity-40"
        loading="eager"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0a192f]/70" />
    </div>
  )
}

export default GlobalBackground
