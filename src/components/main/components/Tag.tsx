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
      className="cursor-default rounded-full border-[1px] border-white px-3 py-2"
    >
      <p className="text-overline-16 leading-[15px]">{title}</p>
    </motion.div>
  );
};
