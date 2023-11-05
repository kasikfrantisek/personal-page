import { motion } from "framer-motion"

type Props = {
    onClick: () => void
}

export const ProjectModal = ({onClick}: Props) => {
    return (
        <motion.div whileInView={{
            opacity: '100%',
            transition: {duration: 0.5}
        }} className="h-full w-full bg-black text-white fixed top-0 left-0 opacity-0 pt-5 md:pt-20 md:pl-20">
        <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] w-4/5 md:w-2/3 pb-10">Humbleteam</h1>
            <button onClick={onClick} className="text-3xl absolute top-4 right-4">X</button>
        </motion.div>
    )
}