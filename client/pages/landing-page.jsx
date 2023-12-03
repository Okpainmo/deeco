'use client';

import { useState } from 'react';
import Image from 'next/image';

import MainAppLayout from '../components/layout/MainAppLayout';
import Mock_3 from '../assets/images/mock-3.png';

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
          <button type="button" className="md:py-4" onClick={() => handleTabClick(4)}>
            Real Estate
          </button>
        </div>

        <div className="flex flex-col gap-5 px-3 sm:px-6 xl:px-16 py-14">
          {activeTab === 1 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-5 min-h-[10rem]">
                <div className="md:h-[15.625rem] w-full md:max-w-[27.75rem]">
                  <Image src={Mock_3} alt="theme_website" className="object-contain" />
                </div>
                <div className="md:grid grid-cols-2 w-full">
                  <div className="text-[#666666]">
                    <h5 className="font-bold text-xl text-[#333333]">Name of Theme</h5>
                    <p className="text-lg ">Some description here</p>
                    <ul className="text-base list-disc pl-4 py-4">
                      <li>Dark and light mode</li>
                      <li>Easy to customize</li>
                      <li>Minimal and modern</li>
                    </ul>
                  </div>
                  <div className="text-[#666666]">
                    <p className="text-[#333333] font-semibold text-2xl">$23</p>
                    <p className="text-base">Last updated</p>
                    <div className="mt-5 inline-flex items-center gap-[10px]">
                      <button
                        type="button"
                        className="p-[9px] bg-[#EB4899] text-base text-white font-bold w-[9rem] "
                      >
                        Use theme
                      </button>
                      <button type="button" className="p-[9px] bg-[#F0F0F0]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 7.83189L11.4804 7.33266C10.6782 6.56199 9.5943 6 8.4 6C5.96701 6 4 7.80688 4 10.0298C4 11.6564 4.69221 13.123 5.71896 14.4148L5.71897 14.4149C6.74559 15.7066 8.10651 16.8231 9.44364 17.7495L9.01653 18.366L9.44365 17.7495C9.95196 18.1017 10.4491 18.4143 10.89 18.6389C11.3299 18.8629 11.7154 19 12 19C12.2846 19 12.6701 18.8629 13.1099 18.6389L12 7.83189ZM12 7.83189L12.5196 7.33266C13.3218 6.56199 14.4057 6 15.6 6C18.033 6 20 7.80687 20 10.0298C20 11.6564 19.3078 13.123 18.2811 14.4148M12 7.83189L18.2811 14.4148M18.2811 14.4148C17.2544 15.7066 15.8935 16.8231 14.5564 17.7495M18.2811 14.4148L14.5564 17.7495M14.5564 17.7495C14.048 18.1017 13.5509 18.4143 13.11 18.6389L14.5564 17.7495ZM14.5564 17.7495L14.9835 18.366L14.5564 17.7495Z"
                            stroke="#0A0A0A"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 min-h-[10rem]">
                <div className="md:h-[15.625rem] w-full md:max-w-[27.75rem]">
                  <Image src={Mock_3} alt="theme_website" className="object-contain" />
                </div>
                <div className="md:grid grid-cols-2 w-full">
                  <div className="text-[#666666]">
                    <h5 className="font-bold text-xl text-[#333333]">Name of Theme</h5>
                    <p className="text-lg ">Some description here</p>
                    <ul className="text-base list-disc pl-4 py-4">
                      <li>Dark and light mode</li>
                      <li>Easy to customize</li>
                      <li>Minimal and modern</li>
                    </ul>
                  </div>
                  <div className="text-[#666666]">
                    <p className="text-[#333333] font-semibold text-2xl">$23</p>
                    <p className="text-base">Last updated</p>
                    <div className="mt-5 inline-flex items-center gap-[10px]">
                      <button
                        type="button"
                        className="p-[9px] bg-[#EB4899] text-base text-white font-bold w-[9rem] "
                      >
                        Use theme
                      </button>
                      <button type="button" className="p-[9px] bg-[#F0F0F0]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 7.83189L11.4804 7.33266C10.6782 6.56199 9.5943 6 8.4 6C5.96701 6 4 7.80688 4 10.0298C4 11.6564 4.69221 13.123 5.71896 14.4148L5.71897 14.4149C6.74559 15.7066 8.10651 16.8231 9.44364 17.7495L9.01653 18.366L9.44365 17.7495C9.95196 18.1017 10.4491 18.4143 10.89 18.6389C11.3299 18.8629 11.7154 19 12 19C12.2846 19 12.6701 18.8629 13.1099 18.6389L12 7.83189ZM12 7.83189L12.5196 7.33266C13.3218 6.56199 14.4057 6 15.6 6C18.033 6 20 7.80687 20 10.0298C20 11.6564 19.3078 13.123 18.2811 14.4148M12 7.83189L18.2811 14.4148M18.2811 14.4148C17.2544 15.7066 15.8935 16.8231 14.5564 17.7495M18.2811 14.4148L14.5564 17.7495M14.5564 17.7495C14.048 18.1017 13.5509 18.4143 13.11 18.6389L14.5564 17.7495ZM14.5564 17.7495L14.9835 18.366L14.5564 17.7495Z"
                            stroke="#0A0A0A"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col items-center justify-center text-center py-8 min-h-[70vh]">
          <div className="flex flex-col gap-10 items-center">
            <h2 className="max-w-[30ch] text-black text-5xl font-extrabold">
              Ready to thrive in the digital marketplace? Start your journey now!
            </h2>
            <p className="max-w-[45ch] text-black text-xl">
              Create your Account in just few minutes and Start Earning today!
            </p>
            <button
              type="button"
              className="p-[9px] bg-[#EB4899] text-base text-white font-bold w-[13.5rem] "
            >
              Start your journey
            </button>
          </div>
        </div>
      </section>
    </MainAppLayout>
  );
}

export default LandingPage;
