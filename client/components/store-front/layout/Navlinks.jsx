import React from 'react';
import Link from 'next/link';

function Navlinks() {
  return (
    <section className="hidden lg:flex justify-center font-bold gap-8 text-[10px] xl:text-[12px] text--colors_default items-center">
      <Link href="/">
        <div className="text-center">How its Work</div>
      </Link>
      <Link href="/">
        <div className="text-center">Pricing</div>
      </Link>
      <Link href="/">
        <div className="text-center">Features</div>
      </Link>
      <Link href="/">
        <div className="text-center">Create Store</div>
      </Link>
      <Link href="/">
        <div className="text-center">Buy Theme</div>
      </Link>
    </section>
  );
}

export default Navlinks;
