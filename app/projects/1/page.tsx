"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

// Single project data (only 1 project)
const projectData = {
  id: 1,
  title: "Malisense",
  shortDescription: "A 3D space exploration game",
  fullDescription: "Space Explorer is an immersive 3D space exploration game built with Unity and C#. Players can navigate through procedurally generated star systems, discover new planets, and engage in resource management while building their space empire.",
  category: "Game Development",
  image: "/placeholder.svg?height=400&width=800",
  gallery: [
    "/placeholder.svg?height=300&width=500&text=Screenshot1",
    "/placeholder.svg?height=300&width=500&text=Screenshot2",
  ],
  technologies: ["Unity", "C#", "Git"],
  features: [
    "Procedurally generated star systems",
    "Real-time physics simulation",
    "Resource management system"
  ],
  duration: "8 months",
  teamSize: "Team Project (100+ Members)",
  status: "Completed",
  demoUrl: "https://demo.space-explorer.com",
  completedDate: "March 2024"
}

export default function ProjectDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectData.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectData.gallery.length) % projectData.gallery.length)
  }

  const handleBackToProjects = () => {
    router.push("/projects")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBackToProjects}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </motion.button>

        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                {projectData.category}
              </span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                {projectData.status}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{projectData.shortDescription}</p>

            <div className="flex flex-wrap gap-4">
              {projectData.demoUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                    <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={projectData.gallery[currentImageIndex]}
                    alt={`${projectData.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  {projectData.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </button>
                    </>
                  )}
                </div>

                {projectData.gallery.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {projectData.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-purple-500" : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-800/80 rounded-lg p-6 mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">{projectData.fullDescription}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-800/80 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h2>
                <ul className="space-y-2">
                  {projectData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-800/80 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-white">{projectData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="text-white">{projectData.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Completed</p>
                      <p className="text-white">{projectData.completedDate}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gray-800/80 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech, index) => (
                    <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}