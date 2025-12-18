"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function GlitchText({ text, className = "" }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 400)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={
          isGlitching
            ? {
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  "0 0 0 transparent",
                  "2px 0 0 #3b82f6, -2px 0 0 #00ffff",
                  "-2px 0 0 #3b82f6, 2px 0 0 #00ffff",
                  "0 0 0 transparent",
                ],
              }
            : {}
        }
        transition={{ duration: 0.2 }}
        className="relative z-10 text-transparent"
      >
        {text}
      </motion.div>
      {isGlitching && (
        <>
          <motion.div
            className="absolute top-0 left-0 text-blue-500 opacity-70"
            animate={{ x: [-2, 2, -1] }}
            transition={{ duration: 0.1, repeat: 2 }}
          >
            {text}
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            animate={{ x: [2, -2, 1] }}
            transition={{ duration: 0.1, repeat: 2 }}
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  )
} 