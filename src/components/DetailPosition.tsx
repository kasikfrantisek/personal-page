import { Tag } from "./Tag"
import Image from "next/image"

type Props = {
    data: {
        id: number,
        position: string,
        employer: string,
        url: string;
        duration: string,
        skills: string[],
        description: string,
    }
}

export const DetailPosition = ({data}: Props) => {
    return (
        <div className="text-white md:w-5/6">
            <h2 className="uppercase font-bold text-lg md:text-[50px]">{data.position}</h2>
            <div className="flex justify-between items-end md:pt-3">
                <a href={data.url} target="_blank">
                    <h2 className="uppercase font-bold text-md md:text-[30px] hover:underline">{data.employer}</h2>
                    </a>
                <span className="uppercase font-bold text-sm md:text-lg">{data.duration}</span>
            </div>
            <p className="pt-3">{data.description}</p>
            <div className="flex gap-2 flex-wrap pt-5 md:w-2/3">
                {data.skills.map(skill => <Tag title={skill}/>)}
            </div>
        </div>
    )
}