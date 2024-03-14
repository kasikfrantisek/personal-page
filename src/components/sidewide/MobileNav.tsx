import Link from 'next/link';

export const MobileNav = () => {
  return (
    <ul className="absolute left-0 top-[85px] h-screen w-screen gap-5 bg-black text-overline-16">
      <li>
        <Link href="#about" scroll={false}>
          About
        </Link>
      </li>
      <li>
        <Link href="#experience" scroll={false}>
          Experience
        </Link>
      </li>
      <li>
        <Link href="#projects" scroll={false}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="#contact" scroll={false}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
