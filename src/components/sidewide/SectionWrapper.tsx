import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  id: string;
};

export const SectionWrapper = ({ title, children, id }: Props) => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden px-6 pt-5 text-white md:pl-20 md:pt-20"
      id={id}
    >
      <h1
        className="w-4/5 text-3xl font-bold uppercase leading-[100%] md:w-2/3 md:text-[100px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {children}
    </section>
  );
};
