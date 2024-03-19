import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { useWindowSize } from '@/hooks/useWindowSize';

export const Hero = () => {
  const name = 'František Kašík';
  const job = 'Web Developer';

  const ref = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.5 1.2', '1.5 1.2'],
  });

  const nameSlide = useSpring(
    useTransform(scrollYProgress, [0.7, 1], width > 450 ? [0, 1800] : [0, 350]),
  );

  const positionSlide = useSpring(
    useTransform(
      scrollYProgress,
      [0.7, 1],
      width > 450 ? [0, -1600] : [0, -350],
    ),
  );

  return (
    <motion.div
      ref={ref}
      className="relative flex h-screen w-full flex-col justify-center overflow-hidden text-white sm:justify-center"
    >
      <div className="mx-auto w-screen max-w-[1440px] overflow-visible pl-6 md:pl-20">
        <motion.h1
          style={{ translateX: nameSlide }}
          className="whitespace-nowrap text-h1-mobile sm:text-h0-mobile xl:text-h0"
        >
          {name}
        </motion.h1>
        <motion.h1
          style={{ translateX: positionSlide }}
          className="whitespace-nowrap text-h1-light-mobile sm:text-h0-light-mobile xl:text-h0-light"
        >
          {job}
        </motion.h1>
      </div>
    </motion.div>
  );
};
