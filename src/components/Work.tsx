import { useEffect, useState } from "react"
import { Position } from "./Position"
import { workData } from "@/data/work"
import { DetailPosition } from "./DetailPosition"

export const Work = () => {
    const [displayed, setDisplayed] = useState<number>();

    return (
        <div className="w-full h-screen text-white md:pt-20 md:pl-20 px-6 relative">
            <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] w-4/5 md:w-2/3">Work, work, work</h1>
            <div className="pt-14 grid grid-cols-2 gap-20">
                <div className="space-y-5">
                    {workData.map(job => <Position id={job.id} mouseOn={setDisplayed}>{job.title}</Position>)}
                </div>
                <div>
                    {workData.map(job => {
                        if(job.id == displayed) return <DetailPosition>{job.description}</DetailPosition>
                    })}
                </div>
            </div>
        </div>
    )
}