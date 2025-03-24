"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  color: string
}

export function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme !== "light"

  // Re-generate stars when theme changes
  useEffect(() => {
    const generateStars = () => {
      const lightColors = ["#9333ea", "#a855f7", "#c084fc", "#e9d5ff"]
      const darkColors = ["#9333ea", "#a855f7", "#c084fc", "#ffffff"]
      const colors = isDark ? darkColors : lightColors

      const newStars: Star[] = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [isDark])

  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

