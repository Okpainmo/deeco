import React, { useState, useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ContractContext } from '../../context/ContractContext';
import NavGroup from './NavGroup';
import Footer from './Footer';
import MobileMenuBar from './MobileMenuBar';

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
    <>
      <Toaster />
      <main className="overflow-hidden mt-[56px] sm:mt-[70px]">
        <MobileMenuBar hideMobileNav={hideMobileNav} closeMobileNav={closeMobileNav} />

        <NavGroup showMobileNav={showMobileNav} />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default MainAppLayout;
