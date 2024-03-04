import { About } from '@/components/main/sections/About';
import { Hero } from '@/components/main/sections/Hero';
import { Projects } from '@/components/main/sections/Projects';
import { Work } from '@/components/main/sections/Work';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
    </>
  );
}
