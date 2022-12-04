import React, { createContext, useContext } from 'react';
import '../styles/globals.css';
import CartContextProvider from '../context/CartContext';
import ContractContextProvider from '../context/ContractContext';

// import ThemeContextProvider from '../../bin/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContractContextProvider>
      <CartContextProvider>
        <main className="bg--default text--colors_default nunito-sans">
          <Component {...pageProps} />
        </main>
      </CartContextProvider>
    </ContractContextProvider>
  );
}

export default MyApp;
