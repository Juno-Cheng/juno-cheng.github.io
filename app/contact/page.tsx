"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {MailIcon, ArrowLeft, LinkedinIcon, GithubIcon} from "../../components/icons"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { AnimatedBackground } from "../../components/animated-background"
import { useToast } from "../../components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I&apos;ll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2">
            Get in <span className="text-purple-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="bg-gray-800/80 p-8 rounded-lg w-full max-w-2xl min-h-[400px]">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MailIcon className="text-purple-400 mt-1 mr-2" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:chengjonathan2021@gmail.com" className="text-gray-300 hover:text-purple-400 text-xs">
                      chengjonathan2021@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <GithubIcon className="text-purple-400 mt-1 mr-2" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/Juno-Cheng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 text-xs" 
                    >
                    github.com/Juno-Cheng
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <LinkedinIcon className="text-purple-400 mt-1 mr-2" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/jodachen2021/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 text-xs"
                    >
                      linkedin.com/in/jodachen
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Juno-Cheng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <GithubIcon className="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jodachen2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <LinkedinIcon className="" />
                  </a>
                  <a
                    href="mailto:chengjonathan2021@gmail.com"
                    className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <MailIcon className="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

