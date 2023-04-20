import React from 'react'
import RedDot from '../RedDot'
import ProjectCard from '../ProjectCard'

function Projects() {
  return (
    <div className='text-white w-full h-fill p-10 bg-black'>
        <div className='flex flex-row mb-5'>
            <RedDot dimensions='24px' />
            <h1 className='font-bold text-3xl self-start'>Lets take a look at things I worked on</h1>
            </div>
        <div className='grid grid-cols-3 gap-5'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Projects