import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import data from '@/data/projects.json';

import { SectionWrapper } from '../../sidewide/SectionWrapper';
import { Position } from '../components/Position';
import { Project } from '../components/Project';

export const Projects = () => {
  const [displayed, setDisplayed] = useState<number>(1);

  return (
    <SectionWrapper title="I did this for them..." id="projects">
      <div className="grid pt-4 md:gap-20 md:pt-14 xl:grid-cols-6">
        <div className="flex flex-col gap-y-2 overflow-x-scroll md:flex-wrap md:space-y-5 md:overflow-x-hidden xl:col-span-2">
          {data.map((project) => (
            <Position key={project.id} id={project.id} mouseOn={setDisplayed}>
              {project.label}
            </Position>
          ))}
        </div>
        <div className="relative h-fit pt-5 md:pt-0 xl:col-span-4">
          <AnimatePresence>
            {data.map((job) => {
              if (job.id == displayed)
                return <Project key={job.id} data={job} />;
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};
