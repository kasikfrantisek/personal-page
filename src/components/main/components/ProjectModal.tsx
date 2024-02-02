import { motion, HTMLMotionProps } from "framer-motion"
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
        }} className="h-full w-full backdrop-blur-xl bg-[#000000AA] text-white fixed top-0 left-0 opacity-0 pt-5 md:p-20 z-50">
            <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] w-4/5 md:w-2/3 pb-10">{project?.heading}</h1>
            <button onClick={onClick} className="text-3xl absolute top-4 right-4">X</button>
            <div className="grid grid-cols-2 gap-12">


            <div className="text-white">
                <div className="w-full flex items-end justify-between pb-5 max-w-[50vw]">
                    <h1 className="font-bold uppercase texht-lg">{project?.label}</h1>
                    <h1 className="font-bold uppercase texht-lg">{project?.type}</h1>
                </div>
                <p className="max-w-[50vw] pb-5">{project?.description}</p>
                <div className="flex gap-2">
                    {project?.technologies.map((tech) => {
                        return <Tag title={tech} key={tech}/>
                    })}
                </div>
            </div>
                <div className="w-full h-[60%] overflow-y-scroll">
                    <div className="flex flex-col h-fit w-fit gap-8 flex-nowrap">

                    {project?.path.map((image) => (
                        <picture key={image}>
                            <img className="rounded-xl" src={`/projects/${image}`}/>
                        </picture>
                    ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}