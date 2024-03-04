import Link from 'next/link';

import { Form } from './Form';
import { SectionWrapper } from './SectionWrapper';

export const Contacts = () => {
  return (
    <SectionWrapper title="Hit me up!" id="contact">
      <div className="grid size-full grid-cols-2 pt-14">
        <div>
          <h5 className="w-2/3 text-3xl text-white">
            Hey you cen hit me up directly on one of the contacts bellow, but if
            you prefare good old forms just fill up the one on the right.
          </h5>
          <div className="flex flex-col gap-8 pt-14 text-3xl font-semibold uppercase text-white">
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
      </div>
    </SectionWrapper>
  );
};
