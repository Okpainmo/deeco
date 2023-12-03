import Link from 'next/link';

function Header() {
  return (
    <main className="flex flex-col w-20 mb-5">
      <Link href="/">
        <div className="brand--colors italic text--colors_default montserrat text-[16px] px-2 border-[3px] text-center">
          deeco.
        </div>
      </Link>
    </main>
  );
}
export default Header;
