import { motion } from 'framer-motion';

import { LinkIcon } from './LinkIcon';
import { Tag } from './Tag';

type Props = {
  data: {
    id: number;
    label: string;
    link: string;
    technologies: string[];
    heading: string;
    description: string;
  };
};

export const Project = ({ data }: Props) => {
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
      <h2 className="text-h4 uppercase md:text-h3">{data.heading}</h2>
      <div className="flex items-end justify-between md:pt-3">
        <a
          href={data.link}
          target="_blank"
          className="relative flex items-center gap-1"
        >
          <h2 className="text-overline-16 hover:underline md:text-h5">
            {data.label}
          </h2>
          <span className="absolute -right-6 -top-2">
            <LinkIcon />
          </span>
        </a>
      </div>
      <p className="pt-3 text-p-small">{data.description}</p>
      <div className="flex w-full flex-wrap gap-2 pt-5">
        {data.technologies.map((technology) => (
          <Tag key={technology} title={technology} />
        ))}
      </div>
    </motion.div>
  );
};
