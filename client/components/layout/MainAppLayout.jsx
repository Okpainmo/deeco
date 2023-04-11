import React, { useState, useContext, useEffect } from 'react';
import NavGroup from './NavGroup';
import Footer from './Footer';
import MobileMenuBar from './MobileMenuBar';
import { ContractContext } from '../../context/ContractContext';

function MainAppLayout({ children }) {
  const [closeMobileNav, setCloseMobileNav] = useState(true);
  const { checkMetamaskAccount } = useContext(ContractContext);

  useEffect(() => {
    checkMetamaskAccount();
  }, [checkMetamaskAccount]);

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
