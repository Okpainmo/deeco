import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doc, collection, addDoc, getDocs, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { CartContext } from '../context/CartContext';
import testPic from '../assets/images/dpic-1.jpg';
import ProductItem from './ProductItem';

function CartItem({ product }) {
  const { dbCart } = useContext(CartContext);
  console.log(dbCart);
  const { itemCategory, itemImage, itemName, itemDescription, itemPrice, id } = product.item[0];

  console.log(product.id);

  function deleteItem() {
    // const collectionById = doc(db, 'userCart', id);

    deleteDoc(doc(db, 'userCart', product.id)).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="product-card pb-5 border-b mb-6">
      <div className="product-details min-h-[250px] flex flex-col md:flex-row gap-8 pb-6">
        <section className="w-full md:w-1/3 flex justify-center">
          <div className="product-image-wrapper min-h-[180px] flex items-center">
            <Image src={itemImage} width={100} height={200} alt="product-photo" />
          </div>
        </section>
        <section className="w-full md:w-2/3">
          <div className="product-category text-[14px] mb-3">
            <span className="font-bold">Category:</span> {itemCategory}
          </div>
          <div className="product-name text-[18px] font-bold mt-3 montserrat pt-2 pb-4 flex items-center">
            {itemName}
          </div>
          <p className="product-description text-[13px]">{itemDescription}</p>
          <div className="product-price montserrat font-bold mt-2">${itemPrice}</div>
          <div className="quantity-selector mt-3 mb-5 border-t pt-6 items-center hidden">
            <span className="mr-3">Quantity</span>
            <div className="flex ml-3">
              <button
                // onClick={decrementQuantity}
                type="button"
                className="py-2 px-6 border text-[20px] font-bold text--colors_secondary"
              >
                -
              </button>
              <div className="py-2 px-4 border-t border-b flex items-center">lorem</div>
              <button
                // onClick={incrementQuantity}
                type="button"
                className="py-2 px-6 border text-[20px] font-bold text--colors_secondary"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              deleteItem(id);
            }}
            type="button"
            className="text-center w-full btn--colors_regular text--colors_default-invert px-6 py-3 mt-3 font-bold rounded"
          >
            Remove from Cart
          </button>
        </section>
      </div>
    </div>
  );
}

export default CartItem;
