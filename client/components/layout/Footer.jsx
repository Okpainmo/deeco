import React from 'react';
import Link from 'next/link';
import Socials from '../Socials';
import NewsletterSection from '../NewsletterSection';

function Footer() {
  return (
    <footer className="border-t pt-16 pb-24 sm:py-16 px-3 sm:px-6 xl:px-16">
      <section className="flex flex-col lg:flex-row lg:flex-wrap justify-between">
        <section className="mb-10 md:mb-20 w-[85%] lg:w-[20%] xl:w-[25%]">
          <Link href="/">
            <div className="brand--colors italic text--colors_default montserrat text-[16px] px-2 border-[3px] text-center w-[100px]">
              deeco.
            </div>
          </Link>
          <div className="brand-brief text-[12px] mt-3 sm:mt-4 leading-[25px]">
            Deeco is your e-commerce store builder to sell any kind of digital product or service to
            anyone, anywhere in the world. with various payment options including <br />
            <span className="text-[#EF5DA8]"> block-chain! </span>
          </div>
          <div className="mt-3 md:mt-6">
            <Socials />
          </div>
        </section>
        <section className="menu-items flex justify-between gap-x-4 md:w-1/2 lg:w-1/3">
          <section className="flex flex-col gap-6">
            <div className="min-h-[180px]">
              <h4 className="text--dark font-bold text-base">Services</h4>
              <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
                <li>Crypto</li>
                <li>E-commerce</li>
                <li>Digital Product</li>
              </ul>
            </div>
          </section>
          <section className="flex flex-col gap-6">
            <div className="min-h-[180px]">
              <h4 className="text--dark font-bold text-base">Help</h4>
              <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
                <li>FAQs</li>
                <li>Security</li>
                <li>Contact us</li>
              </ul>
            </div>
          </section>
          <section className="flex flex-col gap-6">
            <div className="min-h-[180px]">
              <h4 className="text--dark font-bold text-base">Transparency</h4>
              <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </section>
        </section>
        <NewsletterSection />
      </section>
    </footer>
  );
}

export default Footer;
