import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doc, collection, addDoc, getDocs, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { ContractContext } from '../../context/ContractContext';
import { dummyProductImage } from '../../assets/images/dummyProductImage.png';
// import testPic from '../assets/images/dpic-1.jpg';

function ProductItem({ product }) {
  const {
    productName,
    productDescription,
    productPriceInUSD,
    productId: _id,
    sellerId: createdBy
  } = product;
  const minifiedPrice = productPriceInUSD / 100;
  const realPrice = Number(minifiedPrice.toFixed(3));
  const [item, setItem] = useState([]);
  const { connectionStatus } = useContext(ContractContext);

  // const [cart, setCart] = useState([]);

  const { dbCart } = useContext(CartContext);

  useEffect(() => {
    //  price is minified so that I can be able to test payments with small amount of matic tokens

    const cartItem = {
      itemName: productName,
      itemDescription: productDescription,
      // itemCategory: category,
      itemPrice: realPrice,
      itemImage: dummyProductImage
      // quantity: '',
      // total: ''
    };

    setItem([cartItem]);
  }, [productDescription, productName, realPrice]);

  async function cartHandler() {
    const userWalletAddress = await window.ethereum.request({ method: 'eth_accounts' });
    const cartId = `userCart_${userWalletAddress[0]}`;

    if (typeof window.ethereum !== 'undefined' && userWalletAddress.length !== 0) {
      await addDoc(collection(db, cartId), {
        item
      });
      // console.log(cartId);
    } else {
      alert('Please connect your wallet first');
    }
  }

  return (
    <div
      className="product-card p-6 pb-10 dark:border bg-glass"
      style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
    >
      <div className="product-details min-h-[400px]">
        <div className="product-category text-[14px] text-right mb-6 font-bold">category</div>
        <div className="product-image-wrapper w-full min-h-[180px] flex items-center">
          <Image
            src={dummyProductImage}
            width={100}
            height={100}
            alt="text-pic"
            className="mx-auto"
          />
        </div>
        <div className="product-name text-[18px] font-bold mt-3 montserrat min-h-[60px] flex items-center">
          {productName.length > 50 ? `${productName.slice(0, 50)}...` : productName}
        </div>
        <div className="product-description mt-2 text-[13px]">{`${productDescription.slice(
          0,
          80
        )}...`}</div>
        <div className="mt-2 flex justify-between items-center">
          <div className="product-price montserrat font-bold">{realPrice} MAT</div>
          <Link className="text--colors_primary text-[12px] underline hidden" href="product">
            view product
          </Link>
        </div>
      </div>
      <button
        onClick={cartHandler}
        type="button"
        className="text-center w-full btn--colors_regular text--colors_default-invert px-6 py-3 mt-3 font-bold"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
