import { useState, useRef, useEffect } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import MainAppLayout from '../../components/user-dashboard/layout/MainAppLayout';
import back from '../../assets/images/back.png';
import ImageUpload from '../../components/ImageUpload';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function AddProducts() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const [imageFiles, setImageFiles] = useState([]);
  const imagePickerRef = useRef();
  const [descImagePreviewUrls, setDescImagePreviewUrls] = useState([]);
  const [descImageFiles, setDescImageFiles] = useState([]);
  const descImagePickerRef = useRef();
  const [productDescription, setProductDescription] = useState('');

  useEffect(() => {
    if (imageFiles.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(imageFiles[0]);
    }
  }, [imageFiles]);

  useEffect(() => {
    if (descImageFiles.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setDescImagePreviewUrls([...previewUrls]);
      };
      fileReader.readAsDataURL(file);
    }
  }, [descImageFiles]);

  const handleProductDescriptionChange = (value) => {
    setProductDescription(value);
  };

  const pickedHandler = (event, setter) => {
    const pickedFiles = event.target.files;
    setter(pickedFiles);
  };

  const pickImageHandler = (setter) => {
    setter.current.click();
  };

  return (
    <MainAppLayout>
      <main className="flex items-center justify-center flex-col">
        <div className="w-full">
          <div className="flex items-center mt-8">
            <Image src={back} alt="back" />
            <h1 className="text-sm ml-6">Back</h1>
          </div>
          <h1 className="text-2xl font-bold mt-12 mb-2">Add Product</h1>
          <div className="bg-white p-4 md:p-8 w-full pb-[8rem]">
            <h2 className="text-2xl text-black font-bold pt-8">Product Details</h2>
            <div>
              <div className="mt-8">
                <h1 className="text-xl font-normal text-black">Images</h1>
                <p className="text-[#C2C2C2] font-normal text-sm py-3">
                  images should be 300*300 pixels.
                </p>
                <ImageUpload
                  previewUrl={imagePreviewUrl}
                  filePickerRef={imagePickerRef}
                  pickedHandler={(e) => pickedHandler(e, setImageFiles)}
                  pickImageHandler={() => pickImageHandler(imagePickerRef)}
                />
              </div>
              <div className="flex flex-col w-full md:w-[45%] mt-8">
                <label className="text-xl font-medium pb-1 text-black">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className=" outline-none p-4 rounded-sm border border-[#E0E0E0]"
                  required
                />
              </div>
              <div className="flex flex-col mt-8 w-full md:w-[35%]">
                <label className="text-xl font-medium pb-1 text-black">Price (NGN)</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className=" outline-none p-4 rounded-sm border border-[#E0E0E0]"
                  required
                />
              </div>
              <div className="flex flex-col mt-8 w-full">
                <label className="text-xl font-medium pb-1 text-black">Product Description</label>
                <ReactQuill
                  theme="snow"
                  value={productDescription}
                  onChange={handleProductDescriptionChange}
                  className="h-[263px] "
                />
              </div>
              <div className="mt-[6rem] md:mt-20 mb-20">
                <h1 className="text-xl font-normal text-black">Description Images</h1>
                <p className="text-[#C2C2C2] font-normal text-sm py-3">
                  Add other descriptive images of the product.{' '}
                </p>
                <ImageUpload
                  previewUrl={descImagePreviewUrls[0]}
                  filePickerRef={descImagePickerRef}
                  pickedHandler={(e) => pickedHandler(e, setDescImageFiles)}
                  pickImageHandler={() => pickImageHandler(descImagePickerRef)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end mt-8">
            <button className="bg-[#5D5FEF] text-white px-6 py-2" type="submit">
              Create Product
            </button>
          </div>
        </div>
      </main>
    </MainAppLayout>
  );
}

export default AddProducts;
