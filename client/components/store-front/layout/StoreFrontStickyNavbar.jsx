import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CartContext } from '../../../context/CartContext';
import { ContractContext } from '../../../context/ContractContext';
import { GlobalContext } from '../../../context/GlobalContext';
// import Link from 'next/link';

function StickyNavbar() {
  const { dbCart } = useContext(CartContext);
  const { connect, connectionStatus } = useContext(ContractContext);

  // async function getUserWalletAddress() {
  //   const userWalletAddress = await window.ethereum.request({ method: 'eth_accounts' });
  //   return userWalletAddress;
  // }

  // console.log(dbCart);

  const { isLoggedIn } = useContext(GlobalContext);
  console.log(isLoggedIn);
  const router = useRouter();

  const selectUserAction = () => {
    if (isLoggedIn) {
      router.push('/create-store');
    } else {
      router.push('/log-in');
    }
  };

  return (
    <nav className="bg--blue text--colors_default-invert fixed top-0 left-0 right-0 z-20 h-[50px] flex justify-between items-center px-3 sm:px-8 lg:px-28">
      <section className="sticky-nav-left flex items-center">
        {/* <Link href="/">
          <div className="brand--colors_invert italic text--colors_default montserrat text-[16px] px-2 border-[3px] text-center">
            deeco.
          </div>
        </Link> */}
        <button
          onClick={connect}
          type="button"
          className="btn--colors_regular font-bold montserrat rounded py-2 px-4 sm:py-2 min-w-[130px] sm:min-w-[170px] text-[10px] md:text-[12px]"
        >
          {connectionStatus ? (
            <div className="flex items-center gap-2 justify-center">
              <span>wallet connected</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 gain-alert-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          ) : (
            'connect wallet'
          )}
        </button>
        <div className="search-icon pl-3 sm:pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>
      <section className="sticky-nav-right flex items-center gap-4">
        <button type="button" onClick={selectUserAction}>
          <div className="underline text--colors_default-invert text-[12px] font-bold poppins">
            create a store
          </div>
        </button>
        <Link href="/cart" className="cart relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="cart-counter text-[13px] top-[-10px] left-[18px] font-bold cart-counter-bg w-[25px] h-[25px] rounded-full text--colors_default-invert absolute text-center pt-[3px]">
            {dbCart.length}
          </div>
        </Link>
      </section>
    </nav>
  );
}

export default StickyNavbar;
