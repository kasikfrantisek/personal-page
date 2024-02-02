import { useState } from "react"
import { Project } from "../components/Project"
import { ProjectModal } from "../components/ProjectModal"
import data from '@/data/projects.json'

import { ProjectType } from "@/types/types"
import { SectionWrapper } from "../../sidewide/SectionWrapper"

export const Projects = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const [project, setProject] = useState<ProjectType>();

    const handleOnClick = (item:ProjectType) => {
        setDisplayModal(true)
        setProject(item)
    }
    
    return (
        <SectionWrapper title="I did this for them" id="projects">
            <div className="grid grid-cols-3 h-fit gap-10 w-full relative items-center justify-items-center">
                {data.map((item) => {
                    return <Project key={item.id} label={item.label} path={item.path[0]} onClick={() => handleOnClick(item)}/>
                })}
            </div>
                {displayModal && <ProjectModal project={project} onClick={() => setDisplayModal(false)}/>}
        </SectionWrapper>
    )
}
