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
      className="bg--glass w-full py-2 px-3 sm:px-6 xl:px-16 md:py-4 flex justify-between
    z-30 items-center montserrat"
    >
      <Link href="/">
        <div className="brand--colors italic text--colors_default montserrat text-[16px] px-2 border-[3px] text-center">
          deeco.
        </div>
      </Link>
      <Navlinks />
      <div className="hidden lg:inline-flex items-center text-base font-blod">
        <button
          type="button"
          className="inline-flex place-items-center h-[2.3rem] bg-transparent text-[#000000] p-[10px]"
        >
          Login
        </button>
        <button
          type="button"
          className="inline-flex place-items-center h-[2.3rem] bg-[#EF5DA8] text-white p-[10px]"
        >
          Start selling
        </button>
      </div>
      <aside className="flex lg:hidden gap-4 lg:gap-0 items-center">
        {/* <DynamicThemeSwitcher /> */}
        <button
          onClick={showMobileNav}
          type="button"
          className="rounded-full w-[35px] 
          h-[35px] p-[7px] lg:w-[40px] lg:h-[40px] border"
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
