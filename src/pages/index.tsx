import { Hero } from '@/components/Hero'
import { Inter } from 'next/font/google'
import { About } from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen min-h-screen mx-auto overflow-y-scroll snap-mandatory snap-y'>
      <Hero />
      <About />
    </main>
  )
}
