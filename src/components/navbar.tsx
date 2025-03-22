"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavbarProps {
  onAboutClick?: () => void
  onExperienceClick?: () => void
  onProjectsClick?: () => void
  onContactClick?: () => void
}

export default function Navbar({ onAboutClick, onExperienceClick, onProjectsClick, onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Jonathan <span className="text-purple-400">Cheng</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <button onClick={onAboutClick} className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </button>
                <button onClick={onExperienceClick} className="text-gray-300 hover:text-purple-400 transition-colors">
                  Experience
                </button>
                <button onClick={onProjectsClick} className="text-gray-300 hover:text-purple-400 transition-colors">
                  Projects
                </button>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link href="/#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </Link>
                <Link href="/#experience" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Experience
                </Link>
                <Link href="/projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => {
                      onAboutClick?.()
                      setMobileMenuOpen(false)
                    }}
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      onExperienceClick?.()
                      setMobileMenuOpen(false)
                    }}
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => {
                      onProjectsClick?.()
                      setMobileMenuOpen(false)
                    }}
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                  >
                    Projects
                  </button>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/#about"
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/#experience"
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Experience
                  </Link>
                  <Link
                    href="/projects"
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

