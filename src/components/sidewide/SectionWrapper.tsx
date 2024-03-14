import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  id: string;
};

export const SectionWrapper = ({ title, children, id }: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.3 1'],
  });

  const headerSlide = useTransform(scrollYProgress, [0.2, 0.6], [-200, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full items-center justify-center px-6 pt-5 text-white md:pl-20 md:pt-20"
      id={id}
    >
      <motion.h2
        style={{ translateY: headerSlide, opacity: headerOpacity }}
        className="w-4/5 text-h1 md:w-2/3"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {children}
    </section>
  );
};
