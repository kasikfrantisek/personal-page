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
    description?: string;
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
        <a
          href={data.url}
          target="_blank"
          className="relative text-overline-16 hover:underline md:text-h5"
        >
          <p>{data.employer}</p>
          <span className="absolute -right-6 -top-2">
            <LinkIcon />
          </span>
        </a>
        <p>{data.duration}</p>
      </div>
      {data.description && (
        <p className="pt-3 text-p-small">{data.description}</p>
      )}
      <div className="flex flex-wrap gap-2 pt-5">
        {data.skills.map((skill) => (
          <Tag key={skill} title={skill} />
        ))}
      </div>
    </motion.div>
  );
};
