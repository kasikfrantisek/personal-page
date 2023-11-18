import { useState } from "react"
import { Project } from "./Project"
import { ProjectModal } from "./ProjectModal"
import data from '@/data/projects.json'

import { ProjectType } from "@/types/types"

export const Projects = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const [project, setProject] = useState<ProjectType>();

    const handleOnClick = (item:ProjectType) => {
        setDisplayModal(true)
        setProject(item)
    }
    
    return (
        <div className="w-full text-white min-h-screen pt-5 md:pt-20 md:pl-20 px-6 relative overflow-hidden">
        <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] pb-10">I did this for them</h1>
        <div className="grid grid-cols-3 h-fit gap-10 w-full relative items-center justify-items-center">
            {data.map((item) => {
                return <Project key={item.id} label={item.label} path={item.path[0]} onClick={() => handleOnClick(item)}/>
            })}
        </div>
            {displayModal && <ProjectModal project={project} onClick={() => setDisplayModal(false)}/>}
      </div>
    )
}
