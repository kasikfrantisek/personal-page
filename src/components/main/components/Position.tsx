import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  id: number;
  mouseOn: (number: number) => void;
};

export const Position = ({ children, id, mouseOn }: Props) => {
  const [hover, setHover] = useState(false);

  const setId = (id: number) => {
    mouseOn(id);
    setHover((prev) => !prev);
  };

  return (
    <div className="w-fit">
      <h3
        onMouseEnter={() => setId(id)}
        onMouseLeave={() => setHover((prev) => !prev)}
        className="cursor-pointer pr-2 text-overline-16 md:text-h4-light"
      >
        {children}
      </h3>
      <motion.span
        variants={{
          initial: { width: 0, transition: { duration: 0.5, delay: 0.5 } },
          load: { width: '100%', transition: { duration: 0.5 } },
        }}
        animate={hover ? 'load' : 'initial'}
        className="h-[2px] bg-gradient-to-r from-teal-700 to-transparent"
      />
    </div>
  );
};
