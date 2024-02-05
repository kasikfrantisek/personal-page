import { motion } from "framer-motion"
import { useState } from "react"

type Props = {
    path: string,
    label: string,
    onClick: () => void,
}

export const Project = ({path, label, onClick}: Props) => {
    const [showImage, setShowImage] = useState(false);

    return (
        <div className="relative" 
             onMouseEnter={() => setShowImage(true)}
             onMouseLeave={() => setShowImage(false)}
             onClick={() => setShowImage((prev) => !prev)}
        >
            <motion.picture
                variants={{
                    hidden: {opacity: 0, transition: {duration: 0.7}},
                    visible: {opacity: 1, transition: {duration: 0.7}},
                }}
                initial='hidden'
                animate={showImage ? 'visible' : 'hidden'}
            >
                <img className="rounded-full w-[300px] h-[300px]  object-cover object-center" src={`/projects/${path}`} />
            </motion.picture>
            <motion.div
            variants={{
                visible: {backgroundColor: '#134e4ab3', transition: {duration: 0.3}},
                hidden: {backgroundColor: '#00000000', transition: {duration: 0.3}},
            }}
            initial='hidden'
            animate={showImage ? 'visible' : 'hidden'}
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 -left-[1px] w-[303px] h-[303px] flex justify-center items-center hover:cursor-pointer rounded-full">
                <h2 className="text-3xl uppercase text-white font-bold leading-[100%]">{label}</h2>
            </motion.div>
        </div>
    )
}