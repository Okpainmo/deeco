'use client';

import { useState } from 'react';
import Link from 'next/link';

import MainAppLayout from '../../components/layout/MainAppLayout';
import ThemeCard from './components/theme-card';

import Mock_3 from '../../assets/images/mock-3.jpg';
import Mock_4 from '../../assets/images/mock-3.png';
import Mock_5 from '../../assets/images/mock-4.png';
import Mock_6 from '../../assets/images/mock-6.png';
import Mock_7 from '../../assets/images/mock-7.png';

function LandingPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <MainAppLayout>
      <section className="">
        <div className="flex flex-col justify-center text-center text-[#0A0A0A] py-8 min-h-[60vh] px-3 sm:px-6 xl:px-16">
          <div className="flex flex-col gap-6 items-center">
            <h1 className=" text-5xl font-extrabold capitalize">
              Get templates to <br /> start selling here
            </h1>
            <p className="text-lg max-w-[50ch]">
              Choose from over 31,200 plugins, code & scripts. Explore items created by our global
              community of independent developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-[2px] w-full justify-center">
              <div className="flex items-center gap-2 px-4 border border-[#666666] w-full sm:max-w-[24rem]">
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z"
                      fill="black"
                    />
                  </svg>
                </i>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search products, categories,..."
                  className="w-full text-base focus:outline-none py-[10px]"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center bg-[#61A5FA] text-white py-[10px] sm:w-[8rem] border border-transparent"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-[#333333] text-4xl font-bold py-4 border-y border-y-[#F0F0F0] px-3 sm:px-6 xl:px-16">
          Categories
        </h2>
        <div className="flex flex-wrap items-center font-bold py-3 md:py-0 text-base gap-4 md:gap-6 mt-1 border-y border-y-[#F0F0F0] px-3 sm:px-6 xl:px-16">
          <button type="button" className="md:py-4" onClick={() => handleTabClick(1)}>
            Coorporate
          </button>
          <button type="button" className="md:py-4" onClick={() => handleTabClick(2)}>
            Ecomerce
          </button>
          <button type="button" className="md:py-4" onClick={() => handleTabClick(3)}>
            Non profit
          </button>
          <button type="button" className="md:py-4" onClick={() => handleTabClick(4)}>
            Education
          </button>
          <button type="button" className="md:py-4" onClick={() => handleTabClick(5)}>
            Real Estate
          </button>
        </div>

        <div className="flex flex-col gap-5 px-3 sm:px-6 xl:px-16 py-14">
          {activeTab === 1 && (
            <>
              <ThemeCard
                themeImage={Mock_5}
                themeName="Oreo - Cooperate Theme"
                themeAuthor="Deeco"
                themePrice="50"
                themeType="Cooperate"
                themeDetails={[
                  'Easy to install, Responsive & Multipurpose',
                  'Clean, Modern and Unique Design Layout',
                  'High Quality with Premium Support'
                ]}
                themeDate="2 Sept. 2023"
                themeUrl="/"
              />
              <ThemeCard
                themeImage={Mock_6}
                themeName="Bestbike - Bike Store"
                themeAuthor="Deeco"
                themePrice="80"
                themeType="Cooperate"
                themeDetails={[
                  'Biking and Sporting',
                  'Biking Rental Service',
                  'Modern Bike Riding'
                ]}
                themeDate="2 Feb. 2023"
                themeUrl="/"
              />
            </>
          )}
          {activeTab === 2 && (
            <>
              <ThemeCard
                themeImage={Mock_3}
                themeName="Marketo - Resonsive Theme"
                themeAuthor="Deeco"
                themePrice="25"
                themeType="Ecomerce"
                themeDetails={[
                  '15+ home style niche woocommerce theme',
                  'Longest supported theme at TF. 5 Star Rated',
                  'Minimal and modern'
                ]}
                themeDate="2 Dec. 2023"
                themeUrl="/"
              />
              <ThemeCard
                themeImage={Mock_4}
                themeName="EComposer - Ecommerce Theme"
                themeAuthor="Deeco"
                themePrice="40"
                themeType="Ecomerce"
                themeDetails={[
                  'Dark and light mode',
                  'Easy to customize',
                  'SEO Optimized, Fast Loading'
                ]}
                themeDate="23 Nov. 2023"
                themeUrl="/"
              />
            </>
          )}
          {activeTab === 3 && (
            <p className="text-black text-xl font-bold"> No themes available yet</p>
          )}
          {activeTab === 4 && (
            <ThemeCard
              themeImage={Mock_7}
              themeName="EduKit - Education Theme"
              themeAuthor="Deeco"
              themePrice="25"
              themeType="Education"
              themeDetails={[
                'Fun Learning Box, Kids Education eCommerce',
                'Educational box for toddlers, Subscriptions',
                'Puzzles & Games, Babies Activity Box Online'
              ]}
              themeDate="12 Jan. 2023"
              themeUrl="/"
            />
          )}
          {activeTab === 5 && <p className="text-black text-xl font-bold"> Comming soon!!</p>}
        </div>

        <div className="flex flex-col items-center justify-center text-center py-8 min-h-[70vh]">
          <div className="flex flex-col gap-10 items-center">
            <h2 className="max-w-[30ch] text-black text-5xl font-extrabold">
              Ready to thrive in the digital marketplace? Start your journey now!
            </h2>
            <p className="max-w-[45ch] text-black text-xl">
              Create your Account in just few minutes and Start Earning today!
            </p>
            <Link
              href="/sign-up"
              className="p-[9px] bg-[#EB4899] text-base text-white font-bold w-[13.5rem] "
            >
              Start your journey
            </Link>
          </div>
        </div>
      </section>
    </MainAppLayout>
  );
}

export default LandingPage;
