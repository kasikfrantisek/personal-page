import { Hero } from '@/components/Hero'
import { Inter } from 'next/font/google'
import { About } from '@/components/About'
import { Work } from '@/components/Work'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <Hero />
      <About />
      <Work />
    </main>
  )
}
