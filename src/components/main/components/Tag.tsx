import { motion } from 'framer-motion';

type Props = {
  title: string;
};

export const Tag = ({ title }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="cursor-default rounded-full border-[1px] border-white px-3 py-1"
    >
      <p className="text-sm font-light">{title}</p>
    </motion.div>
  );
};
