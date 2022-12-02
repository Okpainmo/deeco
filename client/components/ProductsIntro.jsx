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
      className="w-full text--colors_secondary text-center montserrat px-3 py-6 sm:py-8 sm:px-12"
      style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Trending Products</h1>
      <div className="products-intro-text text-[14px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima aliquam est vel
        placeat quo mollitia? Ut, quis veniam enim pariatur reiciendis iste, voluptatem quos
        laboriosam expedita vero et dicta?
      </div>
    </section>
  );
}

export default ProductsIntro;
