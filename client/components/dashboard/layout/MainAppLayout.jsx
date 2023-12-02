import NavGroup from './NavGroup';

function MainAppLayout({ children }) {
  return (
    <section className="flex flex-col min-h-screen">
      <NavGroup />
      <main className=" bg-[#C4C4C4] dark:bg-[#0f172a] px-4 py-8 flex-1">
        <section className="w-full lg:w-[80%] mx-auto">{children}</section>
      </main>
    </section>
  );
}

export default MainAppLayout;
