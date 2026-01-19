"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true)
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - Using theme colors */}
      <motion.div
        className="absolute rounded-full blur-[150px] bg-accent/30"
        style={{
          width: "600px",
          height: "600px",
          top: "0%",
          left: "0%",
        }}
        animate={{
          x: [0, 300, 0],
          y: [0, 300, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-[150px] bg-accent/20"
        style={{
          width: "700px",
          height: "700px",
          top: "20%",
          right: "0%",
        }}
        animate={{
          x: [0, -300, 0],
          y: [0, 200, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute rounded-full blur-[150px] bg-accent/15"
        style={{
          width: "650px",
          height: "650px",
          bottom: "0%",
          left: "30%",
        }}
        animate={{
          x: [0, 350, 0],
          y: [0, -250, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional center orb */}
      <motion.div
        className="absolute rounded-full blur-[120px] bg-accent/20"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: ["-50%", "-30%", "-50%"],
          y: ["-50%", "-40%", "-50%"],
          scale: [1, 1.6, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "80px 80px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--accent) 1px, transparent 1px),
              linear-gradient(to bottom, var(--accent) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 40 }).map((_, i) => {
        const randomX = Math.random() * dimensions.width
        const randomY = Math.random() * dimensions.height
        const randomDuration = Math.random() * 8 + 8
        const randomDelay = Math.random() * 5
        const randomSize = Math.random() * 4 + 3
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/40"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${randomX}px`,
              top: `${randomY}px`,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              y: [0, -dimensions.height - 300],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Animated gradient sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
        style={{
          width: "200%",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
