import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Animation = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  transition?: { duration: number , ease?: string};
  width?: number;
  height?: number;
};

const randomNumber = (num: number) => Math.floor(Math.random() * num);

const getRandomAnimation = (dimensions: number): Animation => ({
  top: randomNumber(1000),
  left: randomNumber(1000),
  right: randomNumber(1000),
  bottom: randomNumber(1000),
  transition: { duration: 10, ease: "linear" },
  width: dimensions,
  height: dimensions,
});

export const Bubble = () => {
  const [dimensions, setDimensions] = useState((300));
  const [move, setMove] = useState<Animation>(getRandomAnimation(dimensions));
  const [change, setChange] = useState(true);

  useEffect(() => {
    setDimensions(randomNumber(300));
    setMove(getRandomAnimation(dimensions));
  }, [change]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      variants={{
        move: move,
      }}
      animate={"move"}
      className="absolute bg-teal-800 -z-10 rounded-full blur-2xl"
      style={{width: '200px', height: '200px', top: randomNumber(1000),
      left: randomNumber(1000),
      right: randomNumber(1000),
      bottom: randomNumber(1000),}}
    />
  );
};
