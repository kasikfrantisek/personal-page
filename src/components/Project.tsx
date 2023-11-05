import { motion } from "framer-motion"

type Props = {
    path: string,
    label: string,
    onClick: () => void,
}

export const Project = ({path, label, onClick}: Props) => {
    return (
        <div className="relative">
            <picture className="">
                <img className="rounded-full w-[300px] h-[300px]  object-cover object-center" src={path} />
            </picture>
            <motion.div whileHover={{
                backgroundColor: '#134e4ab3',
                transition: {duration: 0.7}
            }} 
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 -left-[1px] w-[303px] h-[303px] bg-black flex justify-center items-center hover:cursor-pointer rounded-full">
                <h2 className="text-3xl uppercase text-white font-bold leading-[100%]">{label}</h2>
            </motion.div>
        </div>
    )
}