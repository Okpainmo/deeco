import React from 'react';
import Link from 'next/link';
import MainAppLayout from '../components/layout-components/MainAppLayout';
import ProductsIntro from '../components/ProductsIntro';
// import ProductsWrapper from '../components/ProductsWrapper';
import ProductItem from '../components/ProductItem';
import testPic from '../assets/images/dpic-1.jpg';

function ProductsSection({ allProducts }) {
  const allProductsPage = true;

  return (
    <MainAppLayout>
      <section className="px-3 min-h-[500px] w-full mt-6 md:pt-10 sm:w-4/5 sm:mx-auto md:w-full md:px-10 xl:w-4/5 pb-20">
        <ProductsIntro allProductsPage />
        <section className="products-wrapper mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {allProducts.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </section>
        <Link href="/cart" className="load-more-btn-wrapper flex justify-center">
          <button
            type="button"
            className="btn--colors_outline border-[3px] font-bold montserrat px-10 w-[350px] py-3"
          >
            Proceed to cart
          </button>
        </Link>
      </section>
    </MainAppLayout>
  );
}

export default ProductsSection;

export async function getServerSideProps(context) {
  // const { params } = context;
  const response = await fetch('https://fakestoreapi.com/products');
  const allProducts = await response.json();

  // const fetchResponse = await fetch('https://api.coingecko.com/api/v3/coins/matic-network');
  // const coinData = await fetchResponse.json();
  // console.log(trendingProducts);
  return {
    props: {
      allProducts
    }
  };
}
