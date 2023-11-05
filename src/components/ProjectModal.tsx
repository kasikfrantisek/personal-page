import { motion } from "framer-motion"
import data from '@/data/projects.json'
import { useState } from "react";
import { ProjectType } from "@/types/types";
import { Tag } from "./Tag";


type Props = {
    onClick: () => void;
    project: ProjectType | undefined;
}

export const ProjectModal = ({onClick, project}: Props) => {


    return (
        <motion.div whileInView={{
            opacity: '100%',
            transition: {duration: 0.5}
        }} className="h-full w-full backdrop-blur-xl bg-[#000000AA] text-white fixed top-0 left-0 opacity-0 pt-5 md:pt-20 md:pl-20">
        <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] w-4/5 md:w-2/3 pb-10">{project?.heading}</h1>
            <button onClick={onClick} className="text-3xl absolute top-4 right-4">X</button>
            <div className="text-white">
                <h1>{project?.label}</h1>
                <p className="max-w-[50vw]">{project?.description}</p>
                <div className="flex">
                    {project?.technologies.map((tech) => {
                        return <Tag title={tech} />
                    })}
                </div>
            </div>
        </motion.div>
    )
}