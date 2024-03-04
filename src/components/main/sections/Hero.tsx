import { InfiniteLooper } from '../components/Looper';

export const Hero = () => {
  const name = 'františek kašík -';
  const job = 'web developer -';
  const right = 'right';
  const left = 'left';

  const looperConfigs = [
    { speed: 25, direction: right, text: name },
    { speed: 30, direction: left, text: job },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col justify-center overflow-x-hidden text-white sm:justify-end">
      {looperConfigs.map((config, index) => (
        <InfiniteLooper
          key={index}
          speed={config.speed}
          direction={config.direction}
        >
          <h1 className="ml-2 whitespace-nowrap text-[100px] font-bold uppercase leading-[100%] text-white md:text-[200px]">
            {name}
          </h1>
          <h1 className="ml-2 whitespace-nowrap text-[100px] font-bold uppercase leading-[100%] text-white md:text-[200px]">
            {job}
          </h1>
        </InfiniteLooper>
      ))}
    </div>
  );
};
