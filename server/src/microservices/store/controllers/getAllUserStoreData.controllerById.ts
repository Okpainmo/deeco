import type { Request, Response } from 'express';
import type { ProductSpecs } from '../schemas/productSchema.zod.js';
import type { StoreSpecs } from '../schemas/storeSchema.zod.js';
import { findStore } from '../lib/findStore.service.js';
import { findAllUserProduct } from '../lib/findAllUserProduct.service.js';

// description: get general user store(store and all products) data(by ID), and send back relevant data as response.
// request: GET
// route: '/api/v1/store/get-all-store-data/:storeOwnerId";
// access: Public - not ideal, but we're almost out of time in the hackathon

type getAllUserStoreDataResponseSpecs = {
  error?: string;
  responseMessage: string;
  response?: {
    storeData: {
      basicStoreInfo: StoreSpecs;
      productCount: number;
      products: ProductSpecs[];
    };
  };
};

const getAllUserStoreDataById = async (req: Request<{ storeOwnerId: string }, getAllUserStoreDataResponseSpecs>, res: Response<getAllUserStoreDataResponseSpecs>) => {
  try {
    const { storeOwnerId } = req.params;

    // check if user has already created a store
    const basicStoreInfo = await findStore(storeOwnerId);

    if (!basicStoreInfo) {
      // console.log(store);
      return res.status(404).json({
        error: 'store not found',
        responseMessage: `store not found on this user: please create a store first`
      });
    }

    const allUserProducts = await findAllUserProduct(storeOwnerId);
    console.log(allUserProducts);

    if (!allUserProducts) {
      // console.log(store);
      return res.status(404).json({
        error: 'products not fetched',
        responseMessage: `products data for this store could not be fetched`
      });
    }

    return res.status(200).json({
      responseMessage: 'store data fetched successfully',
      response: {
        storeData: {
          basicStoreInfo,
          productCount: allUserProducts.length,
          products: allUserProducts
        }
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        responseMessage: 'store creation failed',
        error: error.message
      });
    } else {
      return res.status(500).json({
        responseMessage: 'store creation unsuccessful: please try again',
        error: error as string
      });
    }
  }
};

export default getAllUserStoreDataById;
