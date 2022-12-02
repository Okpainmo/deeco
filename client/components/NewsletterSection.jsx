import React from 'react';

function NewsletterSection() {
  return (
    <div className="newsletter-section my-8 md:mt-20 lg:mt-0 sm:w-[450px] md:w-3/5 lg:w-[25%]">
      <h2 className="text--dark text-base font-bold mb-2">NewsLetter</h2>
      <span className="text--colors_secondary text-[12px]">
        Join our newsletter, and get a weekly update of our awesome new products and bonus offers
      </span>
      <form action="#" className="newsletter-form mt-4 flex">
        <input className="custom--input px-4 py-2 w-[75%] border-b outline-none" type="text" />
        <button
          type="submit"
          className="btn--colors_regular px-4 py-2 text-[12px] font-bold montserrat text--colors_default-invert w-[25%]"
        >
          Join in
        </button>
      </form>
    </div>
  );
}

export default NewsletterSection;
