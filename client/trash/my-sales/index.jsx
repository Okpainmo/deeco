import Image from 'next/image';
import MainAppLayout from '../../components/user-dashboard/layout/MainAppLayout';
import order from '../../assets/images/purchases.png';

function Mysales() {
  return (
    <MainAppLayout>
      <div className="flex gap-4 flex-1">
        <aside className="basis-full bg-white ml-auto shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b-2 p-6">
            <h1 className="text-lg font-bold text-black ">Purchases</h1>
            <button className="bg-[#5D5FEF] px-3 py-2 mt-4 lg:mt-0 text-white" type="submit">
              View more
            </button>
          </div>
          <main className="overflow-x-auto">
            <table className="w-full text-black " style={{ minWidth: '800px' }}>
              <thead>
                <tr>
                  <th className="p-6 border-b" />
                  <th className="p-6 border-b">Productname</th>
                  <th className="p-6 border-b">Customer</th>
                  <th className="p-6 border-b">Product ID</th>
                  <th className="p-6 border-b">Price</th>
                  <th className="p-6 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr key="SC 12345" className="text-center">
                  <td className="py-4 px-16">
                    <Image src={order} alt="order" width={80} height={80} />
                  </td>
                  <td className="py-2 px-6 ">Andrew’s Novel</td>
                  <td className="py-2 px-6">Dan koe</td>
                  <td className="py-2 px-6">SC 12345</td>
                  <td className="py-2 px-6">$ 200</td>
                  <td className="py-2 px-6">
                    <button className="bg-[#DDFFC0] px-2 py-1 text-[#46880C]" type="submit">
                      Delivered
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </aside>
      </div>
    </MainAppLayout>
  );
}

export default Mysales;
