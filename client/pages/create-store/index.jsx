import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import MainAppLayout from '../../components/layout/MainAppLayout';
import { baseAPI_URL } from '../../config';

function CreateStore() {
  const router = useRouter();

  const [storeCreationForm, setStoreCreationForm] = useState({
    storeName: '',
    storeDescription: ''
  });

  const createStore = async (e) => {
    e.preventDefault();

    const userAccessToken = localStorage.getItem('userToken');
    const userEmail = localStorage.getItem('userEmail');

    if (!userAccessToken || !userEmail) {
      toast.error('login required: please login before creating a store');
    }

    console.log(storeCreationForm);
    if (storeCreationForm.storeName === '' || storeCreationForm.storeDescription === '') {
      return toast.error('please fill in all fields', { duration: 3000 });
    }

    const toastId = toast.loading('creating store...');

    const requestHeadersObject = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
        Email: `${userEmail}`
      }
    };

    // console.log(requestHeadersObject);

    try {
      const response = await axios.post(
        `${baseAPI_URL}/api/v1/store/create-store`,
        storeCreationForm,
        requestHeadersObject
      );

      if (
        response &&
        response.data.responseMessage ===
          'store created successfully, user was validated and fresh set of tokens were generated'
      ) {
        toast.success('store created successfully', {
          id: toastId,
          duration: 4000
        });

        localStorage.setItem('deecoUserStoreName', `${response.response.store.storeName}`);

        const deecoUserStoreName = localStorage.getItem('deecoUserStoreName');
        console.log(deecoUserStoreName);

        setTimeout(() => {
          router.push('/store-creation-success');
        }, 1000);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        toast.error(error.response.data.responseMessage, {
          id: toastId,
          duration: 4000
        });
      } else {
        console.log(error);
        toast.error(
          'store creation unsuccessful... please try again with correct credentials or check you network',
          {
            id: toastId,
            duration: 4000
          }
        );
      }
    }
  };

  return (
    <MainAppLayout>
      <main className="relative flex justify-center pt-20 px-2 sm:px-8 min-h-screen nunito_sans text-[12px]">
        <div
          className="w-full xsm:w-[400px] border rounded-sm p-6 xsm:p-8 z-20"
          style={{
            alignSelf: 'flex-start',
            boxShadow: 'rgb(238, 240, 249) 0px 0px 20px',
            backgroundColor: 'rgba(255, 255, 255, .98)'
          }}
        >
          <div className="text-2xl mt-4 mb-6 poppins font-bold z-20 text-center">
            Create A Deeco Store
          </div>
          <form method="POST">
            <div className="flex flex-col mb-6">
              <label
                htmlFor="store-name"
                className="text-gray-600 text-[12px] font-bold poppins pb-1 text-center"
              >
                Store Name *
              </label>
              <input
                name="store name"
                value={storeCreationForm.storeName}
                onChange={(e) => {
                  setStoreCreationForm({
                    ...storeCreationForm,
                    storeName: e.target.value
                  });
                }}
                type="text"
                placeholder="Add a name for your store"
                className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400"
                required
                id="store-name"
              />
              {/* <p className={`${formError ? 'block' : 'hidden'} text-red-500`}>
                Invalid email address
              </p> */}
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="store-description"
                className="text-gray-600 text-[12px] font-bold poppins pb-1 text-center"
              >
                Store Description *
              </label>
              <textarea
                name="store-description"
                value={storeCreationForm.storeDescription}
                onChange={(e) => {
                  setStoreCreationForm({
                    ...storeCreationForm,
                    storeDescription: e.target.value
                  });
                }}
                rows={10}
                type="text"
                placeholder="Add a description for your store"
                className="bg-gray-50 outline-none px-4 py-3 rounded-sm border border-gray-400"
                required
                id="store-description"
              ></textarea>
              {/* <p className={`${formError ? 'block' : 'hidden'} text-red-500`}> Invalid password</p> */}
            </div>
            <p className="mr-auto text-sm text-[#5D5FEF] underline">
              Having a unique name and description is sure to make you stand out
            </p>
            <button
              type="button"
              onClick={createStore}
              className="bg-[#EF5DA8] text-[16px] poppins font-bold text-white w-[100%] py-3 px-4 shadow-md mt-6 mb-6"
            >
              Create Store
            </button>
          </form>
        </div>
      </main>
    </MainAppLayout>
  );
}

export default CreateStore;
