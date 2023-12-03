import React, { useContext, useState, useEffect } from 'react';
import HomeHero from '../../../components/store-front/HomeHero';
import MainAppLayout from '../../../components/store-front/layout/MainAppLayout';
import ProductsSection from '../../../components/store-front/ProductsSection';
import { ContractContext } from '../../../context/ContractContext';
// import { CartContext } from '../context/CartContext';

function Home({ trendingProducts }) {
  const [dbCart, setDbCart] = useState('');

  return (
    <MainAppLayout>
      {/* <HomeHero /> */}
      <ProductsSection trendingProducts={trendingProducts} />
    </MainAppLayout>
  );
}

export default Home;

export async function getServerSideProps(context) {
  // const { params } = context;
  const response = await fetch('https://fakestoreapi.com/products?limit=9');
  const trendingProducts = await response.json();

  // const fetchResponse = await fetch('https://api.coingecko.com/api/v3/coins/matic-network');
  // const coinData = await fetchResponse.json();
  // console.log(trendingProducts);

  /* ** dev: trying out fetching firebase data with SSR - odd I guess ** */

  // async function getCart() {
  //   await getDocs(collection(db, 'userCart')).then((data) => {
  //     const dbCartData = data.docs.map((item) => {
  //       return { ...item.data(), id: item.id };
  //     });

  //     // setDbCart(dbCartData);

  //     // console.log(
  //     //   data.docs.map((item) => {
  //     //     return { ...item.data(), id: item.id };
  //     //   })
  //     // );

  //     // setDbCart(...item.data);
  //     // console.log(dbCartData);
  //   });
  // }

  // console.log(coinData);
  return {
    props: {
      trendingProducts
    }
  };
}
