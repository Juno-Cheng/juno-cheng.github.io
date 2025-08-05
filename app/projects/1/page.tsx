"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Users, Play, ImageIcon } from 'lucide-react'
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {AnimatedBackground}  from "@/components/animated-background"

// Project 1 data - Malisense with mixed media gallery
const project = {
  id: 1,
  title: "Malisense",
  shortDescription: "A 2D top-down horror dungeon crawler",
  fullDescription:
    "In a corrupted world where citizens have been transformed into sense-deprived beasts, you play as the Disgraced, a survivor tasked with retrieving sacred artifacts to thwart the Malignance and reclaim your home. This atmospheric 2D dungeon crawler features unique monster behaviors based on different human senses, strategic item usage, and artifact collection mechanics that affect dungeon navigation.",
  category: "Game Development",
  image: "/placeholder.svg?height=400&width=800",
  gallery: [
    {
      type: "video",
      src: "/projects/Malisense/MalisenseTitleVideo.mp4",
      alt: "Gameplay demonstration video",
    },
    {
      type: "image",
      src: "/projects/Malisense/MalisensePNG.png",
      alt: "UI Image",
    },
    {
      type: "video",
      src: "/projects/Malisense/malisense_video.mp4",
      alt: "Technical demonstration video",
    },
    {
      type: "image",
      src: "/projects/Malisense/MalisenseGameplay.png",
      alt: "Gameplay Image",
    },
  ],
  technologies: ["Unity", "C#", "uGUI/TMP", "Ink", "Git"],
  features: [
    "Sense-Based Monster AI",
    "Resource Management System",
    "Town Hub Ecosystem",
    "Modular UI Framework",
    "Cross-platform compatibility",
  ],
  challenges: [
    "Optimizing performance for large-scale space environments",
    "Implementing Sense-Based AI Logic within Time-Frame",
    "Avoiding Softlocks with Item System Edge Cases",
    "Branching Dialogue Complexity",
  ],
  myContributions: [
    "Designed and implemented a modular UI framework using Unity uGUI/TMP for menus, HUD, and dialogue",
    "Developed a dynamic event-driven button system with custom sound feedback and visual states",
    "Built the Village scene architecture with NPC interaction zones and dialogue triggers",
  ],
  myRole: "Game Developer & Designer",
  // ADDED keyAchievements HERE
  keyAchievements: [
    "Reduced memory usage by 40% through custom object pooling",
    "Achieved 60+ FPS on mid-range hardware with thousands of objects",
    "Implemented seamless multiplayer with <50ms latency",
  ],
  duration: "8 months",
  teamSize: "Group Project (100+ Members)",
  status: "Completed",
  demoUrl: "https://game-design-art-collab.itch.io/malisense",
  githubUrl: "https://github.com/GDACollab/Malisense",
  completedDate: "May 2024",
}

export default function Project1Page() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (project.gallery[currentMediaIndex].type === "video" && videoRef.current) {
      videoRef.current.play().catch((error) => console.log("Video autoplay failed:", error))
    }
  }, [currentMediaIndex])

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  const handleBackToProjects = () => {
    router.push("/projects")
  }

  const currentMedia = project.gallery[currentMediaIndex]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
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
                {project.category}
              </span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">{project.status}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Game Link
                    </a>
                  </Button>
                </motion.div>
              )}
              {project.githubUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900/20 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Media Gallery (Images + Videos) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-800">
                  {currentMedia.type === "image" ? (
                    <Image
                      src={currentMedia.src || "/placeholder.svg"}
                      alt={currentMedia.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        ref={videoRef}
                        src={currentMedia.src}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  )}

                  {/* Navigation arrows */}
                  {project.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevMedia}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextMedia}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </button>
                    </>
                  )}

                  {/* Media type indicator */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      {currentMedia.type === "image" ? (
                        <>
                          <ImageIcon className="h-3 w-3 mr-1" /> Image
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 mr-1" /> Video
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Media navigation dots */}
                {project.gallery.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {project.gallery.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentMediaIndex(index)
                        }}
                        className={`w-3 h-3 rounded-full transition-colors relative ${
                          index === currentMediaIndex ? "bg-purple-500" : "bg-gray-600"
                        }`}
                      >
                        {/* Small icon to indicate media type */}
                        {media.type === "video" && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                        )}
                      </button>
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
                <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
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
                  {project.features.map((feature, index) => (
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
                      <p className="text-white">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="text-white">{project.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Completed</p>
                      <p className="text-white">{project.completedDate}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* My Contributions - NEW SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gray-800/80 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">My Role & Contributions</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Role</p>
                  <p className="text-white font-medium">{project.myRole}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Key Contributions</p>
                  <ul className="space-y-1">
                    {project.myContributions.slice(0, 3).map((contribution, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-gray-800/80 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Technical Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gray-800/80 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Technical Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
