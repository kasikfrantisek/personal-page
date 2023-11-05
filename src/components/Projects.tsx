import { useState } from "react"
import { Project } from "./Project"
import { ProjectModal } from "./ProjectModal"

export const Projects = () => {
    const [displayModal, setDisplayModal] = useState(false)
    return (
        <div className="w-full text-white min-h-screen pt-5 md:pt-20 md:pl-20 px-6 relative overflow-hidden">
        <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] pb-10">I did this for them</h1>
        <div className="grid grid-cols-3 h-fit gap-10 w-full relative items-center justify-items-center">
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
            <Project label="Humbleteam" path="/projects/humbleteam.png" onClick={() => setDisplayModal(true)}/>
        </div>
            {displayModal && <ProjectModal onClick={() => setDisplayModal(false)}/>}
      </div>
    )
}