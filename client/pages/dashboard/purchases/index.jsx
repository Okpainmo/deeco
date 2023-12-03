'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MainAppLayout from '../../../components/user-dashboard/layout/MainAppLayout';

import Mock_1 from '../../../assets/images/mock-1.png';
import Mock_2 from '../../../assets/images/mock-2.png';

function Purchases() {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <MainAppLayout>
      <div className="flex  gap-4 flex-1">
        <aside className="basis-full bg-white ml-auto shadow-md overflow-hidden">
          <div className="py-4 px-9 border-b border-b-[#E0E0E0]">
            <h3 className="text-xl font-bold text-[#1E1E1E]">Purchases</h3>
          </div>
          <div className="flex gap-6 uppercase text-base font-bold items-center py-4 px-9 border-b border-b-[#E0E0E0] ">
            <button
              type="button"
              className={`${activeTab === 1 ? 'text-[#61A5FA]' : 'text-[#666666]'}`}
              onClick={() => handleTabClick(1)}
            >
              Open Order (<span>0</span>)
            </button>
            <button
              type="button"
              className={`${activeTab === 2 ? 'text-[#61A5FA]' : 'text-[#666666]'}`}
              onClick={() => handleTabClick(2)}
            >
              Close Order (<span>2</span>)
            </button>
          </div>
          <div className="flex flex-col gap-5 py-4 px-9 transition-all">
            {activeTab === 1 ? (
              <> </>
            ) : (
              <>
                <div className="flex items-stretch justify-between w-full p-[1.125rem] border border-[#E0E0E0]">
                  <div className="inline-flex items-center gap-6">
                    <div className="w-[6.25rem] h-[6.25rem]">
                      <Image src={Mock_1} alt="order-image" className="object-cover" />
                    </div>
                    <div className="inline-flex flex-col gap-1">
                      <h5 className="text-base font-bold text-[#1E1E1E]">Big Sneakers</h5>
                      <p className="text-xs text-[#666666]">
                        Order <span>230912892</span>
                      </p>
                      <p className="text-xs text-[#666666]">
                        Size (UK): <span>230912892</span>
                      </p>
                      <p className="inline-flex gap-2 font-bold text-sm text-[#1E1E1E]">
                        <span>on-27-2023</span>
                        <span className="text-[#D9D9D9]">|</span>
                        <span> 2d </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/" className="text-xs text-[#1E1E1E] font-bold underline">
                      See details
                    </Link>
                    <p className="mt-auto text-xs text-white font-bold py-[5px] px-[10px] bg-[#6DBD28]">
                      Delivered
                    </p>
                  </div>
                </div>
                <div className="flex items-stretch justify-between w-full p-[1.125rem] border border-[#E0E0E0]">
                  <div className="inline-flex items-center gap-6">
                    <div className="w-[6.25rem] h-[6.25rem]">
                      <Image src={Mock_2} alt="order-image" className="object-cover" />
                    </div>
                    <div className="inline-flex flex-col gap-1">
                      <h5 className="text-base font-bold text-[#1E1E1E]">Big Sneakers</h5>
                      <p className="text-xs text-[#666666]">
                        Order <span>230912892</span>
                      </p>
                      <p className="text-xs text-[#666666]">
                        Size (UK): <span>230912892</span>
                      </p>
                      <p className="inline-flex gap-2 font-bold text-sm text-[#1E1E1E]">
                        <span>27-2023</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/" className="text-xs text-[#1E1E1E] font-bold underline">
                      See details
                    </Link>
                    <p className="mt-auto text-xs text-white font-bold py-[5px] px-[10px] bg-[#61A5FA]">
                      Pending
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>
      </div>
    </MainAppLayout>
  );
}

export default Purchases;
