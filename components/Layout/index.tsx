/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import { ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved
import Header from '../Header';
// eslint-disable-next-line import/no-unresolved
import Footer from '../Footer';

interface LayoutProps{
    children : ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
