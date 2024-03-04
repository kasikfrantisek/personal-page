import { useState } from 'react';

import data from '@/data/projects.json';
import { ProjectType } from '@/types/types';

import { SectionWrapper } from '../../sidewide/SectionWrapper';
import { Project } from '../components/Project';
import { ProjectModal } from '../components/ProjectModal';

export const Projects = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [project, setProject] = useState<ProjectType>();

  const handleOnClick = (item: ProjectType) => {
    setDisplayModal(true);
    setProject(item);
  };

  return (
    <SectionWrapper title="I did this for them" id="projects">
      <div className="relative grid h-fit w-full grid-cols-3 items-center justify-items-center gap-10">
        {data.map((item) => {
          return (
            <Project
              key={item.id}
              label={item.label}
              path={item.path[0]}
              onClick={() => handleOnClick(item)}
            />
          );
        })}
      </div>
      {displayModal && (
        <ProjectModal
          project={project}
          onClick={() => setDisplayModal(false)}
        />
      )}
    </SectionWrapper>
  );
};
