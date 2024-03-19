import { motion } from 'framer-motion';

import data from '@/data/navigation.json';

import { NavItem } from './NavItem';

type Props = {
  onClick: () => void;
};

export const MobileNav = ({ onClick }: Props) => {
  return (
    <motion.ul
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}
      className="absolute left-0 top-[85px] h-screen w-screen gap-5 space-y-5 bg-black pl-6 pt-10 text-h5-light"
    >
      {data.nav.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5, delay: 0.5 + 0.1 * index },
          }}
        >
          <NavItem label={item.label} path={item.path} onClick={onClick} />
        </motion.div>
      ))}
    </motion.ul>
  );
};
