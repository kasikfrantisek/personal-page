import Link from 'next/link';

import { Form } from './Form';
import { SectionWrapper } from './SectionWrapper';

export const Contacts = () => {
  return (
    <SectionWrapper title="Hit me up!" id="contact">
      <div className="grid size-full pt-14 xl:grid-cols-2">
        <div>
          <h5 className="text-h5-light text-white lg:w-2/3">
            Hey you can hit me up directly on one of the contacts bellow, but if
            you prefare good old forms just fill up the one thats here.
          </h5>
          <div className="flex flex-col gap-4 pt-14 text-overline-14-medium font-semibold uppercase text-white sm:gap-8 sm:text-h5-light">
            <Link href="tel:+420607508287">+420 607 508 287</Link>
            <Link
              href="mailto:kasik.frantisek97@gmail.com"
              className="break-words"
            >
              kasik.frantisek97@gmail.com
            </Link>
            <Link href="https://www.instagram.com/frantaklasik" target="blank">
              @frantaklasik
            </Link>
          </div>
        </div>
        <div className="w-full pt-14">
          <Form />
        </div>
      </div>
    </SectionWrapper>
  );
};
