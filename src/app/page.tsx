"use client"

import type React from "react"
import DownloadIcon from "@/public/icons/download.svg";
import GithubIcon from "@/public/icons/github.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import MailIcon from "@/public/icons/mail.svg";
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import GameCard from "@/components/game-card"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function GamePortfolio() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const games = [
    {
      id: 1,
      title: "Space Explorer",
      image: "/placeholder.svg?height=200&width=300",
      description: "A 3D space exploration game",
    },
    {
      id: 2,
      title: "Pixel Warrior",
      image: "/placeholder.svg?height=200&width=300",
      description: "A retro-style platformer",
    },
    {
      id: 3,
      title: "Strategy Masters",
      image: "/placeholder.svg?height=200&width=300",
      description: "A turn-based strategy game",
    },
    {
      id: 4,
      title: "VR Adventure",
      image: "/placeholder.svg?height=200&width=300",
      description: "An immersive VR experience",
    },
  ]

  const experiences = [
    {
      id: 1,
      company: "Game Studio X",
      position: "Senior Game Developer",
      period: "2020 - Present",
      description:
        "Led development of multiple AAA titles, managed a team of 5 developers, and implemented core gameplay systems.",
    },
    {
      id: 2,
      company: "Indie Games Co",
      position: "Game Designer",
      period: "2018 - 2020",
      description:
        "Designed game mechanics, created level layouts, and collaborated with artists to create cohesive game experiences.",
    },
    {
      id: 3,
      company: "Mobile Games Inc",
      position: "Junior Developer",
      period: "2016 - 2018",
      description:
        "Developed mobile games using Unity, implemented UI systems, and optimized performance for mobile devices.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
      />

      {/* Theme Toggle */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-purple-400 dark:text-purple-400 text-xl mb-2"
            >
              Hey There!
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              I'm <span className="text-purple-400 dark:text-purple-400">Jonathan Cheng</span>, a Game Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 dark:text-gray-300 mb-6"
            >
              I create, design, program, and play games.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Me
              </Button>
              <Button
                variant="outline"
                className="ml-4 border-purple-600 text-purple-400 hover:bg-purple-900/20"
                onClick={() => {
                  // This is a client-side solution since we can't guarantee the file exists
                  alert(
                    "In a real implementation, this would download your resume. Add your resume.pdf file to the public folder.",
                  )
                }}
              >
                  <DownloadIcon className="mr-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-purple-400 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            About <span className="text-purple-400 dark:text-purple-400">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 dark:bg-gray-800/80 p-8 rounded-lg shadow-xl max-w-4xl mx-auto"
          >
            <p className="text-lg mb-6">
              I'm a passionate game developer with over 5 years of experience creating immersive gaming experiences. My
              expertise spans across various game engines including Unity, Unreal Engine, and custom frameworks.
            </p>
            <p className="text-lg mb-6">
              I specialize in gameplay programming, AI systems, and procedural generation. My goal is to create games
              that not only entertain but also provide meaningful experiences to players.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring the latest games, contributing to game jams, or
              experimenting with new game mechanics and ideas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 relative z-10 bg-gray-800/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Work <span className="text-purple-400 dark:text-purple-400">Experience</span>
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative pl-8 border-l-2 border-purple-500"
              >
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-white dark:text-white">{exp.position}</h3>
                <h4 className="text-purple-400 dark:text-purple-400 mb-2">
                  {exp.company} | {exp.period}
                </h4>
                <p className="text-gray-300 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Featured <span className="text-purple-400 dark:text-purple-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Here are my latest projects that I've built using different engines and practices. Please take a look at
            what I've made so far, and if you like what you see, you can check out more in my portfolio.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative z-10 bg-gray-800/30 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Want to <span className="text-purple-400 dark:text-purple-400">Work Together</span>?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 dark:bg-gray-900 relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 dark:text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <MailIcon className="h-5 w-5" />
          </a>
          </div>
          <p>© {new Date().getFullYear()} Jonathan Cheng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
