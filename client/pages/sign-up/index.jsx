import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/layout/Header';
import GoggleImage from '../../assets/images/goggle.png';
// import { FaGoogle } from 'react-icons/fa';

function SignUp() {
  return (
    <main className="min-h-screen mt-[20px] px-3 sm:mx-auto sm:w-[450px] lg:w-[800px]">
      <Header />
      <div className="border-2 p-4">
        <div className="login-option-wrapper flex flex-col mb-4 lg:mb-2">
          <h3 className="capitalize text-black font-bold text-base">create your deeco account</h3>
          <p className="opacity-100 text-sm  text-[#171A1FFF]">
            Already have an account?{' '}
            <Link href="/sign-in" className="no-underline text-blue-300 font-bold">
              Sign in
            </Link>{' '}
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row w-full">
          <section className="section-one-info w-full">
            <form className="w-full text-[12px]">
              <div className="input-group for-email mb-5 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="flex gap-6 align-center opacity-70 focus-within:text-gray-600 font-bold"
                >
                  Email address*
                </label>
                <div className="relative">
                  <input
                    className="p-1 border-gray-900 py-2 bg-[#F3F4F6FF] text-[#BDC1CAF] placeholder-gray-400 
                appearance-none w-full block focus:outline-none border-none bg-gray-100 rounded-sm"
                    required
                    type="email"
                    placeholder="Enter email"
                    id="email"
                  />
                </div>
              </div>
              <div className="input-group for-Full-Name mb-5 flex flex-col gap-2">
                <label
                  htmlFor="full-name"
                  className="flex gap-6 align-center opacity-70 focus-within:text-gray-600 font-bold"
                >
                  Full Name*
                </label>
                <div className="relative">
                  <input
                    className="p-1 border-gray-900 py-2 bg-[#F3F4F6FF] text-[#BDC1CAF] placeholder-gray-400 
                appearance-none w-full block focus:outline-none border-none bg-gray-100 rounded-sm"
                    required
                    type="email"
                    placeholder="Enter email"
                    id="email"
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
                    className="p-1 border-gray-900 py-2  bg-[#F3F4F6FF] text-[#BDC1CAF] placeholder-gray-400 
                appearance-none w-full block focus:outline-none border-none bg-gray-100 rounded-sm"
                    required
                    type="password"
                    placeholder="Enter password"
                    id="password"
                  />
                </div>
              </div>
              <div className="submit-button-wrapper mb-3">
                <button
                  type="button"
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
              <div className="flex justify-center my-5">
                <Link href="/log-in" className="no-underline text-blue-300 font-bold">
                  <Image src={GoggleImage} alt="goggle" className="block h-10 w-10" />
                </Link>{' '}
              </div>
            </div>
          </section>
          <div class="hidden lg:block mx-10 border-l border-gray-500 h-96" />
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
