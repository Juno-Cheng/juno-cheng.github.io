"use client"

import type React from "react"
import {DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, CodeIcon, DBIcon, ServerIcon, GamepadIcon} from "@/components/icons"
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { GameCard } from "@/components/game-card"

import { games } from '@/data/gamesData.js';
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function ProjectSection() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  return (
    <div>
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
    </div>
  )
}