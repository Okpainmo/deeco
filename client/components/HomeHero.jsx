import React from 'react';
import Link from 'next/link';

function HomeHero() {
  return (
    <section className="landing-page_hero-section h-[500px] w-full flex items-center">
      <div className="bg--trans text--colors_secondary w-full min-h-[400px] sm:w-[90%] mx-auto bg--glass p-4 flex justify-center flex-col text-center">
        <h1 className="text-4xl sm:text-5xl font-bold montserrat mb-4">Shop With Freedom</h1>
        <div className="text-[15px] leading-20 font-bold montserrat">
          No limits | No credit cards | No blockers or watchers. <br /> Enjoy the freedom of
          shopping around the world with just your web3 wallet and cryptocurrency!!!
        </div>
        <Link href="/all-products">
          <button
            type="button"
            className="btn--colors_regular mx-auto mt-6 text--colors_default-invert rounded px-8 py-2 sm:px-12 montserrat sm:py-3 text-[16px] sm:text-[20px]"
          >
            Start Shopping
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
