import type { Request, Response } from 'express';
import type { StoreSpecs } from '../schemas/storeSchema.zod.js';
import { findStore } from '../lib/findStore.service.js';

// description: get a user's store data and send back relevant data as response.
// request: POST
// route: '/api/v1/store/create-store';
// access: Private and Internal

type getStoreResponseSpecs = {
  error?: string;
  responseMessage: string;
  response?: {
    store: StoreSpecs;
    tokenStatus: string;
    renewedUserAccessToken: string;
  };
};

const getStore = async (req: Request<{}, getStoreResponseSpecs>, res: Response<getStoreResponseSpecs>) => {
  try {
    if (req.user) {
      req.body.createdBy = req.user.userId;
      // check if user has already created a store
      const store = await findStore(req.user.userId);

      if (!store) {
        // console.log(store);
        return res.status(404).json({
          error: 'store not found',
          responseMessage: `please create a store to see you store details here and begin selling`
        });
      }

      // req content from auth middleware
      const { renewedUserAccessToken, renewedUserRefreshToken, tokenStatus } = req.user;

      // update refresh token(cookie)
      res.cookie('DeecoCommerce_SecretRefreshToken', renewedUserRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      });

      return res.status(200).json({
        responseMessage: 'store data fetched successfully',
        response: {
          store: store,
          tokenStatus,
          renewedUserAccessToken: renewedUserAccessToken
        }
      });
    }

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

export default getStore;
