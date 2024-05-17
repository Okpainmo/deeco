import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Socials from '../../Socials';
import NewsletterSection from '../../NewsletterSection';

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
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
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

            <span>All products</span>
          </div>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Today's deals</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Electronics</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Accessories</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Deeco fashion</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Home and kitchen</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Books and media</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-productst"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Office and school supplies</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Sports and fitness</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Automotive</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Agriculture</span>
        </Link>
        <Link
          onClick={hideMobileNav}
          href="/all-products"
          className="min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
        >
          <span>Groceries</span>
        </Link>
      </div>
      <div className="pt-8 pb-8 border-b gap-6 sm:gap-12 flex flex-col sm:flex-row sm:items-center">
        <Socials />
      </div>
      <NewsletterSection />
    </section>
  );
}

export default MobileMenuBar;
