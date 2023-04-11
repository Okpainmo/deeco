import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navlinks from './Navlinks';
// import Navlinks from './Navlinks';
// import UserAuthLinks from '../UserAuthLinks';

const DynamicThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false
});

function MainNavbar({ showMobileNav }) {
  return (
    <nav
      className="bg--glass w-full py-2 px-3 sm:px-8 lg:px-20 md:py-4 flex justify-between
    z-30 items-center montserrat mt-[50px] "
      style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
    >
      <Link href="/">
        <div className="brand--colors italic text--colors_default montserrat text-[16px] px-2 border-[3px] text-center">
          deeco.
        </div>
      </Link>
      <Navlinks />
      <aside className="flex gap-4 lg:gap-0 items-center">
        <DynamicThemeSwitcher />
        <button
          onClick={showMobileNav}
          type="button"
          className="menu-button rounded-full w-[35px] 
          h-[35px] p-[7px] lg:w-[40px] lg:h-[40px] border lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-three-dots-vertical w-[20px] h-[20px] 
            lg:h-[25px] lg:w-[25px]"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
        {/* <div className="user-auth hidden lg:flex lg:items-center">
          <UserAuthLinks />
        </div> */}
      </aside>
    </nav>
  );
}

export default MainNavbar;
