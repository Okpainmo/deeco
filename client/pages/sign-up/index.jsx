'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/layout/Header';
import GoggleImage from '../../assets/images/goggle.png';
import { isValidEmail, isValidPassword } from '../../utils/validation';
// import { FaGoogle } from 'react-icons/fa';

function SignUp() {
  const router = useRouter();
  const initialFormDataValue = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  };

  const initialFormDataSet = {
    password: false,
    confirmPassword: false
  };

  const [formData, setFormData] = useState(initialFormDataValue);
  const [formError, setFormError] = useState(initialFormDataSet);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormError(initialFormDataSet);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPassword(formData.password)) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        password: true
      }));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        confirmPassword: true
      }));
      return;
    }

    try {
      const res = await fetch(`https:/deeco-backend-server.onrender.com/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      });

      const data = await res.json();

      if (data.response && data.responseMessage === 'user sign-up/registration successful') {
        router.push(`/dashboard`);
      }
    } catch (e) {
      throw new Error(e);
    }
  };
  return (
    <main className="min-h-screen px-3 py-8">
      <Header />
      <div className="border-2 p-6 mt-8 sm:mx-auto sm:w-[450px] lg:w-[1000px]">
        <div className="login-option-wrapper flex flex-col mb-4 lg:mb-2">
          <h3 className="capitalize text-black font-bold text-2xl">create your deeco account</h3>
          <p className="opacity-100 text-md  text-[#171A1FFF]">
            Already have an account?{' '}
            <Link href="/" className="no-underline text-blue-300 font-bold">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col  lg:flex-row w-full">
          <section className="section-one-info w-full">
            <form className="w-full text-[14px]" onSubmit={handleSubmit}>
              <div className="input-group for-email mb-5 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="flex gap-6 align-center opacity-70 focus-within:text-gray-600 font-bold"
                >
                  Email address*
                </label>
                <div className="relative">
                  <input
                    className="px-4 py-2  text-[#BDC1CAF] placeholder-gray-400 
                    appearance-none w-full block focus:outline-none border border-[#C2C2C2] rounded-sm h-12"
                    required
                    name="email"
                    value={formData.email}
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="input-group for-Full-Name mb-5 flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="flex gap-6 align-center opacity-70 focus-within:text-gray-600 font-bold"
                >
                  Full Name*
                </label>
                <div className="relative">
                  <input
                    className="px-4 py-2  text-[#BDC1CAF] placeholder-gray-400 
                    appearance-none w-full block focus:outline-none border border-[#C2C2C2] rounded-sm h-12"
                    required
                    name="fullName"
                    value={formData.fullName}
                    type="text"
                    placeholder="Enter fullname"
                    id="fullName"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="input-group for-password mb-5 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="flex gap-6 align-center opacity-70 focus-within:text-gray-600 font-bold"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    className="px-4 py-2  text-[#BDC1CAF] placeholder-gray-400 
                    appearance-none w-full block focus:outline-none border border-[#C2C2C2] rounded-sm h-12"
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter password"
                    id="password"
                    onChange={handleInputChange}
                  />
                </div>
                <ul className={`${formError.password ? 'block' : 'hidden'} text-red-500`}>
                  <li>At least one digit/number.</li>
                  <li>At least one lowercase letter.</li>
                  <li>At least one uppercase letter.</li>
                  <li>At least one special character</li>
                  <li>The total length of the password must be at least 8 characters.</li>
                </ul>
                <p className={`${formError.confirmPassword ? 'block' : 'hidden'} text-red-500`}>
                  Passwords mismattch
                </p>
              </div>
              <div className="input-group for-password mb-5 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="flex gap-6 align-center opacity-70 focus-within:text-gray-600 font-bold"
                >
                  Confirm Password*
                </label>
                <div className="relative">
                  <input
                    className="px-4 py-2  text-[#BDC1CAF] placeholder-gray-400 
                    appearance-none w-full block focus:outline-none border border-[#C2C2C2] rounded-sm h-12"
                    required
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm password"
                    id="confirmPassword"
                    onChange={handleInputChange}
                  />
                </div>
                <p className={`${formError.confirmPassword ? 'block' : 'hidden'} text-red-500`}>
                  Passwords mismattch
                </p>
              </div>
              <div className="submit-button-wrapper mb-3">
                <button
                  type="submit"
                  className="w-full px-4 submit bg-pink-400 py-3 font-bold poppins rounded text-[0.9rem] text-white capitalize"
                >
                  sign up
                </button>
              </div>
            </form>
            <div className="alternative-sign-up-introduction">
              <div className="inline-flex items-center justify-center w-full">
                <div
                  className=" before:w-[70px] before:h-[1px] before:bg-gray-400 before:inline-block before:translate-y-2 text-[#6F7787FF] font-bold flex 
                  justify-center  after:w-[70px] after:h-[1px] after:bg-gray-400 after:inline-block after:translate-y-2"
                >
                  <div className="px-[4px] sm:px-1 text-[8px] text-xs">or continue with</div>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <Link href="/log-in" className="no-underline text-blue-300 font-bold">
                  <Image src={GoggleImage} alt="goggle" className="block h-10 w-10" />
                </Link>{' '}
              </div>
            </div>
          </section>
          <div className="hidden lg:block mx-10 border-l border-gray-500 h-96" />
          <section className="section-two-info hidden lg:block ">
            <h2 className="text-black text-lg font-bold">Join thousand of users!</h2>
            <p className="mb-4">
              Deeco is your e-commerce store builder to sell any kind of digital products or
              services to anyone anywhere in the world, with various payments options including
              <span className="text-pink-400"> blockchain</span>{' '}
            </p>
            <ul className="list-disc ml-10">
              <li className="mb-2">Easy storee setup</li>
              <li className="mb-2">Buy and sell with crypto and any other fiat currency</li>
              <li className="mb-2">Create landing and sell pages</li>
              <li className="mb-2">Dashboard analytics</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
export default SignUp;
