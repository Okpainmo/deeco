import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import MobileNavbar from './MobileNavbar';

import Logo from '../../../assets/images/logo.png';

const DynamicThemeSwitcher = dynamic(() => import('../../ThemeSwitcher'), {
  ssr: false
});

function Navbar() {
  const [closeMobileNav, setCloseMobileNav] = useState(false);

  const handlerMobileNav = () => setCloseMobileNav((value) => !value);

  return (
    <nav className="p-4 bg-white dark:bg-[#0f172a] transition-all">
      <div className="flex justify-between items-center w-full lg:w-[80%] mx-auto">
        <div className="inline-flex items-center gap-6">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <button
            type="button"
            className="hidden lg:inline-flex place-items-center text-lg text-white font-bold bg-[#EB4899] h-[2.7rem] p-5"
          >
            Connect wallet
          </button>
        </div>

        <div className="inline-flex items-center gap-6">
          <div className="hidden lg:inline-flex items-center gap-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.5C9.06087 0.5 10.0783 0.921427 10.8284 1.67157C11.5786 2.42172 12 3.43913 12 4.5C12 5.56087 11.5786 6.57828 10.8284 7.32843C10.0783 8.07857 9.06087 8.5 8 8.5C6.93913 8.5 5.92172 8.07857 5.17157 7.32843C4.42143 6.57828 4 5.56087 4 4.5C4 3.43913 4.42143 2.42172 5.17157 1.67157C5.92172 0.921427 6.93913 0.5 8 0.5ZM8 10.5C12.42 10.5 16 12.29 16 14.5V16.5H0V14.5C0 12.29 3.58 10.5 8 10.5ZM18 8.5V3.5H20V9.5H18M18 13.5V11.5H20V13.5H18Z"
                  fill="black"
                  className="dark:fill-white"
                />
              </svg>
              <span className="text-base"> Profile </span>
            </Link>
            <Link href="/" className="inline-flex items-center gap-3">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.028 14.73C9.24933 14.73 9.436 14.654 9.588 14.502C9.73933 14.3487 9.815 14.162 9.815 13.942C9.815 13.7207 9.73867 13.534 9.586 13.382C9.43333 13.23 9.24667 13.154 9.026 13.154C8.80467 13.154 8.618 13.2303 8.466 13.383C8.314 13.5357 8.238 13.7223 8.238 13.943C8.238 14.1643 8.31467 14.351 8.468 14.503C8.62 14.655 8.80667 14.731 9.028 14.731V14.73ZM8.512 11.42H9.477C9.50233 10.9847 9.584 10.6313 9.722 10.36C9.86 10.088 10.1437 9.74133 10.573 9.32C11.0197 8.87333 11.3517 8.47333 11.569 8.12C11.787 7.76667 11.896 7.358 11.896 6.894C11.896 6.106 11.6193 5.478 11.066 5.01C10.512 4.542 9.85667 4.308 9.1 4.308C8.38067 4.308 7.77 4.50333 7.268 4.894C6.766 5.28533 6.39833 5.73467 6.165 6.242L7.085 6.623C7.245 6.259 7.474 5.93733 7.772 5.658C8.07 5.378 8.5 5.238 9.062 5.238C9.71067 5.238 10.184 5.416 10.482 5.772C10.7813 6.128 10.931 6.51933 10.931 6.946C10.931 7.29267 10.8373 7.602 10.65 7.874C10.4633 8.14667 10.22 8.42067 9.92 8.696C9.34 9.23067 8.96 9.684 8.78 10.056C8.60133 10.4273 8.512 10.8817 8.512 11.419V11.42ZM9.003 18.5C7.759 18.5 6.589 18.264 5.493 17.792C4.39767 17.3193 3.44467 16.678 2.634 15.868C1.82333 15.0587 1.18167 14.1067 0.709 13.012C0.236333 11.9173 0 10.7477 0 9.503C0 8.259 0.236 7.089 0.708 5.993C1.18067 4.89767 1.822 3.94467 2.632 3.134C3.44133 2.32333 4.39333 1.68167 5.488 1.209C6.58267 0.736333 7.75233 0.5 8.997 0.5C10.241 0.5 11.411 0.736 12.507 1.208C13.6023 1.68067 14.5553 2.322 15.366 3.132C16.1767 3.94133 16.8183 4.89333 17.291 5.988C17.7637 7.08267 18 8.25233 18 9.497C18 10.741 17.764 11.911 17.292 13.007C16.8193 14.1023 16.178 15.0553 15.368 15.866C14.5587 16.6767 13.6067 17.3183 12.512 17.791C11.4173 18.2637 10.2477 18.5 9.003 18.5ZM9 17.5C11.2333 17.5 13.125 16.725 14.675 15.175C16.225 13.625 17 11.7333 17 9.5C17 7.26667 16.225 5.375 14.675 3.825C13.125 2.275 11.2333 1.5 9 1.5C6.76667 1.5 4.875 2.275 3.325 3.825C1.775 5.375 1 7.26667 1 9.5C1 11.7333 1.775 13.625 3.325 15.175C4.875 16.725 6.76667 17.5 9 17.5Z"
                  fill="black"
                  className="dark:fill-white"
                />
              </svg>

              <span className="text-base"> Help </span>
            </Link>
          </div>

          <div className="inline-block lg:hidden">
            <button
              onClick={handlerMobileNav}
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
          </div>
          <DynamicThemeSwitcher />
        </div>
      </div>

      <MobileNavbar isOpen={closeMobileNav} />
    </nav>
  );
}

export default Navbar;
