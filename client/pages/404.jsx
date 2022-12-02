import React from 'react';
import Link from 'next/link';

function ErrorPage() {
  return (
    <main className="error-page-parent min-h-screen bg-cover flex items-center sm:px-8 py-12">
      <div className="bg--trans w-full min-h-[600px] sm:w-[80%] sm:min-h-[600px] mx-auto bg--glass p-4 flex justify-center flex-col text-center">
        <Link href="/">
          <div className="brand--colors italic text--colors_default mx-auto mb-4 montserrat font-bold text-[20px] px-4 border-[3px] w-[100px]">
            deeco.
          </div>
        </Link>
        <div className="text-[20px] sm:text-[20px] leading-20">
          Oppss!!! it seems what you're looking out for is not available for now <br /> please{' '}
          <Link className="underline italic" href="/">
            follow this link{' '}
          </Link>
          to return to the home page.
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
