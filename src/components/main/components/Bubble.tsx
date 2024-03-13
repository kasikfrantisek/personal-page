import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Animation = {
  translateY: string;
  translateX: string;
  transition?: { duration: number; ease?: string };
  width?: number;
  height?: number;
};

const randomNumber = (num: number) => Math.floor(Math.random() * num);

export const Bubble = () => {
  const getRandomAnimation = (dimensions: number): Animation => ({
    transition: { duration: 2, ease: 'linear' },
    translateY: `-${randomNumber(100)}%`,
    translateX: `-${randomNumber(100)}%`,
    width: dimensions,
    height: dimensions,
  });

  const [dimensions, setDimensions] = useState(300);
  const [move, setMove] = useState<Animation>(getRandomAnimation(dimensions));
  const [change, setChange] = useState(true);
  const [topLeft, setTopLeft] = useState({
    top: `${randomNumber(100)}%`,
    left: `${randomNumber(100)}%`,
  });

  useEffect(() => {
    setDimensions(randomNumber(200));
    setMove(getRandomAnimation(dimensions));
  }, [change, dimensions]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prev) => !prev);
    }, 1500);

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
        top: topLeft.top,
        left: topLeft.left,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
};
