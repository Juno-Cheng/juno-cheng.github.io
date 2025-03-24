import HeroNEW from "@/components/heroNEW"
import BaseSection from "@/components/baseUI/baseSection"
import ExpSection from "@/components/baseUI/experienceSection"
import AboutSection from "@/components/baseUI/aboutSection"
import WorkSection from "@/components/baseUI/workSection"
import ProjectSection from "@/components/baseUI/projectSection"
import FooterSection from "@/components/baseUI/footerSection"
import { AnimatedBackground } from "@/components/animated-background"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-white relative overflow-hidden">
      {/* Background and Navbar only here */}
      <AnimatedBackground />
      <Navbar />
      
      {/* Sections */}
      <BaseSection />
      <ExpSection />
      <AboutSection />
      <WorkSection />
      <FooterSection />
      {/* Other sections */}
    </div>
  )
}

