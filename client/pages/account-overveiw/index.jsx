import Image from 'next/image';
import AccountNav from '../../components/AccountNav';
import EditIcon from '../../assets/images/edit-icon.png';
import EditIconCopy from '../../assets/images/edit-icon-1.png';
import MainAppLayout from '../../components/user-dashboard/layout/MainAppLayout';

function AccountOverView() {
  return (
    <MainAppLayout>
      <main className="flex flex-col md:flex-row gap-4 flex-1 min-h-screen">
        <div className="w-full md:w-[322px] flex-shrink-0">
          <AccountNav />
        </div>
        <aside className="account-overveiw-page w-full basis-full bg-white ml-auto shadow-md overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col">
              <div className="flex flex-col">
                <div className="border-b-2">
                  <h2 className="text-sm p-2 font-semibold capitalize shadow-xl bg-white">
                    account overveiw
                  </h2>
                </div>
                <div className="px-3 flex flex-col md:flex-row gap-4 items-center my-4">
                  <div className="w-full  h-56 border-2">
                    <div className="p-6 flex flex-col items-center">
                      <div class="w-20 h-20 flex justify-end items-end rounded-full bg-slate-200">
                        <div className="mb-2">
                          <Image
                            src={EditIcon}
                            alt="EditIcon"
                            className="object-cover block h-5 w-5"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-sm md:text-xs ">
                        <h3 className="font-semibold">olumide alli</h3>
                        <span>alliolumide0@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-56  flex flex-col border-2 mb-4 md:mb-0">
                    <div className="flex justify-between border-b-2 p-2 mb-2">
                      <h2 className="text-sm font-bold">Address book</h2>
                      <div>
                        <Image
                          src={EditIconCopy}
                          alt="EditIconcopy"
                          className="object-cover block h-3 w-3"
                        />
                      </div>
                    </div>
                    <div className="text-sm px-3">
                      <span className="block">Your address</span>
                      <span className="block">Contact detail's</span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 border-2 h-full mb-5">
                  <h2 className="p-3 border-b-2 font-semibold text-xs">wallet</h2>
                  <div className="bg-slate-100 mb-10 py-2">
                    <span className="px-3 py-1 block text-xs font-semibold">import walllet</span>
                    <span className="px-3 py-1 block text-xs">
                      import your wallet via seed phrase or private key
                    </span>
                  </div>
                  <button
                    type="button"
                    className="m-3 px-4 submit bg-pink-400 py-3 font-bold poppins text-xs text-white capitalize"
                  >
                    start your journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </MainAppLayout>
  );
}

export default AccountOverView;
