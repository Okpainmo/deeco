import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
// import Notification from '../../components/Notification';
import GoggleImage from '../../assets/images/goggle.png';
// import { isValidPassword } from '../../utils/validation';
import MobileUser from '../../assets/images/undraw_mobile_user.png';
import { GlobalContext } from '../../context/GlobalContext';
import { baseAPI_URL } from '../../config';

// import { FaGoogle } from 'react-icons/fa';

function SignUp() {
  const router = useRouter();
  const { toggleIsLoggedIn } = useContext(GlobalContext);

  const [signUpForm, setSignUpForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  async function createUser(e) {
    e.preventDefault();

    if (
      signUpForm.fullName === '' ||
      signUpForm.email === '' ||
      signUpForm.password === '' ||
      signUpForm.confirmPassword === ''
    ) {
      toast.error('please fill in all fields', { duration: 3000 });
      return;
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      toast.error('passwords do not match', { duration: 3000 });
      return;
    }

    if (signUpForm.password.length < 8 || signUpForm.confirmPassword.length < 8) {
      toast.error('passwords must be at least 8 characters', {
        duration: 3000
      });
      return;
    }

    console.log(signUpForm);

    const toastId = toast.loading('creating account...');

    try {
      const newUser = await axios.post(
        `${baseAPI_URL}/api/v1/auth/register`, // this is the endpoint for creating a new user
        signUpForm,
        {
          withCredentials: true
        }
      );

      console.log(newUser);

      if (newUser && newUser.data.responseMessage === 'user sign-up/registration successful') {
        toast.success('account created successfully', {
          id: toastId,
          duration: 4000
        });
      }

      setSignUpForm({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      localStorage.setItem('userToken', `${newUser.data.response.accessToken}`);
      localStorage.setItem('userEmail', `${newUser.data.response.user.email}`);

      const userToken = localStorage.getItem('userToken');
      const userEmail = localStorage.getItem('userEmail');

      console.log(userToken, userEmail);

      const userName = newUser.data.response.user.fullName;
      // console.log(userName);
      localStorage.setItem('userName', `${userName}`);

      toggleIsLoggedIn();

      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      toast.error('error creating user: account creation failed', { id: toastId, duration: 3000 });
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen px-3 py-8 text-[12px] nunito_sans flex justify-center relative">
      <div className="lg:flex items-end justify-end mb-2 absolute bottom-[300px] sm:bottom-[100px] left-[100px] z-10">
        <Image src={MobileUser} alt="page-illustration_user-with-mobile-device" />
      </div>
      <div
        className="w-full xsm:w-[400px] border rounded-sm p-6 pb-10 xsm:p-8 mt-12 md:mt-20 z-20"
        style={{
          alignSelf: 'flex-start',
          boxShadow: 'rgb(238, 240, 249) 0px 0px 20px',
          backgroundColor: 'rgba(255, 255, 255, .95)'
        }}
      >
        <div className="login-option-wrapper flex flex-col mb-6 mt-4 text-center">
          <h3 className="capitalize text-2xl poppins font-bold">Deeco/sign-up</h3>
          <p className="mt-4 text-[14px]">
            Already have an account?{' '}
            <Link href="/" className="no-underline text-blue-400 font-bold">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col  lg:flex-row w-full">
          <section className="section-one-info w-full">
            <form className="w-full">
              <div className="input-group for-Full-Name mb-5 flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-gray-600 text-[12px] font-bold poppins pb-1"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400 w-full"
                    required
                    name="fullName"
                    value={signUpForm.fullName}
                    onChange={(e) => {
                      setSignUpForm({
                        ...signUpForm,
                        fullName: e.target.value
                      });
                    }}
                    type="text"
                    placeholder="Enter fullname"
                    id="fullName"
                  />
                </div>
              </div>
              <div className="input-group for-email mb-5 flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-600 text-[12px] font-bold poppins pb-1">
                  Email address *
                </label>
                <div className="relative">
                  <input
                    className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400 w-full"
                    required
                    name="email"
                    value={signUpForm.email}
                    onChange={(e) => {
                      setSignUpForm({
                        ...signUpForm,
                        email: e.target.value
                      });
                    }}
                    type="email"
                    placeholder="Enter email"
                    id="email"
                  />
                </div>
              </div>
              <div className="input-group for-password mb-5 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-gray-600 text-[12px] font-bold poppins pb-1"
                >
                  Password *
                </label>
                <div className="relative">
                  <input
                    className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400 w-full"
                    required
                    type="password"
                    name="password"
                    value={signUpForm.password}
                    onChange={(e) => {
                      setSignUpForm({
                        ...signUpForm,
                        password: e.target.value
                      });
                    }}
                    placeholder="Enter password"
                    id="password"
                  />
                </div>
                {/* <ul className={`${formError.password ? 'block' : 'hidden'} text-red-500`}>
                  <li>At least one digit/number.</li>
                  <li>At least one lowercase letter.</li>
                  <li>At least one uppercase letter.</li>
                  <li>At least one special character</li>
                  <li>The total length of the password must be at least 8 characters.</li>
                </ul>
                <p className={`${formError.confirmPassword ? 'block' : 'hidden'} text-red-500`}>
                  Passwords mismatch
                </p> */}
              </div>
              <div className="input-group for-password mb-5 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-gray-600 text-[12px] font-bold poppins pb-1"
                >
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400 w-full"
                    required
                    type="password"
                    name="confirmPassword"
                    value={signUpForm.confirmPassword}
                    onChange={(e) => {
                      setSignUpForm({
                        ...signUpForm,
                        confirmPassword: e.target.value
                      });
                    }}
                    placeholder="Confirm password"
                    id="confirmPassword"
                  />
                </div>
                {/* <p className={`${formError.confirmPassword ? 'block' : 'hidden'} text-red-500`}>
                  Passwords mismattch
                </p> */}
              </div>
              <div className="submit-button-wrapper mb-3">
                <button
                  type="submit"
                  onClick={createUser}
                  className="bg-[#EF5DA8] text-[16px] poppins font-bold text-white w-[100%] py-3 px-4 shadow-md mt-6 mb-6"
                >
                  sign up
                </button>
              </div>
            </form>
            <div className="alternative-sign-up-introduction">
              <div className="inline-flex items-center justify-center w-full">
                <div
                  className=" before:w-[70px] before:h-[1px] before:bg-gray-400 before:inline-block before:translate-y-2 before:mr-3 after:ml-3 text-[#6F7787FF] font-bold flex
                  justify-center after:w-[70px] after:h-[1px] after:bg-gray-400 after:inline-block after:translate-y-2"
                >
                  <div className="px-[4px] sm:px-1 text-[8px] text-xs">or continue with</div>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <Link href="/log-in" className="no-underline text-blue-300 font-bold">
                  <Image src={GoggleImage} alt="goggle" className="block w-[30px]" />
                </Link>{' '}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default SignUp;
