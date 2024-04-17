import { motion } from 'framer-motion';

import { LinkIcon } from './LinkIcon';
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
    <motion.div
      variants={{
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: {
          opacity: 0,
          transition: { duration: 0.5 },
          position: 'absolute',
          top: 0,
        },
      }}
      animate="visible"
      initial="initial"
      exit="exit"
      className="text-white"
    >
      <h2 className="text-h4 uppercase md:text-h3">{data.position}</h2>
      <div className="flex items-end justify-between md:pt-3">
        <a href={data.url} target="_blank" className="relative">
          <h2 className="text-overline-16 hover:underline md:text-h5">
            {data.employer}
          </h2>
          <span className="absolute -right-6 -top-2">
            <LinkIcon />
          </span>
        </a>
        <span className="text-overline-16 md:text-h5">{data.duration}</span>
      </div>
      <p className="pt-3 text-p-small">{data.description}</p>
      <div className="flex flex-wrap gap-2 pt-5">
        {data.skills.map((skill) => (
          <Tag key={skill} title={skill} />
        ))}
      </div>
    </motion.div>
  );
};
