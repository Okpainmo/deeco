import { useState } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = () => {
    router.push('/signup/next-stage');
  };

  return (
    <main className="bg-gray-100 flex justify-evenly">
      <div className="w-[30%] lg:flex items-end justify-end hidden mb-2 ">
        <Image src="/images/undraw_mobile_user.png" alt="Mobile User" width={100} height={200} />
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[40%] border rounded-sm bg-white shadow-md p-4 my-8 md:p-8">
        <h1 className="font-bold text-3xl text-center mt-4">Log in to Deeco</h1>
        <h1 className="text-sm text-center py-6">
          Don't have an account?
          <span className="text-[#5D5FEF]"> Create one for free</span>
        </h1>
        <form className="">
          <div className="flex flex-col mb-4">
            <label className="text-base font-medium pb-1">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your username"
              className="bg-gray-100 outline-none p-4 rounded-sm border border-gray-400"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-base font-medium pb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your correct password"
              className="bg-gray-100 outline-none p-4 rounded-sm border border-gray-400"
            />
          </div>
          <p className="text-end text-sm text-[#5D5FEF]">Forgot Password?</p>
          <button
            type="button"
            className="bg-[#EF5DA8] text-white w-[100%] p-4 rounded-sm shadow-md mt-10 mb-6"
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="flex items-center justify-between w-full md:w-[80%]">
            <div className="w-[31%]">
              <Image
                src="/images/Line.png"
                alt="line"
                className="w-[100%] text-center"
                width={100}
                height={200}
              />
            </div>
            <p className="text-xs lg:text-sm text-center text-gray-400 w-[32%]">Or continue with</p>
            <div className="w-[31%]">
              <Image
                src="/images/Line.png"
                alt="line"
                className="w-[100%] text-center"
                width={100}
                height={200}
              />
            </div>{' '}
          </div>
          <div className="my-6">
            <Image src="/images/devicon_google.png" alt="google_logo" width={100} height={200} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
