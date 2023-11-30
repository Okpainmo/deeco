import React from 'react';
import Link from 'next/link';

function Navlinks() {
  return (
    <section className="hidden lg:flex justify-center font-bold gap-6 text-[11px] text--colors_default items-center">
      <Link href="/">
        {/* <div className="flex gap-2 items-center">
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

        </div> */}
        <div className="text-center">How its Work</div>
      </Link>
      <Link href="/">
        <div className="text-center">Pricing</div>
      </Link>
      <Link href="/">
        <div className="text-center">Features</div>
      </Link>
      <Link href="/">
        <div className="text-center">Create Store</div>
      </Link>
      <Link href="/">
        <div className="text-center">Buy Theme</div>
      </Link>
    </section>
  );
}

export default Navlinks;
