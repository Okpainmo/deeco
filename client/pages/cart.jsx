import React, { useState, useContext } from 'react';
import Link from 'next/link';
import MainAppLayout from '../components/layout-components/MainAppLayout';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { dbCart } = useContext(CartContext);
  // console.log(dbCart);
  const [productList, setProductList] = useState([]);

  if (dbCart && dbCart.length === 0) {
    return (
      <MainAppLayout>
        <div className="animate-pulse font-bold pt-40 min-h-[600px] text-2xl text--colors_primary text-center">
          Opps!!! <br />
          it seems Your Cart is Empty
        </div>
      </MainAppLayout>
    );
  }

  return (
    <MainAppLayout>
      <section className="px-3 min-h-[500px] w-full mt-6 md:pt-10 sm:w-4/5 sm:mx-auto md:w-full md:px-10 xl:w-4/5 pb-20">
        <section
          className="w-full text--colors_secondary montserrat px-3 py-6 sm:py-8 sm:px-12 dark:border min-h-screen"
          style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
        >
          <section className="mb-6 border-b flex justify-between items-center pb-4">
            <h1 className="text-xl sm:text-3xl font-bold">My Cart</h1>
            <Link href="/checkout">
              <button
                type="button"
                className="btn--colors_regular font-bold montserrat text--colors_default-invert rounded p-2 sm:px-4 sm:py-2 w-[130px] sm:w-[170px] text-[10px] md:text-[12px]"
              >
                proceed to checkout
              </button>
            </Link>
          </section>

          {dbCart ? (
            dbCart.map((dbItem) => {
              return (
                <CartItem
                  key={dbItem.id}
                  product={dbItem}
                  dbCart={dbCart}
                  productList={productList}
                  setProductList={setProductList}
                />
              );
            })
          ) : (
            <div
              div
              className="font-bold animate-pulse mt-12 text-2xl text--colors_primary text-center"
            >
              Loading Your Cart
            </div>
          )}
        </section>
      </section>
    </MainAppLayout>
  );
}

export default Cart;

// export async function getServerSideProps(context) {
//   // const { params } = context;

//   const products = await fetch('https://fakestoreapi.com/products?limit=3');
//   const trendingProducts = await products.json();

//   return {
//     props: {
//       trendingProducts
//     }
//   };
// }
