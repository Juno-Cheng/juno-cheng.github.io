"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
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
              Welcome to my portfolio! I&apos;m a recent Computer Science and Game Design graduate from UC Santa Cruz, now 
              pursuing my Master&apos;s in Computer Science at UC Irvine. With fresh experience spanning different fields in CS, I bring a 
               well-rounded perspective on how different technologies can complement each other to solve real-world problems.
            </p>
            <p className="text-lg mb-6">
              With several years of experience gained through internships and professional roles, I&apos;ve had the opportunity to work with 
              diverse teams, technologies, and challenges. This hands-on experience has not only deepened my technical expertise but 
              also strengthened my ability to collaborate effectively and adapt to new environments.
            </p>
            <p className="text-lg">
              In today&apos;s rapidly evolving tech landscape, I believe adaptability is key. Whether it&apos;s analyzing data to
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
    </div>
  )
}