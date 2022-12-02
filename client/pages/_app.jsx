import React from 'react';
import '../styles/globals.css';
import CartContextProvider from '../context/CartContext';
// import ThemeContextProvider from '../../bin/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <main className="bg--default text--colors_default nunito-sans">
        <Component {...pageProps} />
      </main>
    </CartContextProvider>
  );
}

export default MyApp;
