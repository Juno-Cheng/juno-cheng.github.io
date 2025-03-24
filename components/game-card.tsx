"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {ArrowUp} from "@/components/icons"

interface Game {
  id: number
  title: string
  image: string
  description: string
  category: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-800/80 dark:bg-gray-800/80 rounded-lg overflow-hidden shadow-lg border border-gray-700 group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2">
          <span className="text-xs bg-purple-500/80 text-white px-2 py-1 rounded-full">{game.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-400 dark:text-purple-400 group-hover:text-purple-300 transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-300 dark:text-gray-300 mb-4">{game.description}</p>
        <Link
          href={`/projects/${game.id}`}
          className="inline-flex items-center text-sm text-purple-400 dark:text-purple-400 hover:text-purple-300 transition-colors"
        >
          View Details <ArrowUp className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  )
}

