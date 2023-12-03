import React from 'react';
import MainNavbar from './MainNavbar';
import StoreFrontStickyNavbar from './StoreFrontStickyNavbar';

function NavGroup({ showMobileNav }) {
  return (
    <>
      <StoreFrontStickyNavbar />
      <MainNavbar showMobileNav={showMobileNav} />
    </>
  );
}

export default NavGroup;
