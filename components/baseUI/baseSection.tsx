"use client"

import type React from "react"
import {DownloadIcon, ArrowDown} from "@/components/icons"
import { useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"
import Navbar from "@/components/navbar"
import Image from 'next/image';
import { Button } from "@/components/ui/button"

export default function BaseSection() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
      />


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
              <div>
                    <Image
                      src="/profile/1661913755248.jpg" 
                      alt="Profile"
                      width={200}
                      height={200}
                      />
                  </div>
              </div>
              <h1 className="text-5xl font-bold">
                Hi! I&apos;m <span className="text-purple-400 dark:text-purple-400">Jonathan Cheng</span>, a <br />
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
          <ArrowDown/>
        </div>
      </section>
      </div>

  )
}