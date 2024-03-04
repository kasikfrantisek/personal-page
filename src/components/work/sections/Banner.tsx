export const Banner = () => {
  return (
    <section className="h-[400px] w-screen">
      <picture className="size-full">
        <img
          className="size-full object-cover"
          style={{
            objectPosition: '0 -250px',
          }}
          src="/mockup3.png"
          alt="banner"
        />
      </picture>
    </section>
  );
};
