import type { Request, Response } from 'express';
import type { ProductSpecs } from '../schemas/productSchema.zod.js';
import { createProduct } from '../lib/createProduct.service.js';
import { findStore } from '../lib/findStore.service.js';

// description: create a new product and send back relevant data as response.
// request: POST
// route: '/api/v1/store/create-product';
// access: Private and Internal

type createProductResponseSpecs = {
  error?: string;
  responseMessage: string;
  response?: {
    newProduct: ProductSpecs;
    tokenStatus: string;
    renewedUserAccessToken: string;
  };
};

const createNewProduct = async (req: Request<{}, createProductResponseSpecs, ProductSpecs>, res: Response<createProductResponseSpecs>) => {
  try {
    if (req.user) {
      req.body.createdBy = req.user.userId;

      const store = await findStore(req.user.userId);

      if (!store) {
        // console.log(store);
        return res.status(404).json({
          error: 'store not found',
          responseMessage: `please create a store first before creating a product to start selling`
        });
      }

      const { productName, productDescription, productPriceInUSD } = req.body;

      if (!productName || !productDescription || !productPriceInUSD) {
        return res.status(400).json({
          error: 'process aborted',
          responseMessage: 'product data missing: please fill all input fields'
        });
      }

      const { createdBy } = req.body;

      // check if user has already created a store
      const newProduct = await createProduct({ ...req.body, createdBy });

      if (!newProduct) {
        return res.status(404).json({
          error: 'product creation failed',
          responseMessage: 'request unsuccessful: product creation failed and the process was aborted'
        });
      }

      const { renewedUserAccessToken, renewedUserRefreshToken, tokenStatus } = req.user;
      // req content from auth middleware

      // update refresh token(cookie)
      res.cookie('DeecoCommerce_SecretRefreshToken', renewedUserRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      });

      return res.status(200).json({
        responseMessage: 'product created successfully, user was validated and fresh set of tokens were generated',
        response: {
          newProduct: newProduct,
          tokenStatus,
          renewedUserAccessToken: renewedUserAccessToken
        }
      });
    }
    // req content from user

    return;
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

export default createNewProduct;
