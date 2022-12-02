import React, { useState } from 'react';
import NavGroup from './NavGroup';
import Footer from './Footer';
import MobileMenuBar from './MobileMenuBar';

function MainAppLayout({ children }) {
  const [closeMobileNav, setCloseMobileNav] = useState(true);

  function hideMobileNav() {
    setCloseMobileNav(true);
  }

  function showMobileNav() {
    setCloseMobileNav(false);
  }

  //  console.log(closeMobileNav);
  return (
    <main className="overflow-hidden">
      <MobileMenuBar hideMobileNav={hideMobileNav} closeMobileNav={closeMobileNav} />

      <NavGroup showMobileNav={showMobileNav} />
      {children}
      <Footer />
    </main>
  );
}

export default MainAppLayout;
