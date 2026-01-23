import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bee-dark relative">
      {/* Global background structure layer (no impact on 3D model/canvas) */}
      <div aria-hidden="true" className="honeymaze-bg" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
