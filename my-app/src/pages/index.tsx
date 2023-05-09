import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Playlist from './components/Playlist'
import Navgation from './components/Navigation'
import Projects from './components/Projects'
import Socials from './components/Socials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Playlist />
      <Projects />
      <Socials />
    </>
  )
}
