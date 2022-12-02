import React from 'react';
import Link from 'next/link';

function Navlinks() {
  return (
    <section className="hidden lg:flex ml-20 font-bold mr-auto gap-6 text-[11px] text--colors_default items-center">
      <Link href="/all-products">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>

          <div className="text-center">All products</div>
        </div>
      </Link>
      <Link href="/coins-watchlist">
        <div className="text-center">Today's deals</div>
      </Link>
      <Link href="/trending-coins-watchlist">
        <div className="text-center">Electronics</div>
      </Link>
      <Link href="/blog">
        <div className="text-center">Accessories</div>
      </Link>
      <Link href="/policy">
        <div className="text-center">Deeco fashion</div>
      </Link>
      <Link href="/about">
        <div className="text-center">Home and kitchen</div>
      </Link>
    </section>
  );
}

export default Navlinks;
