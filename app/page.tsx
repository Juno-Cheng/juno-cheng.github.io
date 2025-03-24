import HeroNEW from "@/components/heroNEW"
import GamePortfolio from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <GamePortfolio />
      <footer className="w-full py-6 bg-[#1E2E2E] text-center text-white/60 text-sm">
        <p>© 2025 Regis Pak. All rights reserved.</p>
      </footer>
    </main>
    
  )
}

