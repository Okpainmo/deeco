import Image from 'next/image';
import AccountNav from '../../components/AccountNav';
import shoeImage from '../../assets/images/dpic-18.png';
import MoreIcon from '../../assets/images/more-img.png';
import MainAppLayout from '../../components/dashboard/layout/MainAppLayout';

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
                <div className="border-b-2 flex justify-between px-1 xsm:px-3">
                  <div className="flex gap-1 xsm:gap-4 items-center">
                    <h2 className="text-[10px] xsm:text-sm font-semibold capitalize  bg-white">
                      product overveiw
                    </h2>
                    <div class="relative inline-block text-left text-xs">
                      <select class="text-[10px] relative xsm:text-sm block appearance-none w-full bg-white border my-1 hover:border-gray-500 px-2 py-1 pr-8  leading-tight focus:outline-none  active:bg-gray-50 active:text-gray-800">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex items-center bg-blue-500 text-white px-2 py-1 my-1"
                  >
                    <span class="text-[10px] xsm:text-sm mr-1 xsm:mr-2">Add product</span>
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 flex md:flex-col">
                  <div className="relative w-full overflow-x-auto">
                    <div className="mx-auto p-4">
                      <div className="min-w-[624px] flex">
                        <table className="w-full text-base text-left">
                          <tbody className="text-[#C2C2C2] shadow-lg">
                            <tr className="">
                              <td className="p-5">
                                <input
                                  type="checkbox"
                                  id="myCheckbox"
                                  className="form-checkbox pointer-events-none  opacity-50 h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                              </td>
                              <td>product id</td>
                              <td>image</td>
                              <td className="px-5">name</td>
                              <td className="px-5">price</td>
                              <td>unit</td>
                              <td />
                            </tr>
                            <tr>
                              <td className="p-5">
                                <input
                                  type="checkbox"
                                  id="myCheckbox"
                                  className="form-checkbox mb-2 pointer-events-none opacity-50 h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                              </td>
                              <td className="px-5 text-xs">A 0.6</td>
                              <td className="px-3">
                                <Image src={shoeImage} alt="shoeImage" className="w-5 h-5" />
                              </td>
                              <td className="font-semibold text-black text-xs">andrew's novel</td>
                              <td>NGN 40,000</td>
                              <td>50</td>
                              <td>
                                <Image
                                  src={MoreIcon}
                                  alt="MoreIcon"
                                  className="hidden md:block object-cover opacity-50"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="p-5">
                                <input
                                  type="checkbox"
                                  id="myCheckbox"
                                  className="form-checkbox mb-2 pointer-events-none opacity-50 h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                              </td>
                              <td className="px-5 text-xs">A 0.6</td>
                              <td className="px-3">
                                <Image src={shoeImage} alt="shoeImage" className="w-5 h-5" />
                              </td>
                              <td className="font-semibold text-black text-xs">andrew's novel</td>
                              <td>NGN 40,000</td>
                              <td>50</td>
                              <td>
                                <Image
                                  src={MoreIcon}
                                  alt="MoreIcon"
                                  className="hidden md:block object-cover opacity-50"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="p-5">
                                <input
                                  type="checkbox"
                                  id="myCheckbox"
                                  className="form-checkbox mb-2 pointer-events-none opacity-50 h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                              </td>
                              <td className="px-5 text-xs">A 0.6</td>
                              <td className="px-3">
                                <Image src={shoeImage} alt="shoeImage" className="w-5 h-5" />
                              </td>
                              <td className="font-semibold text-black text-xs">andrew's novel</td>
                              <td>NGN 40,000</td>
                              <td>50</td>
                              <td>
                                <Image
                                  src={MoreIcon}
                                  alt="MoreIcon"
                                  className="hidden md:block object-cover opacity-50"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="p-5">
                                <input
                                  type="checkbox"
                                  id="myCheckbox"
                                  className="form-checkbox mb-2 pointer-events-none opacity-50 h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                              </td>
                              <td className="px-5 text-xs">A 0.6</td>
                              <td className="px-3">
                                <Image src={shoeImage} alt="shoeImage" className="w-5 h-5" />
                              </td>
                              <td className="font-semibold text-black text-xs">andrew's novel</td>
                              <td>NGN 40,000</td>
                              <td>50</td>
                              <td>
                                <Image
                                  src={MoreIcon}
                                  alt="MoreIcon"
                                  className="hidden md:block object-cover opacity-50"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
