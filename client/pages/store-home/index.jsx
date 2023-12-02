import Image from 'next/image';
// import Header from '../../components/layout/Header';
import ShoppingCart from '../../assets/images/shoping-cart.png';
import SectionTwoImage from '../../assets/images/dpic-4.png';
import SectionThreeIamge from '../../assets/images/dpic-5.png';
import BitcoinLogo from '../../assets/images/dpic-6.png';
import PaymentImage from '../../assets/images/payment-img.png';
import EbookImage from '../../assets/images/e-book.png';
import SoftwareImage from '../../assets/images/software-img.png';
import MoreIcon from '../../assets/images/more-img.png';
import CourseImage from '../../assets/images/carbon_course.png';
import SectionFiveImage from '../../assets/images/dpic-7.png';
import MobileImage from '../../assets/images/dpic-8.png';
import VisaImage from '../../assets/images/dpic-10.png';
import PayPalImage from '../../assets/images/dpic-11.png';
import MasterCardImage from '../../assets/images/dpic-12.png';
import MainAppLayout from '../../components/layout/MainAppLayout';

function StoreHome() {
  return (
    <MainAppLayout>
      <main className="landing-page md:w-[800px] lg:w-[900px] mx-auto px-3 min-h-screen mt-[50px]  flex flex-col pb-5">
        <div className="w-full">
          <section className="section-one flex flex-col items-center md:mb-10">
            <h2 className="capitalize font-semibold text-base mb-5 md:text-2xl">
              introducing <span className="uppercase">decco,</span>
            </h2>
            <div className="flex flex-col items-center xsm:flex-row gap-4">
              <div>
                <Image
                  src={ShoppingCart}
                  alt="ShoppingCart"
                  className="hidden xsm:block h-10 w-10"
                />
              </div>
              <div className="font-bold text-lg md:text-3xl">
                <h2>
                  Your ultimate E-commerce <span className="inline-block lg:hidden">solution!</span>
                </h2>
                <span className="hidden lg:block text-center">solution!</span>
              </div>
            </div>
            <div className="py-5 flex flex-col md:items-center">
              <div>
                <p className="tracking-widest text-xs xsm:w-[400px] md:w-[600px]">
                  Deeco offers you e-commerce store with vast payment options including{' '}
                  <span className="text-pink-400">CRYPTO </span>to sell any kind of digital product
                  or service to anyone, and just incase you prefer a custom made store, guess what?
                  we got you covered with our vast e-commerce templates that you can purchase and
                  host at your discretion.{' '}
                </p>
                <div className="flex justify-end">
                  <Image
                    src={BitcoinLogo}
                    alt="ShoppingCart"
                    className="hidden sm:block h-10 w-10"
                  />
                </div>
              </div>
              <div className="my-10">
                <button
                  type="button"
                  className="w-full px-4 submit bg-pink-400 py-3 font-bold poppins text-[0.9rem] text-white capitalize"
                >
                  start your journey
                </button>
              </div>
            </div>
          </section>
          <section className="section-two md:mb-60">
            <div className="flex flex-col items-center md:flex-row md:justify-start">
              <div className="mb-5 md:order-2">
                <Image
                  src={SectionTwoImage}
                  alt="an ecommerce-image"
                  className="h-48 w-48 md:h-60 md:w-60"
                />
              </div>
              <div className="md:order-1 md:mr-20 md:mb-[-350px]">
                <h2 className="font-bold text-lg text-center md:text-start my-5">
                  E-commerce Store <span className="md:hidden">Maker</span>
                  <span className="hidden md:block text-3xl font-bold">Maker</span>
                </h2>
                <p className="tracking-widest xsm:w-[400px] md:text-sm">
                  Build, launch, and scale your online business effortlessly. Our user-friendly
                  platform empowers you to sell digital products with ease. From eBooks to software,
                  your success story starts here.
                </p>
                <div className="my-10 md:w-[180px]">
                  <button
                    type="button"
                    className="w-full px-4 submit bg-pink-400 py-3 font-bold text-[0.9rem] text-white capitalize"
                  >
                    start your journey
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="section-three md:mb-20">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="mb-5  md:order-1 md:mr-28 md:mb-[-65px]">
                <Image src={SectionThreeIamge} alt="an ecommerce-image" className="h-48 w-48" />
              </div>
              <div className="md:order-2">
                <h2 className="font-bold text-lg text-center md:text-right my-5 md:my-2">
                  E-commerce <span className="md:hidden">Themes</span>
                  <span className="hidden md:block text-3xl font-bold">Themes</span>
                </h2>
                <p className="tracking-widest xsm:w-[400px] md:text-right md:text-sm">
                  Elevate your store's aesthetics with our stunning themes. Crafted for conversions,
                  our themes seamlessly blend style and functionality. Make a lasting impression on
                  your customers from the moment they land on your site
                </p>
                <div className="my-10 md:w-[180px] flex ml-auto">
                  <button
                    type="button"
                    className="w-full px-4 submit bg-pink-400 py-3 font-bold text-[0.9rem] text-white capitalize"
                  >
                    start your journey
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="section-four md:mb-20">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="my-5 md:order-2">
                <Image
                  src={PaymentImage}
                  alt="payment-image"
                  className="block object-cover h-52 w-52 md:h-72 md:w-72"
                />
              </div>
              <div className="md:mr-28 my-5">
                <h2 className="font-bold text-lg md:text-2xl text-center md:text-left capitalize my-5">
                  vast payment option
                </h2>
                <p className="tracking-widest xsm:w-[400px] md:text-left md:text-sm">
                  Both our solution is fully integrated with vast payment option ranging from local
                  payments, to <span className="text-pink-400">Crypto currencies</span> giving you
                  ultimate power of sales.
                </p>
                <span className="block text-lg font-bold text-center md:text-left my-3">
                  Buying has never gotten any bettter
                </span>
              </div>
            </div>
          </section>
          <section className="section-five md:mb-36">
            <h2 className="font-bold text-lg md:text-2xl text-center lg:text-left my-5">
              Sell varieties of Digital products.
            </h2>
            <div className="flex flex-col items-center lg:items-end lg:flex-row lg:justify-between">
              <div className="lg:order-2">
                <Image
                  src={SectionFiveImage}
                  alt="animinted-picture"
                  className="block object-cover h-40 w-56"
                />
              </div>
              <div className="lg:w-[300px]">
                <div className="md:flex md:justify-between md:gap-10">
                  <div className="my-5">
                    <div className="flex justify-center my-2 md:flex-col">
                      <Image
                        src={EbookImage}
                        alt="Ebook-image"
                        className="hidden md:block object-cover"
                      />
                      <h3 className="font-bold ml-2 md:ml-0 md:mt-2 lg:text-sm">E-book</h3>
                    </div>
                    <p className="tracking-widest xsm:w-[400px] md:w-[300px] lg:text-[10px] lg:w-[250px]">
                      Have an E-book you would like to sell? Deeco is the best place to do that with
                      our easy to navigate interface.
                    </p>
                  </div>
                  <div className="my-5">
                    <div className="flex justify-center md:flex-col my-2">
                      <Image
                        src={CourseImage}
                        alt="CourseImage"
                        className="hidden md:block object-cover"
                      />
                      <h3 className="font-bold ml-2 md:ml-0 md:mt-2 lg:text-sm">Course</h3>
                    </div>
                    <p className="tracking-widest xsm:w-[400px] md:w-[300px] lg:text-[10px] lg:w-[250px] ">
                      Have a Course you would like to sell? Deeco is the best place to do that with
                      our easy to navigate interface.
                    </p>
                  </div>
                </div>
                <div className="md:flex gap-10">
                  <div className="my-5">
                    <div className="flex justify-center md:flex-col my-2">
                      <Image
                        src={SoftwareImage}
                        alt="SoftwareImage"
                        className="hidden md:block object-cover"
                      />
                      <h3 className="font-bold ml-2 md:ml-0 md:mt-2 lg:text-sm">Software</h3>
                    </div>
                    <p className="tracking-widest xsm:w-[400px] md:w-[300px] lg:w-[250px] lg:text-[10px]">
                      Have a software you would like to sell? Deeco is the best place to do that
                      with our easy to navigate interface.
                    </p>
                  </div>
                  <div className="my-5">
                    <div className="flex justify-center md:flex-col my-2">
                      <Image
                        src={MoreIcon}
                        alt="MoreIcon"
                        className="hidden md:block object-cover"
                      />
                      <h3 className="font-bold ml-2 md:ml-0 md:mt-2 lg:text-sm">More</h3>
                    </div>
                    <p className="tracking-widest xsm:w-[400px] md:w-[300px] lg:text-[10px] lg:w-[250px] ">
                      There is no limit to what you can sell on Deeco. feel free to hop in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-six md:mb-36">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="my-10">
                <Image
                  src={MobileImage}
                  alt="MobileImage"
                  className="block object-cover h-56 w-56"
                />
              </div>
              <div className="md:mt-[-180px] lg:mt-[-100px]">
                <h2 className="capitalize font-bold text-lg text-center md:text-2xl md:text-right mb-5">
                  setup is easy <span className="hidden md:inline-block">as</span>{' '}
                  <span className="hidden md:block">1 2 3</span>
                </h2>
                <div className="px-3">
                  <ol className="list-decimal md:list-none md:text-right">
                    <li className="mb-2">Sign up & connect your Crypto wallet or Bank details.</li>
                    <li className="mb-2">Set up and upload products on your store.</li>
                    <li className="mb-2">Share your store link and start selling.</li>
                  </ol>
                </div>
                <div className="my-10 md:w-[180px] ml-auto">
                  <button
                    type="button"
                    className="w-full px-4 submit bg-pink-400 py-3 font-bold text-[0.9rem] text-white capitalize"
                  >
                    start your journey
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="section-seven md:mb-64">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="md:order-2 w-[250px] flex flex-col items-center mb-5 md:mb-[-300px]">
                <div className="mb-14">
                  <Image
                    src={BitcoinLogo}
                    alt="animinted-picture"
                    className="block object-cover h-7 w-7"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={VisaImage}
                    alt="VisaImage"
                    className="block object-cover mr-10  h-7 w-24"
                  />
                  <Image
                    src={BitcoinLogo}
                    alt="BitcoinLogo"
                    className="block object-cover mr-10  h-10 w-10"
                  />
                  <Image
                    src={PayPalImage}
                    alt="PayPalImage"
                    className="block object-cover mr-10 h-12 w-10"
                  />
                </div>
                <div className="mt-14">
                  <Image
                    src={MasterCardImage}
                    alt="MasterCardImage"
                    className="block object-cover"
                  />
                </div>
              </div>
              <div className="mt-5 my-10">
                <h2 className="capitalize font-bold text-lg md:text-2xl text-center md:text-left mb-5">
                  Unrestricted payment Gateways
                </h2>
                <p className="tracking-widest xsm:w-[400px] lg:w-[550px]  md:text-sm">
                  We've integrated multiple payment gateways including{' '}
                  <span className="text-pink-400">Crypto currencies</span> to ensure you can receive
                  payments from anywhere in the world. our local payment methods includes currencies
                  and cards like PayPal, Verve & master-card hence all customers can truly pay with
                  ease.
                </p>
              </div>
            </div>
          </section>
          <section className="section-eight">
            <div className="flex flex-col items-center mb-28">
              <h2 className="text-base mb-5">
                <span className="text-3xl font-bold">Ready</span> to thrive in the digital
                marketplace? Start your journey now!
              </h2>
              <p className="mb-10">
                Create your Account in just few minutes and Start Earning today!
              </p>
              <div className="w-full px-3 xsm:w-[180px]">
                <button
                  type="button"
                  className="w-full px-4 submit bg-pink-400 py-3 font-bold text-[0.9rem] text-white capitalize"
                >
                  start your journey
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </MainAppLayout>
  );
}
export default StoreHome;
