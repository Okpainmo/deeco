import React, { useContext, useState, useEffect } from 'react';
import HomeHero from '../../../components/store-front/HomeHero';
import MainAppLayout from '../../../components/store-front/layout/MainAppLayout';
import ProductsSection from '../../../components/store-front/ProductsSection';
import { ContractContext } from '../../../context/ContractContext';
import { baseAPI_URL } from '../../../config';
// import { CartContext } from '../context/CartContext';

function Home({ userStoreData }) {
  const [dbCart, setDbCart] = useState('');
  console.log(userStoreData.response.storeData.products);

  return (
    <MainAppLayout>
      {/* <HomeHero /> */}
      <ProductsSection userStoreData={userStoreData} />
    </MainAppLayout>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(`${baseAPI_URL}/api/v1/store/get-all-store-data/${params.storeId}`);

  const userStoreData = await response.json();

  return {
    props: {
      userStoreData
    }
  };
}
