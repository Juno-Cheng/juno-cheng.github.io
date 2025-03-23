"use client"

import type React from "react"

import { motion } from "framer-motion"
import ArrowLeft from "@/public/icons/arrow-left.svg";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import ThemeToggle from "@/components/theme-toggle"
import SimpleImage from '@/components/simple-image';


// Inline SVG components to replace the imports
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)

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

export default function LearnPage() {
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
      description: "UC Santa Cruz graduate with honors",
    },
    {
      id: "uci",
      icon: "🎓",
      title: "MS in Computer Science",
      description: "Currently pursuing at UC Irvine",
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
                    <SimpleImage />
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
                        <LinkedinIcon className="mr-1 h-5 w-5" /> LinkedIn
                      </a>
                      <span className="text-gray-500">|</span>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <GithubIcon className="mr-1 h-5 w-5" /> GitHub
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
                    <div className="bg-purple-900/30 rounded-full p-4 mb-2">
                      <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center">
                        <span className="text-2xl font-bold">MS</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">Master's Student</span>
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
                    Throughout my academic journey, I've been fortunate to explore various domains within computer
                    science. From developing interactive games using Unity and Unreal Engine to analyzing complex
                    datasets for marketing insights, each experience has added a new dimension to my skill set. Now, as
                    a Master's student at UC Irvine, I'm further expanding my knowledge in advanced computing concepts.
                  </p>
                  <p>
                    My professional experience spans multiple industries and roles. I've worked as a game developer
                    creating immersive experiences, a data analyst extracting meaningful insights from complex datasets,
                    and a frontend developer building responsive web applications. This diverse background has given me
                    a unique perspective on how different technologies can complement each other to solve complex
                    problems.
                  </p>
                  <p>
                    I believe in the power of continuous learning and adaptation in the ever-evolving tech landscape.
                    Whether it's mastering a new programming language, exploring emerging technologies, or understanding
                    industry trends, I'm committed to growing my expertise and applying it to create innovative
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
                    <ExpandIcon className="mr-2 h-5 w-5" /> Expand
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                    onClick={() => {
                      alert("This would download your resume")
                    }}
                  >
                    <DownloadIcon className="mr-2 h-5 w-5" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                    onClick={() => {
                      alert("This would open your resume in a new tab")
                    }}
                  >
                    <ExternalLinkIcon className="mr-2 h-5 w-5" /> Open
                  </Button>
                </div>
                <div className="mt-6 text-center text-gray-400">
                  <p>Click "Expand" to view my resume</p>
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
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-purple-300 mr-2">⟨⟩</span> Languages
                  </h3>
                  <div className="space-y-2">
                    {skills.languages.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-purple-300 mr-2">⚛️</span> Frameworks & Libraries
                  </h3>
                  <div className="space-y-2">
                    {skills.frameworks.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-purple-300 mr-2">🎮</span> Game Development
                  </h3>
                  <div className="space-y-2">
                    {skills.gamedev.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-purple-300 mr-2">📊</span> Data Science
                  </h3>
                  <div className="space-y-2">
                    {skills.dataScience.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-purple-300 mr-2">🛠️</span> Tools & Others
                  </h3>
                  <div className="space-y-2">
                    {skills.tools.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
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


