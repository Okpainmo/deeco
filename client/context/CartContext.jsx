import React, { createContext, useState, useEffect } from 'react';
import { doc, collection, addDoc, getDocs, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [dbCart, setDbCart] = useState('');

  async function getCart() {
    await getDocs(collection(db, 'userCart')).then((data) => {
      const dbCartData = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });

      setDbCart(dbCartData);

      // console.log(
      //   data.docs.map((item) => {
      //     return { ...item.data(), id: item.id };
      //   })
      // );

      // setDbCart(...item.data);
      // console.log(dbCartData);
    });
  }

  useEffect(() => {
    getCart();
    // setDbCart(getDocs);
  }, []);

  // console.log(dbCart);

  const number = 5;

  return (
    <CartContext.Provider value={{ number, dbCart, setDbCart }}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
