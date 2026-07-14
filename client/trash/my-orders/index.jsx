import Image from 'next/image';
import MainAppLayout from '../../components/user-dashboard/layout/MainAppLayout';
import order from '../../assets/images/purchases.png';

function Myorders() {
  return (
    <MainAppLayout>
      <div className="flex gap-4 flex-1 container">
        <aside className="basis-full bg-white ml-auto shadow-md overflow-hidden">
          <h1 className="text-lg font-bold text-black border-b-2 p-6">Order Details</h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 border-b-2">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-lg font-bold text-black">Big Sneakers</h1>
              <h1 className="text-sm font-normal text-[#666] py-2">2 Items</h1>
              <h1 className="text-sm font-normal text-[#666]">Placed on 09-11-2021</h1>
              <h1 className="text-base text-[#666] font-bold py-2">Totla: #6,800</h1>
            </div>
            <div>
              <button
                className="text-[#EB4899] mt-6 lg:mt-0 text border-2 border-[#EB4899] px-8 py-3"
                type="submit"
              >
                Cancel order
              </button>
            </div>
          </div>
          <div className="p-6 border-b-2">
            <button className="bg-[#6DBD28] px-4 py-3 text-sm font-bold text-white" type="submit">
              DELIVERED
            </button>
            <div className="flex border-2 p-6 w-full rounded-lg my-6">
              <Image src={order} alt="purchases" width={120} height={120} className="mr-8" />
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-lg font-bold text-black">Big Sneakers</h1>
                <h1 className="text-sm font-normal text-[#666]">Order 230912892</h1>
                <h1 className="text-sm font-normal text-[#666]">Size (UK); 42</h1>
                <h1 className="text-base text-black font-bold">On-27-2023</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between p-6 my-8">
            <div className="border rounded-lg w-full lg:w-[48%] lg:h-[300px]">
              <h1 className="font-extrabold text-lg border-b-2 p-4 text-black">Payment</h1>
              <div className="bg-[#FAFAFA] w-[45%] p-4 m-4">
                <h1 className="font-bold text-base text-black">Import Wallet</h1>
                <p className="text-base font-normal text-black">
                  Import your wallet via seed phrase or private key
                </p>
              </div>
              <button className="bg-[#EB4899] text-lg text-white px-6 py-3 m-4" type="submit">
                Connect Wallet
              </button>
            </div>
            <div className="border rounded-lg w-full lg:w-[48%] mt-6 lg:mt-0 h-[300px]">
              <h1 className="font-extrabold text-lg border-b-2 p-4 text-black">Delivery</h1>
            </div>
          </div>
        </aside>
      </div>
    </MainAppLayout>
  );
}

export default Myorders;
