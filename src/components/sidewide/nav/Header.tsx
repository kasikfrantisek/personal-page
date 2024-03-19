import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import data from '@/data/navigation.json';

import { MobileNav } from './MobileNav';
import { NavItem } from './NavItem';

export const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <header className="fixed z-20 w-screen bg-black/20 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 text-white lg:px-20">
        <Link href="/">
          <p className="text-h3-light">fk</p>
        </Link>
        <button
          className="block sm:hidden"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? 'Close' : 'Menu'}
        </button>
        <ul className="hidden gap-5 text-overline-16 sm:flex">
          {data.nav.map((item) => (
            <NavItem key={item.label} label={item.label} path={item.path} />
          ))}
        </ul>
        <AnimatePresence>
          {openMobile && (
            <MobileNav onClick={() => setOpenMobile(!openMobile)} />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
