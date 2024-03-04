import { useState } from 'react';

import { workData } from '@/data/work';

import { SectionWrapper } from '../../sidewide/SectionWrapper';
import { DetailPosition } from '../components/DetailPosition';
import { Position } from '../components/Position';

export const Work = () => {
  const [displayed, setDisplayed] = useState<number>(1);

  return (
    <SectionWrapper title="Work, work, work" id="experience">
      <div className="grid pt-4 md:grid-cols-2 md:gap-20 md:pt-14">
        <div className="flex flex-nowrap overflow-x-scroll md:flex-wrap md:space-y-5 md:overflow-x-hidden">
          {workData.map((job) => (
            <Position key={job.id} id={job.id} mouseOn={setDisplayed}>
              {job.position} - {job.employer}
            </Position>
          ))}
        </div>
        <div className="pt-5 md:pt-0">
          {workData.map((job) => {
            if (job.id == displayed)
              return <DetailPosition key={job.id} data={job} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
