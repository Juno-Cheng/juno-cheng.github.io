"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import ArrowLeft from "@/public/icons/arrow-left.svg";
import GameCard from "@/components/game-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import ThemeToggle from "@/components/theme-toggle"
import { useToast } from "@/components/ui/use-toast"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const projects = [
    {
      id: 1,
      title: "Space Explorer",
      image: "/placeholder.svg?height=200&width=300",
      description: "A 3D space exploration game",
      category: "Game Development",
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      image: "/placeholder.svg?height=200&width=300",
      description: "Interactive data analytics platform",
      category: "Data Science",
    },
    {
      id: 3,
      title: "AI-Powered Recommendation Engine",
      image: "/placeholder.svg?height=200&width=300",
      description: "Machine learning recommendation system",
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Responsive Web Application",
      image: "/placeholder.svg?height=200&width=300",
      description: "Full-stack web development project",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Predictive Analytics Tool",
      image: "/placeholder.svg?height=200&width=300",
      description: "Forecasting tool using statistical models",
      category: "Data Science",
    },
    {
      id: 6,
      title: "Mobile Game Prototype",
      image: "/placeholder.svg?height=200&width=300",
      description: "Casual mobile game with unique mechanics",
      category: "Game Development",
    },
    {
      id: 7,
      title: "Natural Language Processing API",
      image: "/placeholder.svg?height=200&width=300",
      description: "Text analysis and sentiment detection",
      category: "AI/ML",
    },
    {
      id: 8,
      title: "E-commerce Platform",
      image: "/placeholder.svg?height=200&width=300",
      description: "Full-featured online shopping experience",
      category: "Web Development",
    },
  ]

  const categories = ["All", "Game Development", "Data Science", "AI/ML", "Web Development"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A collection of work spanning multiple disciplines and technologies.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={
                  activeFilter === category
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border-purple-600/40 text-purple-400 hover:bg-purple-900/20"
                }
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GameCard game={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
