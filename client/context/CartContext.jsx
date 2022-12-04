import React, { createContext, useState, useEffect, useContext } from 'react';
import { doc, collection, addDoc, getDocs, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { ContractContext } from './ContractContext';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [dbCart, setDbCart] = useState([]);
  const { connectionStatus } = useContext(ContractContext);

  async function getCart() {
    const userWalletAddress = await window.ethereum.request({ method: 'eth_accounts' });
    const cartId = `userCart_${userWalletAddress[0]}`;

    if (typeof window.ethereum !== 'undefined' && userWalletAddress.length !== 0) {
      await getDocs(collection(db, cartId)).then((data) => {
        const dbCartData = data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        // console.log(dbCartData);
        if (dbCartData !== undefined) {
          setDbCart(dbCartData);
        } else {
          console.log('waiting for dbCartData');
        }
      });
    }
  }

  useEffect(() => {
    getCart();
    // setDbCart(getDocs);
  }, [dbCart, connectionStatus]);

  // console.log(dbCart);

  const number = 5;

  return (
    <CartContext.Provider value={{ number, dbCart, setDbCart }}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
