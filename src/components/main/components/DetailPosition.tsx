import { Tag } from './Tag';

type Props = {
  data: {
    id: number;
    position: string;
    employer: string;
    url: string;
    duration: string;
    skills: string[];
    description: string;
  };
};

export const DetailPosition = ({ data }: Props) => {
  return (
    <div className="text-white md:w-5/6">
      <h2 className="text-lg font-bold uppercase md:text-[50px]">
        {data.position}
      </h2>
      <div className="flex items-end justify-between md:pt-3">
        <a href={data.url} target="_blank">
          <h2 className="text-base font-bold uppercase hover:underline md:text-[30px]">
            {data.employer}
          </h2>
        </a>
        <span className="text-sm font-bold uppercase md:text-lg">
          {data.duration}
        </span>
      </div>
      <p className="pt-3">{data.description}</p>
      <div className="flex flex-wrap gap-2 pt-5 md:w-2/3">
        {data.skills.map((skill) => (
          <Tag key={skill} title={skill} />
        ))}
      </div>
    </div>
  );
};
