import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed z-20 w-screen bg-black">
      <nav className="flex items-center justify-between bg-black px-6 py-5 text-white">
        <Link href="/">
          <p className="text-3xl font-bold uppercase">FK</p>
        </Link>
        <ul className="flex gap-5 text-sm font-semibold uppercase">
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
