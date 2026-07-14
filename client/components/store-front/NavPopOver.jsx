import React, { useContext } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover } from '@headlessui/react';
// import mockDP from '../assets/images/sample.jpg';
import { GlobalContext } from '../../context/GlobalContext';

function NavPopOver() {
  const { togglePopOver, toggleIsLoggedIn } = useContext(GlobalContext);

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  function logOut() {
    // if (typeof window !== 'undefined') {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('deecoUserStoreName');
    toggleIsLoggedIn();
    // localStorage.removeItem('userProfileImageUrl');
    // }
  }

  return (
    <Popover className="relative">
      <Popover.Button className="focus:outline-[0]" onClick={togglePopOver}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 sm:w-8 sm:h-8 h-6 translate-y-[2px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </Popover.Button>

      <Popover.Panel className="absolute z-40 w-[290px] xsm:w-[330px] sm:w-[450px] overflow-y-auto rounded px-4 py-8 right-0 top-12 shadow flex flex-col justify-between bg-gray-100">
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {/* 
          <Image
            src={profileImageUrl}
            // placeholder='blur'
            alt="user-profile-photo"
            width={50}
            height={50}
            className="rounded-full w-[50px] h-[50px]"
          /> */}
          <div className="py-3">
            <div className="font-bold poppins capitalize">{userName}</div>
            <div className="text-gray-400 flex flex-row mt-1">{userEmail}</div>
          </div>
        </div>
        {/* {!profileImageUrl && (
          <section className="text-purple-800 mt-4 flex flex-row-reverse gap-2 items-center">
            <Link href="/add-profile-image" onClick={toggleAddBtn}>
              <button
                type="button"
                className="bg-purple-100 text-purple-900 font-bold rounded border-0 cursor-pointer px-3 py-2 text-[12px] min-w-[80px]"
              >
                upload profile photo
              </button>
            </Link>
            <span>new feature - </span>
          </section>
        )} */}
        <section className="mt-6">
          <section className="mt-10">
            <div className="flex flex-row-reverse gap-4">
              <button
                type="button"
                onClick={() => {
                  logOut();
                  togglePopOver();
                }}
                className="bg-blue-500 rounded text-white px-3 py-2 text-[12px] min-w-[80px]"
              >
                log out
              </button>
            </div>
          </section>
        </section>
      </Popover.Panel>
    </Popover>
  );
}

export default NavPopOver;
