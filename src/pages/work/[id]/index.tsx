import { Banner } from '@/components/work/sections/Banner'
import { Hero } from '@/components/work/sections/Hero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Project() {
  return (
    <>
        <Hero title="humbleteam" />
        <Banner />
    </>
  )
}
