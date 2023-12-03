import { useContext } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navlinks from './Navlinks';
import { GlobalContext } from '../../../context/GlobalContext';

// import NavPopOver from '../NavPopOver';

const StaticPopOver = dynamic(() => import('../NavPopOver'), {
  ssr: false
});

function MainNavbar({ showMobileNav }) {
  const { isLoggedIn } = useContext(GlobalContext);

  return (
    <nav className="w-full py-2 px-3 sm:px-8 lg:px-28 items-center montserrat flex justify-between text-[12px] nunito_sans">
      <section className="w-[25%]">
        <Link href="/">
          <div className="w-[80px] brand--colors italic text--colors_default montserrat text-[16px] px-2 border-[3px] text-center">
            deeco.
          </div>
        </Link>
      </section>
      <section className="hidden w-[50%] items-center justify-center">
        <Navlinks />
      </section>
      <section className="w-[25%] flex flex-row-reverse gap-4 items-center">
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
        {!isLoggedIn ? (
          <div className="hidden lg:flex gap-[30px] items-center text-base font-bold">
            <Link href="/log-in">
              <button
                type="button"
                className="inline-flex place-items-center bg-transparent text-[12px]"
              >
                Login
              </button>
            </Link>
            <Link href="service-options">
              <button
                type="button"
                className="inline-flex place-items-center bg-[#EF5DA8] text-white px-4 py-2 text-[12px]"
              >
                Start selling
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <StaticPopOver />
          </div>
        )}
      </section>
    </nav>
  );
}

export default MainNavbar;
