import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { isValidEmail } from '../../utils/validation';
import MobileUser from '../../assets/images/undraw_mobile_user.png';
import GoogleIcon from '../../assets/images/devicon_google.png';
import Line from '../../assets/images/line.png';
import { GlobalContext } from '../../context/GlobalContext';
import { baseAPI_URL } from '../../config';

function LoginPage() {
  const { toggleIsLoggedIn } = useContext(GlobalContext);
  const router = useRouter();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const logInUser = async (e) => {
    e.preventDefault();

    console.log(loginForm);
    if (loginForm.email === '' || loginForm.password === '') {
      return toast.error('please fill in all fields', { duration: 3000 });
    }

    const toastId = toast.loading('logging in...');

    try {
      const loggedInUser = await axios.post(`${baseAPI_URL}/api/v1/auth/log-in`, loginForm, {
        withCredentials: true
      });

      if (loggedInUser && loggedInUser.data.responseMessage === 'user logged in successfully') {
        toast.success('login successful', {
          id: toastId,
          duration: 4000
        });

        localStorage.setItem('userToken', `${loggedInUser.data.response.accessToken}`);
        localStorage.setItem('userEmail', `${loggedInUser.data.response.user.email}`);

        const userToken = localStorage.getItem('userToken');
        const userEmail = localStorage.getItem('userEmail');

        console.log(userToken, userEmail);

        console.log(loggedInUser);

        const userName = loggedInUser.data.response.user.fullName;
        // console.log(userName);
        localStorage.setItem('userName', `${userName}`);

        toggleIsLoggedIn();

        setTimeout(() => {
          router.push('/');
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        'login failed... please try again with correct credentials or check you network',
        {
          id: toastId,
          duration: 4000
        }
      );
    }
  };

  return (
    <main className="flex justify-evenly min-h-screen px-3 xsm:p-[20px] text-[12px] relative nunito_sans">
      <div className="lg:flex items-end justify-end mb-2 absolute bottom-[300px] sm:bottom-[100px] left-[100px] z-10">
        <Image src={MobileUser} alt="page-illustration_user-with-mobile-device" />
      </div>
      <div
        className="w-full xsm:w-[400px] border rounded-sm p-6 xsm:p-8 mt-20 z-20"
        style={{
          alignSelf: 'flex-start',
          boxShadow: 'rgb(238, 240, 249) 0px 0px 20px',
          backgroundColor: 'rgba(255, 255, 255, .95)'
        }}
      >
        <h1 className="font-bold text-2xl text-center mt-4 poppins">Deeco/Log-in</h1>
        <h1 className="text-[14px] text-center py-6">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-[#5D5FEF]">
            Create one for free
          </Link>
        </h1>
        <form>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="text-gray-600 text-[12px] font-bold poppins pb-1">
              Email *
            </label>
            <input
              name="email"
              value={loginForm.email}
              onChange={(e) => {
                setLoginForm({
                  ...loginForm,
                  email: e.target.value
                });
              }}
              type="text"
              placeholder="Enter your username"
              className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400"
              required
              id="email"
            />
            {/* <p className={`${formError ? 'block' : 'hidden'} text-red-500`}>
              Invalid email address
            </p> */}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-gray-600 text-[12px] font-bold poppins pb-1">
              Password *
            </label>
            <input
              name="password"
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm({
                  ...loginForm,
                  password: e.target.value
                });
              }}
              type="password"
              placeholder="Enter your correct password"
              className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400"
              required
              id="password"
            />
            {/* <p className={`${formError ? 'block' : 'hidden'} text-red-500`}> Invalid password</p> */}
          </div>
          <p className="text-end">
            <Link href="/sign-up" className=" mr-auto text-sm text-[#5D5FEF]">
              Forgot Password?
            </Link>
          </p>
          <button
            type="submit"
            className="bg-[#EF5DA8] text-[16px] poppins font-bold text-white w-[100%] py-3 px-4 shadow-md mt-6 mb-6"
            onClick={logInUser}
          >
            Log in
          </button>
        </form>
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="flex items-center justify-between w-full md:w-[80%]">
            <div className="w-[25%]">
              <Image src={Line} alt="line" className="w-[100%] text-center" />
            </div>
            <p className="text-[12px] text-center text-[#6F7787FF] font-bold w-[50%] lowercase">
              Or Continue With
            </p>
            <div className="w-[25%]">
              <Image src={Line} alt="line" className="w-[100%] text-center" />
            </div>
          </div>
          <div className="my-6">
            <Image src={GoogleIcon} alt="google_logo" className="w-[30px]" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
