import Link from 'next/link';

import MainAppLayout from '../components/layout/MainAppLayout';

function StoreCreationSuccess() {
  return (
    <MainAppLayout>
      <main>
        <section className="py-20 px-8">
          <div className="flex justify-center items-center gap-4 mb-16">
            <h1 className="text-[2.5rem] font-medium">Store created.</h1>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_738_577)">
                <g filter="url(#filter0_d_738_577)">
                  <path d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z" fill="#6DBD28" />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_738_577"
                  x="-4"
                  y="5"
                  width="56"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_738_577"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_738_577"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_738_577">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col justify-center items-center gap-[1rem] max-w-[28.125rem] mx-auto">
            <h2 class="text-[2.5rem] font-medium text-[#EF5DA8]"> Andrew,s Shoes </h2>
            <p className="text-xl font-normal">Everything shoes’s we got you covered.</p>
            <Link
              href="/dashboard"
              className="inline-flex justify-center items-center bg-[#EF5DA8] text-white text-xl font-bold h-[3.8125rem] py-4 mt-7 w-full"
            >
              Process to dashboard
            </Link>
          </div>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default StoreCreationSuccess;
