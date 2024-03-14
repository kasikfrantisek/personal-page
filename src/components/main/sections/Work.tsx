import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { workData } from '@/data/work';

import { SectionWrapper } from '../../sidewide/SectionWrapper';
import { DetailPosition } from '../components/DetailPosition';
import { Position } from '../components/Position';

export const Work = () => {
  const [displayed, setDisplayed] = useState<number>(1);

  return (
    <SectionWrapper title="Work, work, work" id="experience">
      <div className="grid pt-4 md:gap-20 md:pt-14 lg:grid-cols-2">
        <div className="flex flex-col gap-y-2 overflow-x-scroll md:flex-wrap md:space-y-5 md:overflow-x-hidden">
          {workData.map((job) => (
            <Position key={job.id} id={job.id} mouseOn={setDisplayed}>
              {job.position} - {job.employer}
            </Position>
          ))}
        </div>
        <div className="relative h-fit pt-5 md:pt-0">
          <AnimatePresence>
            {workData.map((job) => {
              if (job.id == displayed)
                return <DetailPosition key={job.id} data={job} />;
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};
