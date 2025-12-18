"use client"

import { motion } from "framer-motion"

export function NeonButton({ children, onClick, variant = "primary", className = "" }) {
  const colors = {
    primary: {
      bg: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/50",
      hover: "hover:shadow-blue-500/80",
    },
    secondary: {
      bg: "from-cyan-500 to-blue-500",
      shadow: "shadow-cyan-500/50",
      hover: "hover:shadow-cyan-500/80",
    },
  }
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-lg font-semibold text-white
        bg-gradient-to-r ${colors[variant].bg}
        shadow-lg ${colors[variant].shadow}
        ${colors[variant].hover}
        transition-all duration-300
        before:absolute before:inset-0 before:rounded-lg
        before:bg-gradient-to-r before:${colors[variant].bg}
        before:opacity-0 hover:before:opacity-20
        before:blur-xl before:transition-opacity
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
} 