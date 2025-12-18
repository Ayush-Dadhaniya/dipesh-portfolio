"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Cubes */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg opacity-15"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-blue-400 rounded-lg opacity-15"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-25"
        animate={{
          y: [0, -60, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {/* Grid Pattern */}
      <motion.div
        className="absolute bottom-20 right-1/4 w-16 h-16 opacity-10"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="grid grid-cols-4 gap-1 w-full h-full">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="bg-blue-400 rounded-sm" />
          ))}
        </div>
      </motion.div>
      {/* Code Block */}
      <motion.div
        className="absolute top-1/3 left-20 w-20 h-16 bg-slate-900/20 rounded-lg border border-blue-500/20 opacity-20 p-2"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="space-y-1">
          <div className="h-1 bg-blue-400 rounded w-3/4"></div>
          <div className="h-1 bg-cyan-400 rounded w-1/2"></div>
          <div className="h-1 bg-blue-300 rounded w-2/3"></div>
        </div>
      </motion.div>
    </div>
  )
} 