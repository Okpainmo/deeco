import React from 'react';
import StickyNavbar from './StickyNavbar';
import MainNavbar from './MainNavbar';

function NavGroup({ showMobileNav }) {
  return (
    <>
      <StickyNavbar />
      <MainNavbar showMobileNav={showMobileNav} />
    </>
  );
}

export default NavGroup;
