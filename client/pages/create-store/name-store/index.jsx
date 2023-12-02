import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MainAppLayout from '../../../components/layout/MainAppLayout';
import web_shopping from '../../../assets/images/web_shopping.png';

function NameStore() {
  const initialFormData = {
    store_name: '',
    description: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormError(false);
  };
  return (
    <MainAppLayout>
      <div className="bg-gray-50 py-16">
        <div className="flex items-center justify-center flex-col">
          <div className="w-[85%] md:w-[60%] lg:w-[40%]">
            <h1 className="text-3xl lg:text-4xl text-center font-medium mb-8">Name your store</h1>
            <form>
              <div className="flex flex-col mb-4">
                <label className="text-base text-center font-medium pb-1">Store name:</label>
                <input
                  name="store_name"
                  value={formData.store_name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="store name"
                  className="bg-gray-50 outline-none p-4 rounded-sm border border-gray-400"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-base text-center font-medium pb-1">Description:</label>
                <textarea
                  cols={30}
                  rows={5}
                  placeholder="a short description about your store"
                  required
                  className="bg-gray-50 outline-none p-4 rounded-sm border border-gray-400"
                />
              </div>
              <p className="text-sm text-gray-500">
                A unique name and description is sure to make you stands out.
              </p>
              <Link
                href="/#"
                className="inline-flex justify-center items-center bg-[#EF5DA8] text-white text-xl font-bold h-[3.8125rem] py-4 mt-7 w-full"
              >
                Continue
              </Link>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex items-end justify-end w-[95%] mt-0 lg:mt-[-5rem]">
          <Image
            src={web_shopping}
            alt="web shopping"
            width={250}
            height={250}
            className="h-[150px] w-[200px] lg:h-[200px] lg:w-[250px] "
          />
        </div>
      </div>
    </MainAppLayout>
  );
}

export default NameStore;
