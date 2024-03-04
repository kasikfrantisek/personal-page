import { motion } from 'framer-motion';

import { ProjectType } from '@/types/types';

import { Tag } from './Tag';

type Props = {
  onClick: () => void;
  project: ProjectType | undefined;
};

export const ProjectModal = ({ onClick, project }: Props) => {
  return (
    <motion.div
      whileInView={{
        opacity: '100%',
        transition: { duration: 0.5 },
      }}
      className="fixed left-0 top-0 z-50 size-full bg-[#000000AA] pt-5 text-white opacity-0 backdrop-blur-xl md:p-20"
    >
      <h1 className="w-4/5 pb-10 text-3xl font-bold uppercase leading-[100%] md:w-2/3 md:text-[100px]">
        {project?.heading}
      </h1>
      <button onClick={onClick} className="absolute right-4 top-4 text-3xl">
        X
      </button>
      <div className="grid grid-cols-2 gap-12">
        <div className="text-white">
          <div className="flex w-full max-w-[50vw] items-end justify-between pb-5">
            <h1 className="text-lg font-bold uppercase">{project?.label}</h1>
            <h1 className="text-lg font-bold uppercase">{project?.type}</h1>
          </div>
          <p className="max-w-[50vw] pb-5">{project?.description}</p>
          <div className="flex gap-2">
            {project?.technologies.map((tech) => {
              return <Tag title={tech} key={tech} />;
            })}
          </div>
        </div>
        <div className="h-[60%] w-full overflow-y-scroll">
          <div className="flex size-fit flex-col flex-nowrap gap-8">
            {project?.path.map((image) => (
              <picture key={image}>
                <img
                  className="rounded-xl"
                  alt={image}
                  src={`/projects/${image}`}
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
