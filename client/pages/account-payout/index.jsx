import Image from 'next/image';

import MainAppLayout from '../../components/dashboard/layout/MainAppLayout';
import AccessIcon from '../../assets/images/access-icon.png';
import BitcoinIcon from '../../assets/images/dpic-9.png';

import Card from './components/Card';

function AccountPayout() {
  return (
    <MainAppLayout>
      <div className="flex gap-4 flex-1">
        <aside className="basis-full max-w-[50rem] bg-white ml-auto shadow-md overflow-hidden">
          <div className="py-4 px-9 border-b border-b-[#E0E0E0]">
            <h3 className="text-xl font-bold text-[#1E1E1E]">Payout</h3>
          </div>
          <div className="py-4 px-9">
            <div className="flex flex-wrap gap-8 items-stretch">
              <Card title="Wallet" maxSize="max-w-[20rem]">
                <div className="flex flex-col text-black">
                  <div className="flex flex-col gap-2 font-bold mb-2">
                    <h5 className="text-sm ">Balance</h5>
                    <p className="text-2xl">$ 2,000.00</p>
                  </div>

                  <div className="inline-flex flex-col gap-2">
                    <p className="text-[10px]">Last transactions</p>
                    <div className="inline-flex gap-6 text-[10px] font-bold">
                      <div className="inline-flex gap-2 items-center">
                        <i className="p-[1.5px] bg-[#F0F0F0] rounded-[3px]">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9928 5.44765L17.324 6.01015C17.1693 6.0289 17.1037 6.21874 17.2138 6.3289L18.6037 7.71874L13.3068 13.0156L10.9209 10.632C10.7732 10.4844 10.5365 10.4867 10.3912 10.632L2.85134 18.1742C2.81645 18.2094 2.79688 18.257 2.79688 18.3066C2.79687 18.3562 2.81645 18.4038 2.85134 18.4391L3.90603 19.4984C3.97869 19.5711 4.09822 19.5711 4.17088 19.4984L10.656 13.0156L13.0396 15.3992C13.1873 15.5445 13.424 15.5445 13.5693 15.3992L19.9303 9.04296L21.3201 10.4328C21.345 10.4576 21.3764 10.4749 21.4106 10.4827C21.4449 10.4906 21.4806 10.4886 21.5138 10.4772C21.547 10.4657 21.5764 10.4451 21.5985 10.4178C21.6206 10.3905 21.6346 10.3575 21.6388 10.3226L22.2013 5.6539C22.2178 5.53437 22.1146 5.43124 21.9928 5.44765Z"
                              fill="#6DBD28"
                            />
                          </svg>
                        </i>
                        <span>$ 300.00</span>
                      </div>
                      <div className="inline-flex gap-2 items-center">
                        <i className="p-[1.5px] bg-[#F0F0F0] rounded-[3px]">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.00725 19.5524L7.676 18.9899C7.83069 18.9711 7.89631 18.7813 7.78616 18.6711L6.39631 17.2813L11.6932 11.9844L14.0791 14.368C14.2268 14.5156 14.4635 14.5133 14.6088 14.368L22.1487 6.82579C22.1836 6.79055 22.2031 6.74296 22.2031 6.69337C22.2031 6.64377 22.1836 6.59619 22.1487 6.56095L21.094 5.50157C21.0213 5.42892 20.9018 5.42892 20.8291 5.50157L14.344 11.9844L11.9604 9.60079C11.8127 9.45548 11.576 9.45548 11.4307 9.60079L5.06975 15.957L3.67991 14.5672C3.655 14.5424 3.62364 14.5251 3.58939 14.5173C3.55514 14.5094 3.51938 14.5114 3.48617 14.5228C3.45296 14.5343 3.42364 14.5549 3.40154 14.5822C3.37944 14.6095 3.36545 14.6425 3.36116 14.6774L2.79866 19.3461C2.78225 19.4656 2.88538 19.5688 3.00725 19.5524Z"
                              fill="#CB5050"
                            />
                          </svg>
                        </i>
                        <span>$ 300.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="Bank Details" maxSize="max-w-[20rem]">
                <div className="flex flex-col text-black">
                  <h5 className="text-sm text-end font-bold">Add Payment Detail</h5>

                  <div className="flex flex-col gap-2 mt-8">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <div className="p-[6px] bg-white shadow-lg rounded-[3px]">
                          <Image src={AccessIcon} alt="brand-icon" width={16} height={16} />
                        </div>
                        <p className="font-bold text-[12px]">Access Bank PLC</p>
                      </div>
                      <button type="button" className="p-2">
                        <svg
                          width="8"
                          height="3"
                          viewBox="0 0 8 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="1" cy="1.5" r="1" fill="#666666" />
                          <circle cx="4" cy="1.5" r="1" fill="#666666" />
                          <circle cx="7" cy="1.5" r="1" fill="#666666" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <div className="p-[6px] bg-white shadow-lg rounded-[3px]">
                          <Image src={BitcoinIcon} alt="brand-icon" width={16} height={16} />
                        </div>
                        <p className="font-bold text-[12px]">Bit coin (Cryto-currency)</p>
                      </div>
                      <button type="button" className="p-2">
                        <svg
                          width="8"
                          height="3"
                          viewBox="0 0 8 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="1" cy="1.5" r="1" fill="#666666" />
                          <circle cx="4" cy="1.5" r="1" fill="#666666" />
                          <circle cx="7" cy="1.5" r="1" fill="#666666" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-10 mb-6">
              <Card title="Payment Details" maxSize="max-w-full">
                <h5 className="text-sm font-bold">Payment History</h5>
                <div className="relative w-full overflow-x-auto">
                  <div className="mx-auto p-4">
                    <div className="min-w-[672px]">
                      <table className="w-full text-base text-left">
                        <tbody className="text-[#C2C2C2]">
                          <tr>
                            <td>Currency</td>
                            <td>Amount</td>
                            <td>Type</td>
                            <td>Description</td>
                            <td>Date</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-center mt-6"> No Records yet</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </aside>
      </div>
    </MainAppLayout>
  );
}

export default AccountPayout;
