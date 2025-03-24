"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"


export default function WorkSection() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
    <div>
      {/* Work Experience Section */}
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
    </div>
  )
}