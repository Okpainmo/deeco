import React from 'react';
import ProductsIntro from './ProductsIntro';
import ProductsWrapper from './ProductsWrapper';

function ProductsSection({ trendingProducts }) {
  return (
    <section className="px-3 min-h-[500px] w-full mt-6 md:pt-10 sm:w-4/5 sm:mx-auto md:w-full md:px-10 xl:w-4/5 pb-20">
      <ProductsIntro />
      <ProductsWrapper trendingProducts={trendingProducts} />
    </section>
  );
}

export default ProductsSection;
