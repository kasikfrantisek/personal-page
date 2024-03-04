import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  path: string;
  label: string;
  onClick: () => void;
};

export const Project = ({ path, label, onClick }: Props) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      onClick={() => setShowImage((prev) => !prev)}
    >
      <motion.picture
        variants={{
          hidden: { opacity: 0, transition: { duration: 0.7 } },
          visible: { opacity: 1, transition: { duration: 0.7 } },
        }}
        initial="hidden"
        animate={showImage ? 'visible' : 'hidden'}
      >
        <img
          className="size-[300px] rounded-full object-cover  object-center"
          src={`/projects/${path}`}
        />
      </motion.picture>
      <motion.div
        variants={{
          visible: {
            backgroundColor: '#134e4ab3',
            transition: { duration: 0.3 },
          },
          hidden: {
            backgroundColor: '#00000000',
            transition: { duration: 0.3 },
          },
        }}
        initial="hidden"
        animate={showImage ? 'visible' : 'hidden'}
        onClick={onClick}
        className="absolute left-[-1px] top-1/2 flex size-[303px] -translate-y-1/2 items-center justify-center rounded-full hover:cursor-pointer"
      >
        <h2 className="text-3xl font-bold uppercase leading-[100%] text-white">
          {label}
        </h2>
      </motion.div>
    </div>
  );
};
