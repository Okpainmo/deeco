import React from 'react';

function ProductsIntro({ allProductsPage }) {
  if (allProductsPage) {
    return (
      <section
        className="w-full text--colors_secondary text-center montserrat px-3 py-6 sm:py-8 sm:px-12"
        style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">All Products</h1>
        <div className="products-intro-text text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima aliquam est vel
          placeat quo mollitia? Ut, quis veniam enim pariatur reiciendis iste, voluptatem quos
          laboriosam expedita vero et dicta?
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full text--colors_secondary montserrat px-3 py-6 sm:py-8 sm:px-12"
      style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
    >
      <section className="flex gap-12 justify-center">
        {/* <div className="store-logo flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 sm:w-16 md:w-24 md:h-24 sm:h-16 translate-y-[2px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div> */}
        <div className="store-info">
          <h1 className="before:bg-pink-500 before:inline-block before:w-[20px] before:h-[20px] before:mr-[16px] text-xl sm:text-3xl font-bold mb-3">
            Tunji's Digitals
          </h1>
          <div className="products-intro-text text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima aliquam est vel
            placeat quo mollitia? Ut, quis veniam enim pariatur reiciendis iste, voluptatem quos
            laboriosam expedita vero et dicta?
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProductsIntro;
