import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Footer from '../components/layout-components/Footer';
import { CartContext } from '../context/CartContext';

const DynamicThemeSwitcher = dynamic(() => import('../components/ThemeSwitcher'), {
  ssr: false
});

function Checkout({ product, allCountriesData }) {
  const { dbCart } = useContext(CartContext);

  const countriesData = allCountriesData.data.result;
  const [form, setForm] = useState({
    email: '',
    tel: '',
    country: '',
    state: '',
    address: ''
  });
  //   const [selectedCountry, setSelectedCountry] = useState('');
  const [requiredCountry, setRequiredCountry] = useState('');

  useEffect(() => {
    function queryCountries() {
      const selectedCountry = countriesData.find((country) => {
        return country.name === form.country;
      });
      console.log(requiredCountry);
      //   if (selectedCountry) {
      //     console.log(selectedCountry.states);
      //     const { states } = selectedCountry;
      //   }
      return selectedCountry;
    }
    setRequiredCountry(queryCountries());
  }, [countriesData, form.country, requiredCountry]);

  // if (dbCart.length === 0) {
  //   return (
  //     <div className="font-bold mt-12 min-h-screen text-2xl text--colors_primary text-center">
  //       Opps!!! <br />
  //       it seems Your Cart is Empty
  //     </div>
  //   );
  // }

  return (
    <>
      <section className="top-section flex justify-between items-center px-4 w-full sm:gap-4 md:gap-6 pt-6 md:pt-16 sm:w-4/5 sm:mx-auto md:w-full md:px-10 xl:w-4/5">
        <div className="flex gap-3 justify-between items-center">
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </Link>
          <div className="w-[40px] h-[40px] rounded-full p-2 shadow flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </div>
          <div className="payment-address">DEECO STORE</div>
        </div>
        <div className="theme-switcher">
          <DynamicThemeSwitcher />
        </div>
      </section>
      <main className="min-h-screen mt-8 md:mt-12 flex flex-col md:flex-row md:justify-between px-3 pt-6 sm:w-4/5 sm:mx-auto md:w-full md:px-10 xl:w-4/5 pb-20">
        <section className="checkout-left w-full md:w-[47%]">
          <section className="products-listing-wrapper h-[500px] overflow-auto pr-6">
            <div className="products-listing border-b mb-6">
              {dbCart ? (
                dbCart.map((checkoutProduct) => {
                  const { itemCategory, itemImage, itemName, itemDescription, itemPrice, id } =
                    checkoutProduct.item[0];
                  return (
                    <div
                      key={checkoutProduct.id}
                      className="product-card w-full flex justify-between mb-6"
                    >
                      <div className="product-image-wrapper w-[30%] h-[100px] flex flex-start pt-2">
                        <Image
                          src={itemImage}
                          width={60}
                          height={60}
                          alt="text-pic"
                          className="mx-auto"
                        />
                      </div>
                      <div className="w-[65%]">
                        <div className="flex justify-between">
                          <div className="flex product-title font-bold mb-2 w-[70%]">
                            {itemName}
                          </div>
                          <div className="w-[25%] font-bold text-right">${itemPrice}</div>
                        </div>
                        <div className="product-description mb-2 text-[12px] leading-[20px]">
                          {itemDescription}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  div
                  className="font-bold animate-pulse mt-12 text-2xl text--colors_primary text-center"
                >
                  Loading Your Checkout
                </div>
              )}
            </div>
            <div className="sub-total w-[65%] ml-auto flex justify-between pb-6 border-b">
              <span className="font-bold">SUB TOTAL: </span>
              <span className="font-bold">$200</span>
            </div>
            <div className="shipping w-[65%] ml-auto flex justify-between py-6 border-b">
              <div>
                <span className="font-bold">SHIPPING:</span>
                <br />{' '}
                <span className="text-[12px]">(To be delivered withing 3 working days) </span>
              </div>
              <span className="font-bold">free</span>
            </div>
            <div className="grand-total w-[65%] ml-auto flex justify-between py-6 border-b">
              <div className="font-bold">GRAND TOTAL</div>
              <span className="font-bold">$200</span>
            </div>
          </section>
        </section>
        <section className="checkout-right w-full h-[500px] md:w-[47%] flex flex-col justify-center">
          <div className=" min-h-[200px]">
            <h2 className="font-bold uppercase mb-4">Shipping Details</h2>
            <form action="">
              <div className="flex justify-between mt-8 w-full">
                <div className="input-group flex flex-col w-[47%]">
                  <label className="font-bold" htmlFor="email">
                    Email address
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        email: e.target.value
                      });
                    }}
                    name="email"
                    id="email"
                    className="py-3 border-b outline-none custom--input"
                  />
                </div>
                <div className="input-group flex flex-col w-[47%]">
                  <label className="font-bold" htmlFor="tel">
                    Phone
                  </label>
                  <input
                    value={form.tel}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        tel: e.target.value
                      });
                    }}
                    name="tel"
                    id="tel"
                    className="outline-none py-3 border-b custom--input"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-8 w-full">
                <div className="input-group flex flex-col w-[47%]">
                  <label className="font-bold" htmlFor="country">
                    Country
                  </label>
                  <select
                    value={form.country}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        country: e.target.value
                      });
                    }}
                    name="country"
                    id="country"
                    className="border-b outline-none py-3 custom--input"
                  >
                    <option value="-- select country --"> -- select country -- </option>
                    {countriesData.map((country) => {
                      // const countries = country.name.common;
                      //   console.log(country);
                      return (
                        <option key={country.id} value={country.name}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="input-group flex flex-col w-[47%]">
                  <label className="font-bold" htmlFor="state">
                    State
                  </label>
                  <select
                    value={form.state}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        state: e.target.value
                      });
                      //   setStateList(() => {
                      //     countriesData.find((country) => {
                      //       return country.name === form.country;
                      //     });
                      //   });
                    }}
                    name="state"
                    id="state"
                    className="border-b outline-none py-3 custom--input"
                  >
                    <option value=""> -- select state -- </option>
                    {!requiredCountry ? (
                      <option value="">state not selected</option>
                    ) : (
                      requiredCountry.states.map((state) => {
                        // const countries = country.name.common;
                        //   console.log(country);
                        return (
                          <option key={state.id} value={state.name}>
                            {state.name}
                          </option>
                        );
                      })
                    )}
                    {/* {allCountries.map((country) => {
                  // const countries = country.name.common;
                  // console.log(country.name.common);
                  return (
                    <option key={country.name.common} value={country.name.common}>
                      {country.name.common}
                    </option>
                  );
                })} */}
                  </select>
                </div>
              </div>
              <div className="input-group flex flex-col mt-8">
                <label className="font-bold" htmlFor="address">
                  Home address
                </label>
                <input
                  value={form.address}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      address: e.target.value
                    });
                  }}
                  name="address"
                  id="address"
                  className="py-3 border-b outline-none custom--input"
                />
              </div>
              <button
                type="submit"
                className="text-center w-full btn--colors_regular text--colors_default-invert px-6 py-3 mt-10 font-bold rounded"
              >
                Pay Total
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;

export async function getServerSideProps(context) {
  // const { params } = context;

  // const products = await fetch('https://fakestoreapi.com/products?limit=3');
  // const trendingProducts = await products.json();
  // console.log(trendingProducts);

  //   const countries = await fetch('https://restcountries.herokuapp.com/api/v1');
  //   const allCountries = await countries.json();
  //   //   console.log(allCountries);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b82146e93cmsha26c3db97b9579fp1bf884jsn5ce595f7e0ec',
      'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
    }
  };

  const data = await fetch(
    'https://countries-states-cities-dataset.p.rapidapi.com/list-countries-states',
    options
  );
  const allCountriesData = await data.json();

  return {
    props: {
      // trendingProducts,
      allCountriesData
    }
  };
}
