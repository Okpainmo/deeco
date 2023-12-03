import React, { useContext } from 'react';
import Link from 'next/link';
import MainAppLayout from '../../components/store-front/layout/MainAppLayout';
import { CartContext } from '../../context/CartContext';

function OrderStatus() {
  const { orderSuccess, setOrderSuccess } = useContext(CartContext);

  if (!orderSuccess) {
    return (
      <MainAppLayout>
        <main className="mt-32 mb-12 h-[500px] px-5">
          <section className="order-success">
            <section className="order-badge flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </section>
            <section className="text-center">
              <h3 className="mt-4 uppercase text-xl font-bold">Thanks a lot for your patronage</h3>
              <p className=" pt-2 w-full md:w-[80%] lg:w-[60%] text-center mx-auto">
                Your order has been created. <br /> We will send you an order confirmation with more
                details and tracking info via email shortly.
              </p>
            </section>
            <section className="flex justify-center items-center">
              <Link
                onClick={() => {
                  setOrderSuccess(false);
                }}
                href="all-products"
                type="button"
                className="text-center w-full sm:w-[400px] mx-auto btn--colors_regular text--colors_default-invert px-6 py-3 mt-6 font-bold rounded"
              >
                continue shopping
              </Link>
            </section>
          </section>
        </main>
      </MainAppLayout>
    );
  }
  return (
    <MainAppLayout>
      <main className="mt-32 mb-12 h-[500px] px-5">
        <section className="hidden order-failure">
          <section className="order-badge flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </section>
          <section className="text-center">
            <h3 className="mt-4 uppercase text-xl font-bold">Your order was unsuccessful</h3>
            <p className=" pt-2 w-full md:w-[80%] lg:w-[60%] text-center mx-auto">
              Your order not successful. <br /> We are sorry about this. Please kindly drop an
              error-report via our email -{' '}
              <span className="underline">customersupport@deeco.com</span>.
            </p>
          </section>
          <section className="flex justify-center items-center">
            <Link
              onClick={() => {
                setOrderSuccess(false);
              }}
              href="all-products"
              type="button"
              className="text-center w-full sm:w-[400px] mx-auto btn--colors_regular text--colors_default-invert px-6 py-3 mt-6 font-bold rounded"
            >
              continue shopping
            </Link>
          </section>
        </section>
        <section className={!orderSuccess && `hidden order-success`}>
          <section className="order-badge flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </section>
          <section className="text-center">
            <h3 className="mt-4 uppercase text-xl font-bold">Thanks a lot for your patronage</h3>
            <p className=" pt-2 w-full md:w-[80%] lg:w-[60%] text-center mx-auto">
              Your order has been created. <br /> We will send you an order confirmation with more
              details and tracking info via email shortly.
            </p>
          </section>
          <section className="flex justify-center items-center">
            <Link
              onClick={() => {
                setOrderSuccess(false);
              }}
              href="all-products"
              type="button"
              className="text-center w-full sm:w-[400px] mx-auto btn--colors_regular text--colors_default-invert px-6 py-3 mt-6 font-bold rounded"
            >
              continue shopping
            </Link>
          </section>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default OrderStatus;
