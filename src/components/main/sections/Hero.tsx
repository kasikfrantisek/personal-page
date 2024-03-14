import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const name = 'František Kašík';
  const job = 'Web Developer';

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.5 1.2', '1.5 1.2'],
  });

  const nameSlide = useSpring(
    useTransform(scrollYProgress, [0.7, 1], [0, 1800]),
  );

  const positionSlide = useSpring(
    useTransform(scrollYProgress, [0.7, 1], [0, -1600]),
  );

  return (
    <motion.div
      ref={ref}
      className="relative flex h-screen w-full flex-col justify-center overflow-hidden text-white sm:justify-center"
    >
      <motion.h1
        style={{ translateX: nameSlide }}
        className="ml-2 whitespace-nowrap text-h0"
      >
        {name}
      </motion.h1>
      <motion.h1
        style={{ translateX: positionSlide }}
        className="ml-2 whitespace-nowrap text-h0-light"
      >
        {job}
      </motion.h1>
    </motion.div>
  );
};
