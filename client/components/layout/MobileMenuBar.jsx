import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Socials from '../Socials';
import NewsletterSection from '../NewsletterSection';

function MobileMenuBar({ hideMobileNav, closeMobileNav }) {
  return (
    <section
      className={`${
        closeMobileNav ? 'nav--slide-out' : 'nav--slide-in'
      } fixed py-8 px-4 top-0 right-0 left-0 lg:hidden overflow-auto h-screen w-full z-50 bg--default`}
    >
      <div className="close-btn fixed top-8 right-4" onClick={hideMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   width="20"
          //   height="20"
          fill="currentColor"
          className="bi bi-x-lg text--colors_secondary w-[20px] sm:w-[30px]"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-y-6 text-2xl font-bold text-left min-h-[500px] border-b w-full pb-10">
        <Link
          onClick={hideMobileNav}
          href="/"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>How its Work</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Pricing</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Features</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Create Store</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Buy Themes</span>
        </Link>
        <div className="flex flex-col gap-3 w-fit mt-4">
          <Link
            href="/"
            className="inline-flex place-items-center h-[2.3rem] bg-transparent text-[#000000] p-[10px]"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex place-items-center h-[2.3rem] bg-[#EF5DA8] text-white p-[10px]"
          >
            Start selling
          </Link>
        </div>
      </div>
      <div className="pt-8 pb-8 border-b gap-6 sm:gap-12 flex flex-col sm:flex-row sm:items-center">
        <Socials />
      </div>
      <NewsletterSection />
    </section>
  );
}

export default MobileMenuBar;
