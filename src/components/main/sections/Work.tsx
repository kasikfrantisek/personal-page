import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';

import { workData } from '@/data/work';

import { SectionWrapper } from '../../sidewide/SectionWrapper';
import { DetailPosition } from '../components/DetailPosition';
import { Position } from '../components/Position';

export const Work = () => {
  const [displayed, setDisplayed] = useState<number>(1);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.3 1'],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <SectionWrapper title="Work, work, work" id="experience">
      <motion.div
        style={{ opacity }}
        ref={ref}
        className="grid pt-4 md:grid-cols-2 md:gap-20 md:pt-14"
      >
        <div className="flex flex-col overflow-x-scroll md:flex-wrap md:space-y-5 md:overflow-x-hidden">
          {workData.map((job) => (
            <Position key={job.id} id={job.id} mouseOn={setDisplayed}>
              {job.position} - {job.employer}
            </Position>
          ))}
        </div>
        <div className="relative pt-5 md:pt-0">
          <AnimatePresence>
            {workData.map((job) => {
              if (job.id == displayed)
                return <DetailPosition key={job.id} data={job} />;
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
