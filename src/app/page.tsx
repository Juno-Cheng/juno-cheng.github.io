"use client"

import type React from "react"
import DownloadIcon from "@/public/icons/download.svg";
import GithubIcon from "@/public/icons/github.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import MailIcon from "@/public/icons/mail.svg";
import Code from "@/public/icons/code.svg";
import Gamepad from "@/public/icons/gamepad.svg";
import Server from "@/public/icons/server.svg";
import DBIcon from "@/public/icons/database.svg";
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import GameCard from "@/components/game-card"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import SimpleImage from '@/components/simple-image';

export default function GamePortfolio() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
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
      company: "Analog AI",
      position: "Marketing Data Scientist & Frontend Developer (Part-Time)",
      period: "2024 - Present",
      description:
        "Dual role combining data analysis for marketing insights and frontend development for web applications.",
      category: "Data Science & Web Development",
    },
    {
      id: 2,
      company: "VLO Studio",
      position: "UEFN Game Developer (Full-Time)",
      period: "2024 - Present",
      description: "Developed interactive game experiences using Unreal Engine for Fortnite (UEFN).",
      category: "Game Development",
    },
    {
      id: 3,
      company: "ALIN",
      position: "Frontend Intern",
      period: "2024",
      description: "Conducted research on game development methodologies and player engagement patterns.",
      category: "Web Development",
    },
    {
      id: 4,
      company: "Data Annotation",
      position: "Data Analyst (Full-Time)",
      period: "2023-2024",
      description: "Developed AI algorithms & datasets for content detection, enhancing model accuracy and performance.",
      category: "Data Science & AI",
    },
    {
      id: 5,
      company: "UC Merced",
      position: "Game Developer & Researcher",
      period: "2022-2023",
      description: "Developed responsive user interfaces and implemented frontend features for web applications.",
      category: "Game Development",
    },
    {
      id: 6,
      company: "Anomali",
      position: "Marketing Data Analyst Intern",
      period: "2022",
      description: "Designed and executed data-driven marketing campaigns, automated data processes, and handled sensitive data to improve operational efficiency.",
      category: "Data Science & Marketing",
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
              Coding Across Domains
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-purple-400">
              <SimpleImage />
              </div>
              <h1 className="text-5xl font-bold">
                Hi! I'm <span className="text-purple-400 dark:text-purple-400">Jonathan Cheng</span>, a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  Multi-disciplinary Developer
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 dark:text-gray-300 mb-6"
            >
              Blending data science, game development, and web technologies to create impactful digital experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white h-10 px-4 py-2"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Me
              </Button>
              <Button
                variant="outline"
                className="ml-4 border-purple-600 text-purple-400 hover:bg-purple-900/20 h-10 px-4 py-2"
                onClick={() => {
                  alert(
                    "In a real implementation, this would download your resume. Add your resume.pdf file to the public folder.",
                  )
                }}
              >
                <DownloadIcon className="mr-3" /> Download Resume
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

      {/* Skills Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 p-6 rounded-lg text-center"
            >
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Software Engineering</h3>
              <p className="text-gray-300 text-sm">Full-stack development, web applications, and system architecture</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 p-6 rounded-lg text-center"
            >
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DBIcon className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Science</h3>
              <p className="text-gray-300 text-sm">Data analysis, visualization, and extracting actionable insights</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 p-6 rounded-lg text-center"
            >
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Game Development</h3>
              <p className="text-gray-300 text-sm">Interactive experiences, game mechanics, and player engagement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 p-6 rounded-lg text-center"
            >
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className=" text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">Intelligent systems, predictive models, and automation</p>
            </motion.div>
          </div>
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
              Welcome to my portfolio! I'm a recent Computer Science and Game Design graduate from UC Santa Cruz, now 
              pursuing my Master's in Computer Science at UC Irvine. With fresh experience spanning different fields in CS, I bring a 
               well-rounded perspective on how different technologies can complement each other to solve real-world problems.
            </p>
            <p className="text-lg mb-6">
              With several years of experience gained through internships and professional roles, I've had the opportunity to work with 
              diverse teams, technologies, and challenges. This hands-on experience has not only deepened my technical expertise but 
              also strengthened my ability to collaborate effectively and adapt to new environments.
            </p>
            <p className="text-lg">
              In today's rapidly evolving tech landscape, I believe adaptability is key. Whether it's analyzing data to
              drive business decisions, creating engaging game experiences, or building responsive web applications, I
              bring a problem-solving mindset and a passion for continuous learning.
            </p>
          </motion.div>
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <Link href="/learn">Learn More</Link>
            </Button>
          </div>
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
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white dark:text-white">{exp.position}</h3>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {exp.category}
                  </span>
                </div>
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
            A selection of my work across different domains, showcasing my versatility and technical range.
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
              Looking for a <span className="text-purple-400 dark:text-purple-400">Versatile Developer</span>?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 mb-8">
              Whether you need data analysis, game development, or web solutions, I'm ready to bring my diverse skill
              set to your team.
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
              <GithubIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <MailIcon size={20} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Jonathan Cheng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

