"use client"

import type React from "react"
import {DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, CodeIcon, DBIcon, ServerIcon, GamepadIcon} from "@/components/icons"
import { useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"
import Navbar from "@/components/navbar"

export default function ExpSection() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>

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
                <CodeIcon className="text-purple-400" />
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
                <GamepadIcon className="text-purple-400" />
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
                <ServerIcon className=" text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">Intelligent systems, predictive models, and automation</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}