import { useEffect, useState } from "react"
import { Position } from "../components/Position"
import { workData } from "@/data/work"
import { DetailPosition } from "../components/DetailPosition"
import { SectionWrapper } from "../../sidewide/SectionWrapper"

export const Work = () => {
    const [displayed, setDisplayed] = useState<number>(1);

    return (
        <SectionWrapper title="Work, work, work" id="experience">
                <div className="md:pt-14 pt-4 grid md:grid-cols-2 md:gap-20">
                    <div className="md:space-y-5 flex flex-nowrap md:flex-wrap md:overflow-x-hidden overflow-x-scroll">
                        {workData.map(job => <Position key={job.id} id={job.id} mouseOn={setDisplayed}>{job.position} - {job.employer}</Position>)}
                    </div>
                    <div className="pt-5 md:pt-0">
                        {workData.map(job => {
                            if(job.id == displayed) return <DetailPosition key={job.id} data={job} />
                        })}
                    </div>
                </div>
        </SectionWrapper>
    )
}