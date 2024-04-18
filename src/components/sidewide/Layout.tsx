import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import { Contacts } from './Contact';
import { Header } from './nav/Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="scroll-smooth">
      <Analytics />
      <Header />
      {children}
      <Contacts />
    </main>
  );
};
