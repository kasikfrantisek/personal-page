import { InfiniteLooper } from "./Looper";

export const Hero = () => {
  const name = 'františek kašík - ';
  const job = 'web developer - ';
  const right: "right" = "right"
  const left: "left" = "left"

  const looperConfigs = [
    { speed: 15, direction: right, text: name },
    { speed: 20, direction: left, text: job },
    { speed: 10, direction: right, text: name },
    { speed: 15, direction: left, text: job },
  ];

  return (
    <div className="text-white w-full h-screen overflow-x-hidden flex flex-col justify-end relative">
      {looperConfigs.map((config, index) => (
        <InfiniteLooper key={index} speed={config.speed} direction={config.direction}>
          <h1 className="ml-2 md:text-[100px] text-[50px] whitespace-nowrap text-white uppercase font-bold leading-[100%]">
            {name}
          </h1>
          <h1 className="ml-2 md:text-[100px] text-[50px] whitespace-nowrap text-white uppercase font-bold leading-[100%] italic">
            {job}
          </h1>
        </InfiniteLooper>
      ))}
    </div>
  );
};
