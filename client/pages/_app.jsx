import React, { createContext, useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import CartContextProvider from '../context/CartContext';
import ContractContextProvider from '../context/ContractContext';
import '../styles/globals.css';

// import ThemeContextProvider from '../../bin/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContractContextProvider>
      <CartContextProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              padding: '24px',
              backgroundColor: '#FFFFFF'
            }
          }}
        />
        <main className="bg--default text--colors_default nunito-sans">
          <Component {...pageProps} />
        </main>
      </CartContextProvider>
    </ContractContextProvider>
  );
}

export default MyApp;
