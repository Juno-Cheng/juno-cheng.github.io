"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import ArrowLeft from "/public/icons/arrow-left.svg";
import Link from "next/link"
import { Button } from "../../components/ui/button"
import AnimatedBackground from "../../components/animated-background"
import ThemeToggle from "../../components/theme-toggle"
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-800/80 dark:bg-gray-800/80 rounded-lg overflow-hidden shadow-lg border border-gray-700 group h-[320px] flex flex-col"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2">
          <span className="text-xs bg-purple-500/80 text-white px-2 py-1 rounded-full">{project.category}</span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-1 text-purple-400 dark:text-purple-400 group-hover:text-purple-300 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 dark:text-gray-300 mb-3 line-clamp-3 flex-1">{project.description}</p>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-xs text-purple-400 dark:text-purple-400 hover:text-purple-300 transition-colors mt-auto"
        >
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const projects = [
    {
      id: 1,
      title: "Malisense",
      image: "/projects/Malisense/Malisense.png",
      description: "2D top-down dungeon crawler where you collect artifacts to thwart the Malignance. Developed for 2023-24 GDA&apos;s mock studio",
      category: "Game Development",
    },
    {
      id: 2,
      title: "Data Visualization ",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Interactive data analytics platform for visualizing complex datasets with customizable charts and filters.",
      category: "Data Science",
    },
    {
      id: 3,
      title: "AI-Powered Recommendation Engine",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Machine learning recommendation system that analyzes user behavior to provide personalized content suggestions.",
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Responsive Web Application",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Full-stack web development project featuring user authentication, database integration, and responsive design.",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Predictive Analytics Tool",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Forecasting tool using statistical models to predict future trends based on historical data patterns.",
      category: "Data Science",
    },
    {
      id: 6,
      title: "Mobile Game Prototype",
      image: "/placeholder.svg?height=200&width=300",
      description: "Casual mobile game with unique mechanics, touch controls, and engaging progression systems.",
      category: "Game Development",
    },
    {
      id: 7,
      title: "Natural Language Processing API",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Text analysis and sentiment detection service that processes and categorizes text data using NLP algorithms.",
      category: "AI/ML",
    },
    {
      id: 8,
      title: "E-commerce Platform",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Full-featured online shopping experience with product catalog, shopping cart, and secure checkout process.",
      category: "Web Development",
    },
    {
      id: 9,
      title: "Virtual Reality Experience",
      image: "/placeholder.svg?height=200&width=300",
      description: "Immersive VR application with interactive environments and physics-based interactions.",
      category: "Game Development",
    },
  ]

  const categories = ["All", "Game Development", "Data Science", "AI/ML", "Web Development"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
      <AnimatedBackground />

      {/* Theme Toggle */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle />
      </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
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
