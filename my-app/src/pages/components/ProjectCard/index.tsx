import Link from 'next/link'
import React from 'react'
import RedDot from '../RedDot'

function ProjectCard() {
  return (
    <div className='flex flex-col items-start justify-center p-8 bg-neutral-800 rounded-2xl'>
        <div className='flex flex-row'>
            <RedDot dimensions='15px' />
            <h2 className='font-bold text-xl self-start'>Project #</h2>
            </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis laboriosam ipsa harum numquam fugiat dolorem fuga, non optio distinctio adipisci ducimus, est in a maiores aut dolorum? Laudantium, dolore.</p>
        <p>Technology: JS, NEXT js</p>
        <Link href='#'>See more</Link>
    </div>
  )
}

export default ProjectCard