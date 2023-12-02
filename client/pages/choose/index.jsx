import Image from 'next/image';
import web_shopping from '../../assets/images/web_shopping.png'
import shopping_bags from '../../assets/images/shopping_bags.png'

const Choose = () => {
  return (
    <main className="bg-gray-100 py-12">
      <div className='flex items-center justify-center flex-col'>
        <div className='w-[80%]'>
        <div className="flex items-center">
        <div>
          <Image src={web_shopping} alt="web shopping" width={250} height={250} />
        </div>
        <div className='flex items-center justify-center flex-col'>
          <h1 className="text-base ">Lets get you settled in,</h1>
          <h1 className="text-3xl font-semibold">Choose an option:</h1>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-12 ">
        <div className="bg-white rounded-md shadow-md w-[46%] h-[200px] p-6">
          <h1 className="text-xl font-semibold pb-3">Create Store</h1>
          <Image src={shopping_bags} alt="shopping bag" width={250} height={250} />
          <p className="text-base font-normal leading-6">
            Build, launch, and scale your online business effortlessly. Our user-friendly platform
            empowers you to sell digital products with ease. From eBooks to software, your success
            story starts here.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md w-[46%] h-[200px] p-6">
          <h1 className="text-xl font-semibold pb-3">Buy Theme</h1>
          <Image src={shopping_bags} alt="shopping bag" width={250} height={250} />
          <p className="text-base font-normal leading-6">
            Elevate your store's aesthetics with our stunning themes. Crafted for conversions, our
            themes seamlessly blend style and functionality. Make a lasting impression on your
            customers from the moment they land on your site.
          </p>
        </div>
      </div>
      <div className='flex items-end justify-end '>
      <Image src={shopping_bags} alt="shopping bag" width={250} height={250} />
      </div>
        </div>
      </div>
    </main>
  );
};

export default Choose;
