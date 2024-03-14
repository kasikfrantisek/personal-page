import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { Form } from './Form';
import { SectionWrapper } from './SectionWrapper';

export const Contacts = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.3 1'],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  return (
    <SectionWrapper title="Hit me up!" id="contact">
      <motion.div
        ref={ref}
        style={{ opacity }}
        className="grid size-full grid-cols-2 pt-14"
      >
        <div>
          <h5 className="w-2/3 text-h5-light text-white">
            Hey you can hit me up directly on one of the contacts bellow, but if
            you prefare good old forms just fill up the one thats here.
          </h5>
          <div className="flex flex-col gap-8 pt-14 text-h5-light font-semibold uppercase text-white">
            <Link href="tel:+420607508287">+420 607 508 287</Link>
            <Link href="mailto:kasik.frantisek97@gmail.com">
              kasik.frantisek97@gmail.com
            </Link>
            <Link href="https://www.instagram.com/frantaklasik" target="blank">
              @frantaklasik
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
