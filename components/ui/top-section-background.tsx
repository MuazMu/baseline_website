import React from "react"

export default function TopSectionBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main light blue background */}
      <div className="absolute inset-0 bg-primary/10" />
      {/* Animated blurred shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-64 bg-primary/20 rounded-bl-[200px] blur-2xl animate-float-slow" />
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float-reverse" />
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
      {/* Add more shapes as desired for effect */}
    </div>
  )
}

// Add these keyframes to your global CSS (tailwind.config or globals.css):
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
// @keyframes float-reverse { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(20px); } }
// .animate-float { animation: float 6s ease-in-out infinite; }
// .animate-float-slow { animation: float 12s ease-in-out infinite; }
// .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; } 