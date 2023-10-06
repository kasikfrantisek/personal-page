import { useEffect, useState } from "react"
import { Position } from "./Position"
import { workData } from "@/data/work"
import { DetailPosition } from "./DetailPosition"

export const Work = () => {
    const [displayed, setDisplayed] = useState<number>(1);

    return (
        <div className="w-full h-screen text-white md:pt-20 md:pl-20 px-6 pt-8 relative">
            <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] md:w-2/3">Work, work, work</h1>
            <div className="md:pt-14 pt-4 grid md:grid-cols-2 md:gap-20">
                <div className="md:space-y-5 flex flex-nowrap md:flex-wrap md:overflow-x-hidden overflow-x-scroll">
                    {workData.map(job => <Position id={job.id} mouseOn={setDisplayed}>{job.position} - {job.employer}</Position>)}
                </div>
                <div className="pt-5 md:pt-0">
                    {workData.map(job => {
                        if(job.id == displayed) return <DetailPosition data={job} />
                    })}
                </div>
            </div>
        </div>
    )
}