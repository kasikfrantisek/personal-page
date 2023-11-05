import { InfiniteLooper } from "./Looper";

export const Hero = () => {
  const name = 'františek kašík - ';
  const job = 'web developer - ';
  const right: "right" = "right"
  const left: "left" = "left"

  const looperConfigs = [
    { speed: 25, direction: right, text: name },
    { speed: 30, direction: left, text: job },
  ];

  return (
    <div className="text-white w-full h-screen overflow-x-hidden flex flex-col sm:justify-end justify-center relative">
      {looperConfigs.map((config, index) => (
        <InfiniteLooper key={index} speed={config.speed} direction={config.direction}>
          <h1 className="ml-2 md:text-[200px] text-[100px] whitespace-nowrap text-white uppercase font-bold leading-[100%]">
            {name}
          </h1>
          <h1 className="ml-2 md:text-[200px] text-[100px] whitespace-nowrap text-white uppercase font-bold leading-[100%] italic">
            {job}
          </h1>
        </InfiniteLooper>
      ))}
    </div>
  );
};
