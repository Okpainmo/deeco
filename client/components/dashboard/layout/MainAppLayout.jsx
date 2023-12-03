import NavGroup from './NavGroup';

function MainAppLayout({ children }) {
  return (
    <section className="flex flex-col min-h-screen">
      <NavGroup />
      <main className="flex flex-col bg-[#E0E0E0] dark:bg-[#0f172a] px-4 py-5 flex-1">
        <section className="flex flex-col w-full lg:w-[80%] mx-auto flex-1">{children}</section>
      </main>
    </section>
  );
}

export default MainAppLayout;
