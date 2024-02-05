import { Hero } from '@/components/main/sections/Hero'
import { Inter } from 'next/font/google'
import { About } from '@/components/main/sections/About'
import { Work } from '@/components/main/sections/Work'
import { Projects } from '@/components/main/sections/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
    </>
  )
}
