import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className='bg-white'>
    <Header />
    <main className="mx-auto  ">{children}</main>
    <Footer />
  </div>
);

export default Layout;