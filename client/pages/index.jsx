import { useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';
// import Header from '../../components/layout/Header';
import ShoppingCart from '../assets/images/shopping-cart.png';
import SectionTwoImage from '../assets/images/dpic-4.png';
import SectionFourImage from '../assets/images/dpic-5.png';
import BitcoinLogo from '../assets/images/dpic-6.png';
import PaymentImage from '../assets/images/payment-img.png';
import EbookImage from '../assets/images/e-book.png';
import SoftwareImage from '../assets/images/software-img.png';
import MoreIcon from '../assets/images/more-img.png';
import CourseImage from '../assets/images/carbon_course.png';
import SectionFiveImage from '../assets/images/dpic-7.png';
import MobileImage from '../assets/images/dpic-8.png';
import VisaImage from '../assets/images/dpic-10.png';
import PayPalImage from '../assets/images/dpic-11.png';
import MasterCardImage from '../assets/images/dpic-12.png';
import MainAppLayout from '../components/layout/MainAppLayout';

function Home() {
  // const selectUserAction = () => {
  //   if (isLoggedIn) {
  //     router.push('/create-store');
  //   } else {
  //     router.push('/log-in');
  //   }
  // };

  return (
    <MainAppLayout>
      <main className="landing-page lg:w-[900px] xl:w-[1100px] mx-auto px-3 min-h-screen mt-[70px] sm:mt-[150px] flex flex-col pb-5">
        <div className="w-full">
          <section className="section-one flex flex-col items-center md:mb-10 px-3">
            <h2 className="capitalize text-xl poppins font-bold mb-5">
              introducing <span className="uppercase">Deeco!</span>
            </h2>
            <div className="flex flex-col items-center xsm:flex-row gap-4 relative">
              <div className="absolute z-10 left-[100px] top-[-100px]">
                <Image
                  src={ShoppingCart}
                  alt="ShoppingCart"
                  className="hidden xsm:block h-10 w-10"
                />
              </div>
              <div className="font-bold poppins text-3xl md:text-4xl z-20">
                <h2 className="leading-[45px] md:leading-[60px] text-center">
                  Sell your products online and earn in multiple currencies including{' '}
                  <span className="text-pink-500 underline">cryptocurrencies.</span>
                </h2>
              </div>
            </div>
            <div className="py-5 flex flex-col md:items-center mt-6">
              <p className="tracking-widest xsm:w-[450px] md:w-[600px] lg:w-[800px] text-center">
                Deeco creates a seamless e-commerce experience by helping you build e-commerce
                stores where you can sell and earn in multiple currencies including
                cryptocurrencies.
              </p>
              <div className="flex justify-end">
                <Image src={BitcoinLogo} alt="ShoppingCart" className="hidden sm:block h-10 w-10" />
              </div>
              <div className="mb-10 mt-16">
                <Link href="/service-options">
                  <button
                    type="button"
                    className="w-full px-8 submit bg-pink-500 py-3 font-bold poppins text-[0.9rem] text-white capitalize"
                  >
                    start your journey
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className="section-two my-[150px] md:my-[200px] px-3">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="mb-5 md:order-2">
                <Image
                  src={SectionTwoImage}
                  alt="page_illustration_seller-at-work"
                  className="w-[250px] xl:w-[400px]"
                />
              </div>
              <div className="md:order-1 mt-[50px]">
                <h2 className="font-bold montserrat text-2xl lg:text-3xl text-center md:text-left my-5">
                  With Our E-commerce Store <br /> Maker.
                </h2>
                <p className="tracking-widest sm:w-[500px] text-center mx-auto md:mx-0 md:text-left">
                  Build, launch, and scale your online business effortlessly within minutes. Our
                  user-friendly platform empowers you to sell digital products with ease. From
                  eBooks to software, and more. Your success story starts here.
                </p>
                <div className="my-10 md:w-[180px]">
                  <Link href="/create-store">
                    <button
                      type="button"
                      className="w-full px-4 submit bg-pink-500 py-3 poppins font-bold text-[0.9rem] text-white capitalize"
                    >
                      Create Store
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="section-three my-[150px] md:my-[200px] px-3">
            <h2 className="font-bold text-2xl md:text-3xl text-center montserrat my-5">
              Sell varieties of Digital products.
            </h2>
            <div className="flex flex-col items-center mt-10">
              <div className="mb-10">
                <Image
                  src={SectionFiveImage}
                  alt="page-illustration"
                  className="block object-cover h-40 w-56"
                />
              </div>
              <div className="flex gap-y-12 flex-col">
                <div className="flex flex-col justify-between md:flex-row gap-y-8">
                  <div className="my-5 w-[90%] mx-auto md:mx-0 md:w-[45%]">
                    <div className="flex flex-col gap-y-2">
                      <Image
                        src={SoftwareImage}
                        alt="illustration_software"
                        className="object-cover w-[30px]"
                      />
                      <h3 className="font-bold text-[16px] montserrat">Software</h3>
                    </div>
                    <p className="tracking-widest mt-3">
                      Have a software you would like to sell? Deeco is the best place to do that
                      with our easy to navigate interface.
                    </p>
                  </div>
                  <div className="my-5 w-[90%] mx-auto md:mx-0 md:w-[45%]">
                    <div className="flex flex-col gap-y-2">
                      <Image
                        src={CourseImage}
                        alt="CourseImage"
                        className="object-cover w-[30px]"
                      />
                      <h3 className="font-bold text-[16px] montserrat">Courses</h3>
                    </div>
                    <p className="tracking-widest mt-3">
                      Have a Course you would like to sell? Deeco is the best place to do that with
                      our easy to navigate interface.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between md:flex-row gap-y-8">
                  <div className="my-5 w-[90%] mx-auto md:mx-0 md:w-[45%]">
                    <div className="flex flex-col gap-y-2">
                      <Image src={EbookImage} alt="Ebook-image" className="object-cover w-[30px]" />
                      <h3 className="font-bold text-[16px] montserrat">E-books</h3>
                    </div>
                    <p className="tracking-widest mt-3">
                      Have an E-book you would like to sell? Deeco is the best place to do that with
                      our easy to navigate interface.
                    </p>
                  </div>
                  <div className="my-5 w-[90%] mx-auto md:mx-0 md:w-[45%]">
                    <div className="flex flex-col gap-y-2">
                      <Image
                        src={MoreIcon}
                        alt="illustration_course"
                        className="object-cover w-[30px]"
                      />
                      <h3 className="font-bold text-[16px] montserrat">More</h3>
                    </div>
                    <p className="tracking-widest mt-3">
                      There is no limit to what you can sell on Deeco. feel free to hop in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-four my-[150px] md:my-[200px] px-3">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="mb-5">
                <Image
                  src={SectionFourImage}
                  alt="an ecommerce-image"
                  className="w-[250px] xl:w-[400px]"
                />
              </div>
              <div className="md:order-2 mt-[50px]">
                <h2 className="font-bold montserrat text-2xl lg:text-3xl text-center md:text-right my-5">
                  Build With Our E-commerce <br /> Themes.
                </h2>
                <p className="md:ml-auto tracking-widest sm:w-[500px] text-center mx-auto md:mx-0 md:text-right">
                  Just in case you prefer to have a stand-alone store with multi payment options
                  including cryptocurrency, we've also got you covered. Head to our theme
                  market-place where you'll find awesome e-commerce themes to power your store.
                </p>
                <div className="my-10 md:w-[180px] flex ml-auto">
                  <button
                    type="button"
                    className="w-full px-4 submit bg-pink-500 py-3 poppins font-bold text-[0.9rem] text-white capitalize"
                  >
                    Explore Templates
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="section-five md:mb-20 px-3">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="my-5 md:order-2">
                <Image
                  src={PaymentImage}
                  alt="payment-image"
                  className="block object-cover h-52 w-52 md:h-72 md:w-72"
                />
              </div>
              <div className="md:mr-28 my-5">
                <h2 className="font-bold montserrat text-2xl lg:text-3xl text-center md:text-left my-5">
                  Vast payment options.
                </h2>
                <p className="tracking-widest sm:w-[500px] text-center md:text-left mx-auto md:mx-0">
                  Whether you build a quick store in minute with our store-make, or you build with
                  our templates from the theme market-place, we've got you covered with a vast array
                  of payment options - including cryptocurrencies.
                </p>
                <span className="block text-xl text-center md:text-left my-16 poppins font-bold">
                  Buying(and selling) just got more awesome.
                </span>
              </div>
            </div>
          </section>
          <section className="section-six md:mb-64 px-3">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="md:order-2 md:w-[45%] flex flex-col items-center mb-5">
                <div className="mb-14">
                  <Image
                    src={BitcoinLogo}
                    alt="bitcoin-logo-image"
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
              <div className="mt-5 my-10 md:w-[45%]">
                <h2 className="font-bold montserrat text-2xl lg:text-3xl text-center md:text-left my-5">
                  Unrestricted payment Gateways
                </h2>
                <p className="tracking-widest sm:w-[500px] md:w-full text-center md:text-left">
                  We've integrated multiple payment gateways including{' '}
                  <span className="text-pink-400">cryptocurrencies</span> to ensure you can receive
                  payments from anywhere in the world. our local payment methods includes currencies
                  and cards like PayPal, Verve & master-card hence all customers can truly pay with
                  ease.
                </p>
              </div>
            </div>
          </section>
          <section className="section-seven px-3 my-[100px]">
            <div className="flex flex-col items-center mb-28">
              <h2 className="font-bold montserrat text-2xl lg:text-3xl text-center md:text-left my-5">
                Start Selling With Deeco Today.
              </h2>
              <p className="mb-10 capitalize text-center tracking-widest">
                Create your Account in just few minutes and Start Earning today!
              </p>
              <div className="w-full px-3 flex justify-center">
                <Link href="service-options">
                  <button
                    type="button"
                    className="px-10 poppins submit bg-pink-400 py-3 font-bold text-[0.9rem] text-white capitalize"
                  >
                    start your journey
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </MainAppLayout>
  );
}

export default Home;
