import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

import { useWindowSize } from '@/hooks/useWindowSize';

type Props = {
  title: string;
  children: ReactNode;
  id: string;
};

export const SectionWrapper = ({ title, children, id }: Props) => {
  const { width } = useWindowSize();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.3 1'],
  });

  const notPhone = width > 550;

  const headerSlide = useTransform(
    scrollYProgress,
    notPhone ? [0.2, 0.6] : [0, 0.3],
    notPhone ? [-200, 0] : [-70, 0],
  );
  const headerOpacity = useTransform(
    scrollYProgress,
    notPhone ? [0.2, 0.6] : [0, 0.3],
    [0, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    notPhone ? [0.5, 0.7] : [0, 0.3],
    [0, 1],
  );

  return (
    <section
      ref={ref}
      className="relative mx-auto flex h-fit w-full max-w-[1440px] flex-col justify-center px-6 py-10 text-white md:pt-[90px] lg:py-[150px] lg:pl-20"
      id={id}
    >
      <motion.h2
        style={{ translateY: headerSlide, opacity: headerOpacity }}
        className="text-h1-mobile md:w-2/3 md:text-h1"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <motion.div style={{ opacity }}>{children}</motion.div>
    </section>
  );
};
