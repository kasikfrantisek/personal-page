import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Animation = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  transition?: { duration: number; ease?: string };
  width?: number;
  height?: number;
};

const randomNumber = (num: number) => Math.floor(Math.random() * num);

export const Bubble = () => {
  const [windowWidth, setWindowWidth] = useState<number>(500);

  const getRandomAnimation = (dimensions: number): Animation => ({
    top: randomNumber(700),
    left: randomNumber(windowWidth),
    right: randomNumber(windowWidth),
    bottom: randomNumber(500),
    transition: { duration: 5, ease: 'linear' },
    width: dimensions,
    height: dimensions,
  });

  const [dimensions, setDimensions] = useState(300);
  const [move, setMove] = useState<Animation>(getRandomAnimation(dimensions));
  const [change, setChange] = useState(true);

  useEffect(() => {
    setDimensions(randomNumber(200));
    setMove(getRandomAnimation(dimensions));
  }, [change, dimensions]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(() => window.innerWidth);
    }
    const interval = setInterval(() => {
      setChange((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.span
      variants={{
        move: move,
      }}
      animate={'move'}
      className="fixed -z-10 rounded-full bg-teal-800 blur-2xl"
      style={{
        width: '200px',
        height: '200px',
        top: randomNumber(1500),
        left: randomNumber(1500),
        right: randomNumber(1500),
        bottom: randomNumber(1500),
      }}
    />
  );
};
