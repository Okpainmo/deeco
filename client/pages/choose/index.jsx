import Image from 'next/image';
import web_shopping from '../../assets/images/web_shopping.png';
import shopping_bags from '../../assets/images/shopping_bags.png';
import shopping_cart from '../../assets/images/shopping-cart.png';
import park_market from '../../assets/images/park_market.png';
import MainAppLayout from '../../components/layout/MainAppLayout';

const Choose = () => {
  return (
    <MainAppLayout>
      <main className="bg-gray-50 py-12">
        <div className="flex items-center justify-center flex-col ">
          <div className="w-[90%] mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3   w-full">
              <div >
                <Image src={web_shopping} alt="web shopping" width={250} height={250} className='h-[150px] w-[200px] lg:h-[200px] lg:w-[250px] ' />
              </div>
              <div className='flex items-center justify-center flex-col mt-12 lg:mt-0'>
                <h1 className="text-base ">Lets get you settled in,</h1>
                <h1 className="text-3xl font-semibold">Choose an option:</h1>
              </div>
            </div>
            <div className='flex items-center justify-center'>
            <div className="flex items-center justify-evenly flex-col lg:flex-row py-12 w-full xl:w-[70%] ">
              <div className="bg-white rounded-md shadow-md w-[90%] lg:w-[46%] lg:h-[220px]  p-6">
                <div className='flex items-center'>
                <h1 className="text-lg lg:text-xl font-semibold pb-3 pr-2">Create Store</h1>
                <Image src={shopping_cart} alt="shopping bag" width={25} height={25} className='mb-4'/>
                </div>
                <p className="text-sm lg:text-base font-normal leading-6">
                  Build, launch, and scale your online business effortlessly. Our user-friendly
                  platform empowers you to sell digital products with ease. From eBooks to software,
                  your success story starts here.
                </p>
              </div>
              <div className="bg-white rounded-md shadow-md w-[90%] mt-4 lg:mt-0 lg:w-[46%] lg:h-[220px] p-6">
                <div className='flex items-center'>
                <h1 className="text-lg lg:text-xl font-semibold pb-3 pr-2">Buy Theme</h1>
                <Image src={park_market} alt="shopping bag" width={25} height={25} className='mb-4'/>
                </div>
                <p className="text-sm lg:text-base font-normal leading-6">
                  Elevate your store's aesthetics with our stunning themes. Crafted for conversions,
                  our themes seamlessly blend style and functionality. Make a lasting impression on
                  your customers from the moment they land on your site.
                </p>
              </div>
            </div>
            </div>
            <div className="flex items-end justify-end ">
              <Image src={shopping_bags} alt="shopping bag" width={250} height={250} className='h-[150px] w-[200px] lg:h-[200px] lg:w-[250px] '/>
            </div>
          </div>
        </div>
      </main>
    </MainAppLayout>
  );
};

export default Choose;
