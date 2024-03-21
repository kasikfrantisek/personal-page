import Link from 'next/link';

type Props = {
  path: string;
  label: string;
  onClick?: () => void;
};

export const NavItem = ({ path, label, onClick }: Props) => (
  <li>
    <Link href={path} scroll={false} onClick={onClick}>
      {label}
    </Link>
  </li>
);
