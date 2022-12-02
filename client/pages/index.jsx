import React, { useContext } from 'react';
import HomeHero from '../components/HomeHero';
import MainAppLayout from '../components/layout-components/MainAppLayout';
import ProductsSection from '../components/ProductsSection';
import { CartContext } from '../context/CartContext';

function Home({ trendingProducts }) {
  // const number = useContext(CartContext);
  console.log(trendingProducts);

  return (
    <MainAppLayout>
      <HomeHero />
      <ProductsSection trendingProducts={trendingProducts} />
    </MainAppLayout>
  );
}

export default Home;

export async function getServerSideProps(context) {
  // const { params } = context;
  const response = await fetch('https://fakestoreapi.com/products?limit=9');
  const trendingProducts = await response.json();
  // console.log(trendingProducts);
  return {
    props: {
      trendingProducts
    }
  };
}
