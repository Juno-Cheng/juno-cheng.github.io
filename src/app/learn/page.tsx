"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ArrowLeft  from "@/public/icons/arrow-left.svg";
import GithubIcon from "@/public/icons/github.svg";
import ChevronUp from "@/public/icons/chevron-up.svg";
import ChevronDown from "@/public/icons/chevron-down.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import DownloadIcon from "@/public/icons/download.svg";
import Image from 'next/image';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import ThemeToggle from "@/components/theme-toggle"


const ExpandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
    <path d="M3 16.2V21m0 0h4.8m-4.8 0 6-6" />
    <path d="M21 7.8V3m0 0h-4.8m4.8 0-6 6" />
    <path d="M3 7.8V3m0 0h4.8m-4.8 0 6 6" />
  </svg>
)

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
)

// Skill category component with collapsible functionality
const SkillCategory = ({
  title,
  icon,
  skills,
  isOpen,
  toggleOpen,
}: {
  title: string
  icon: string
  skills: string[]
  isOpen: boolean
  toggleOpen: () => void
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-lg font-semibold mb-2 hover:text-purple-300 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-purple-300 mr-2">{icon}</span>
          {title}
        </div>
        {isOpen ? (
          <ChevronUp className="text-purple-400" />
        ) : (
          <ChevronDown className="text-purple-400" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pl-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function LearnPage() {
  // State for collapsible skill categories
  const [openCategories, setOpenCategories] = useState({
    languages: true,
    frameworks: false,
    gamedev: false,
    dataScience: false,
    tools: false,
  })

  const toggleCategory = (category: keyof typeof openCategories) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "C++", "C#", "HTML/CSS", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "TailwindCSS", "Three.js"],
    gamedev: ["Unity", "Unreal Engine", "UEFN", "Godot"],
    dataScience: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Blender", "Adobe Creative Suite"],
  }

  const achievements = [
    {
      id: "ucsc",
      icon: "🎓",
      title: "BS in Computer Science & Game Design",
      description: "UC Santa Cruz Graduate with Honors (2021-2025)",
    },
    {
      id: "uci",
      icon: "🎓",
      title: "MS in Computer Science",
      description: "Currently pursuing at UC Irvine (2025-2026)",
    },
    {
      id: "game",
      icon: "🎮",
      title: "Professional Game Developer",
      description: "Working with Unreal Engine at VLO Studio",
    },
    {
      id: "data",
      icon: "📊",
      title: "Data Science Experience",
      description: "Marketing analytics and AI model development",
    },
    {
      id: "web",
      icon: "💻",
      title: "Web Development",
      description: "Frontend development for multiple organizations",
    },
  ]

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Profile and Background */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/80 rounded-lg overflow-hidden shadow-xl mb-8"
            >
              <div className="p-6 border-b border-gray-700">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative w-32 h-32 overflow-hidden rounded-lg border-2 border-purple-500">
                    <div>
                          <Image
                            src="/profile/1661913755248.jpg" 
                            alt="Profile"
                            width={200}
                            height={200}
                            />
                        </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-1">Jonathan Cheng</h1>
                    <p className="text-gray-300 mb-3">
                      <span className="inline-block mr-2">🇺🇸</span> Irvine, CA
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <LinkedinIcon className="mr-1" /> LinkedIn
                      </a>
                      <span className="text-gray-500">|</span>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <GithubIcon className="mr-1" /> GitHub
                      </a>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                        Game Developer
                      </span>
                      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                        Data Scientist
                      </span>
                      <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">
                        Web Developer
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    {/* Animated MS icon with level indicator */}
                    <div className="relative">
                      <div className="bg-purple-900/30 rounded-full p-4 mb-2">
                        <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center relative animate-pulse">
                          <span className="text-2xl font-bold relative z-10">MS</span>
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-full bg-purple-400 blur-md opacity-50 animate-ping"></div>
                        </div>
                      </div>
                      {/* Level indicator */}
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-gray-800 animate-bounce">
                        22
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">Master&apos;s Student</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/80 rounded-lg overflow-hidden shadow-xl mb-8"
            >
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Background</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    My journey in technology began during my undergraduate studies at UC Santa Cruz, where I pursued a
                    dual focus in Computer Science and Game Design. This unique combination allowed me to develop both
                    technical programming skills and creative design thinking, setting the foundation for my versatile
                    career path.
                  </p>
                  <p>
                    Throughout my academic journey, I&apos;ve been fortunate to explore various domains within computer
                    science. From developing interactive games using Unity and Unreal Engine to analyzing complex
                    datasets for marketing insights, each experience has added a new dimension to my skill set. Now, as
                    a Master&apos;s student at UC Irvine, I&apos;m further expanding my knowledge in advanced computing concepts.
                  </p>
                  <p>
                    My professional experience spans multiple industries and roles. I&apos;ve worked as a game developer
                    creating immersive experiences, a data analyst extracting meaningful insights from complex datasets,
                    and a frontend developer building responsive web applications. This diverse background has given me
                    a unique perspective on how different technologies can complement each other to solve complex
                    problems.
                  </p>
                  <p>
                    I believe in the power of continuous learning and adaptation in the ever-evolving tech landscape.
                    Whether it&apos;s mastering a new programming language, exploring emerging technologies, or understanding
                    industry trends, I&apos;m committed to growing my expertise and applying it to create innovative
                    solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/80 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Resume</h2>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                    onClick={() => {
                      alert("This would expand your resume in a modal view")
                    }}
                  >
                    <ExpandIcon className="mr-2" /> Expand
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                    onClick={() => {
                      alert("This would download your resume")
                    }}
                  >
                    <DownloadIcon className="mr-2" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                    onClick={() => {
                      alert("This would open your resume in a new tab")
                    }}
                  >
                    <ExternalLinkIcon className="mr-2" /> Open
                  </Button>
                </div>
                <div className="mt-6 text-center text-gray-400">
                  <p>Click &quot;Expand&quot; to view my resume</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills and Achievements */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/80 rounded-lg overflow-hidden shadow-xl mb-8"
            >
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-purple-400 flex flex-col space-y-4">Skills</h2>
                <SkillCategory
                  title="Languages"
                  icon="💻"
                  skills={skills.languages}
                  isOpen={openCategories.languages}
                  toggleOpen={() => toggleCategory("languages")}
                />

                <SkillCategory
                  title="Frameworks & Libraries"
                  icon="⚛️"
                  skills={skills.frameworks}
                  isOpen={openCategories.frameworks}
                  toggleOpen={() => toggleCategory("frameworks")}
                />

                <SkillCategory
                  title="Game Development"
                  icon="🎮"
                  skills={skills.gamedev}
                  isOpen={openCategories.gamedev}
                  toggleOpen={() => toggleCategory("gamedev")}
                />

                <SkillCategory
                  title="Data Science"
                  icon="📊"
                  skills={skills.dataScience}
                  isOpen={openCategories.dataScience}
                  toggleOpen={() => toggleCategory("dataScience")}
                />

                <SkillCategory
                  title="Tools & Others"
                  icon="🛠️"
                  skills={skills.tools}
                  isOpen={openCategories.tools}
                  toggleOpen={() => toggleCategory("tools")}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/80 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-purple-900/50 rounded-full p-2 mr-3 text-2xl">{achievement.icon}</div>
                        <div>
                          <h3 className="font-semibold text-purple-300">{achievement.title}</h3>
                          <p className="text-sm text-gray-300">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

