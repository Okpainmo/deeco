import React from 'react';
import MainNavbar from './MainNavbar';
import AppStickyNavbar from './AppStickyNavbar';

function NavGroup({ showMobileNav }) {
  return (
    <>
      <AppStickyNavbar />
      <MainNavbar showMobileNav={showMobileNav} />
    </>
  );
}

export default NavGroup;
