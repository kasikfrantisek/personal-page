import { ReactNode } from 'react';

import { Contacts } from './Contact';
import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="scroll-smooth">
      <Header />
      {children}
      <Contacts />
    </main>
  );
};
