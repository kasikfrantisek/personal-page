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
  top: randomNumber(700),
  left: randomNumber(1200),
  right: randomNumber(2000),
  bottom: randomNumber(500),
  transition: { duration: 5, ease: "linear" },
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
    }, 2000);

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
      className="absolute -z-10 bg-teal-800 rounded-full blur-2xl"
      style={{width: '200px', height: '200px', 
      top: randomNumber(1500),
      left: randomNumber(1500),
      right: randomNumber(1500),
      bottom: randomNumber(1500),
      }}
    />
  );
};
