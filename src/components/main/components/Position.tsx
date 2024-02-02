import { motion } from "framer-motion"
import { useState } from "react"

type Props = {
    children: React.ReactNode,
    id: number,
    mouseOn: (number:number) => void,
}

export const Position = ({children, id, mouseOn}: Props) => {
    const [hover, setHover] = useState(false)

    const setId = (id:number) => {
        mouseOn(id)
        setHover(prev => !prev)
    }


    return (
        <div className="w-fit">
            <h3 onMouseEnter={() => setId(id)} onMouseLeave={() => setHover(prev => !prev)} className="uppercase font-bold text-sm pr-2 whitespace-nowrap md:text-4xl cursor-pointer">{children}</h3>
            <motion.div 
                  variants={{
                    initial: {width: 0, transition: { duration: 0.5, delay: 0.5 }},
                    load: {width: '100%', transition: { duration: 0.5 }},
                  }}
                  animate={hover ? "load" : "initial"}
                  className="h-[2px] bg-gradient-to-r from-teal-700 via-teal-900 to-black" 
            />
        </div>
    )
}