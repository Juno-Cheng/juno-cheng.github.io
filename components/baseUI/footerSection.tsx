"use client"

import type React from "react"
import {DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, CodeIcon, DBIcon, ServerIcon, GamepadIcon} from "@/components/icons"
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FooterSection() {
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
              Whether you need data analysis, game development, or web solutions, I&apos;m ready to bring my diverse skill
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
              <GithubIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <MailIcon />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Jonathan Cheng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}