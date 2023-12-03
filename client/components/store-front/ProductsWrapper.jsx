import React from 'react';
import Link from 'next/link';
import ProductItem from './ProductItem';

function ProductsWrapper({ trendingProducts }) {
  return (
    <>
      <section className="products-wrapper mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
        {trendingProducts.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </section>
      <div className="proceed-btn-wrapper flex justify-center w-full mt-12">
        <Link href="/cart">
          <button
            type="button"
            className="btn--colors_outline border-[3px] font-bold montserrat px-[70px]  w-full sm:w-[350px] py-3"
          >
            Proceed to Cart
          </button>
        </Link>
      </div>
    </>
  );
}

export default ProductsWrapper;
