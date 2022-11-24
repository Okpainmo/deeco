import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Home() {
  const number = useContext(CartContext);
  console.log(number);

  return <div className="text--colors_primary">Testing app for tailwind CSS setup {number}</div>;
}

export default Home;
