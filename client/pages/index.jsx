import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { isValidEmail } from '../utils/validation';
import MobileUser from '../assets/images/undraw_mobile_user.png';
import GoogleIcon from '../assets/images/devicon_google.png';
import Line from '../assets/images/line.png';

function LoginPage() {
  const router = useRouter();
  const initialFormData = {
    username: '',
    password: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.username)) {
      setFormError(true);
      return;
    }

    try {
      const res = await fetch(`https:/deeco-backend-server.onrender.com/api/v1/auth/log-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.username,
          password: formData.password
        })
      });

      const data = await res.json();

      if (data.response && data.responseMessage === 'user logged in successfully') {
        router.push(`/dashboard`);
      } else {
        setFormError(true);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <main className="bg-gray-100 flex justify-evenly">
      <div className="w-[30%] lg:flex items-end justify-end hidden mb-2 ">
        <Image src={MobileUser} alt="Mobile User" />
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[40%] border rounded-sm bg-white shadow-md p-4 my-8 md:p-8">
        <h1 className="font-bold text-3xl text-center mt-4">Log in to Deeco</h1>
        <h1 className="text-sm text-center py-6">
          Don't have an account?
          <span className="text-[#5D5FEF]"> Create one for free</span>
        </h1>
        <form className="" onSubmit={handleSubmit} method="POST">
          <div className="flex flex-col mb-4">
            <label className="text-base font-medium pb-1">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your username"
              className="bg-gray-100 outline-none p-4 rounded-sm border border-gray-400"
              required
            />
            <p className={`${formError ? 'block' : 'hidden'} text-red-500`}>
              Invalid email address
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-base font-medium pb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Enter your correct password"
              className="bg-gray-100 outline-none p-4 rounded-sm border border-gray-400"
              required
            />
            <p className={`${formError ? 'block' : 'hidden'} text-red-500`}> Invalid password</p>
          </div>
          <p className="text-end">
            <Link href="/sign-up" className=" mr-auto text-sm text-[#5D5FEF]">
              Forgot Password?
            </Link>
          </p>
          <button
            type="submit"
            className="bg-[#EF5DA8] text-white w-[100%] p-4 rounded-sm shadow-md mt-10 mb-6"
          >
            Log in
          </button>
        </form>
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="flex items-center justify-between w-full md:w-[80%]">
            <div className="w-[31%]">
              <Image src={Line} alt="line" className="w-[100%] text-center" />
            </div>
            <p className="text-xs lg:text-sm text-center text-gray-400 w-[32%]">Or continue with</p>
            <div className="w-[31%]">
              <Image src={Line} alt="line" className="w-[100%] text-center" />
            </div>
          </div>
          <div className="my-6">
            <Image src={GoogleIcon} alt="google_logo" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
