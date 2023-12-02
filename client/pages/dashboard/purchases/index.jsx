'use client';

import { useState } from 'react';

import MainAppLayout from '../../../components/dashboard/layout/MainAppLayout';
import OrderCard from './components/order-card';

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
                <OrderCard
                  orderImage={Mock_1}
                  orderTitle="Big Sneakers"
                  orderId="230912892"
                  orderSize="42"
                  orderDate="27-2023"
                  orderLinkUrl="/"
                  orderStatus="delivered"
                />
                <OrderCard
                  orderImage={Mock_2}
                  orderTitle="Big Sneakers"
                  orderId="230912892"
                  orderSize="42"
                  orderDate="27-2023"
                  orderLinkUrl="/"
                  orderStatus="pending"
                />
              </>
            )}
          </div>
        </aside>
      </div>
    </MainAppLayout>
  );
}

export default Purchases;
