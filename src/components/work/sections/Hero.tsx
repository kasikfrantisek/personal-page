type Props = {
  title: string;
};

export const Hero = ({ title }: Props) => {
  return (
    <section className="relative flex h-[50vh] w-screen items-end overflow-hidden px-6 pt-5 text-white md:pl-20 md:pt-20">
      <h1 className="relative w-4/5 pb-20 text-3xl font-bold uppercase leading-[100%] md:w-2/3 md:text-[100px]">
        {title}
        <span className="absolute left-[-20px] top-[-225px] -z-50 max-w-[100vw] text-3xl font-bold uppercase leading-[82%] opacity-15 md:text-[400px]">
          {title}
        </span>
      </h1>
    </section>
  );
};
