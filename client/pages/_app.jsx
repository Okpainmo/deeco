import React from 'react';
import '../styles/globals.css';
import CartContextProvider from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
