import type { Request, Response } from 'express';
import type { StoreSpecs } from '../schemas/storeSchema.zod.js';
import { createStore } from '../lib/createStore.service.js';
import { findStore } from '../lib/findStore.service.js';

// description: create a new store and send back relevant data as response.
// request: POST
// route: '/api/v1/store/create-store';
// access: Private and Internal

type createStoreResponseSpecs = {
  error?: string;
  responseMessage: string;
  response?: {
    store: StoreSpecs;
    tokenStatus: string;
    renewedUserAccessToken: string;
  };
};

const createNewStore = async (req: Request<{}, createStoreResponseSpecs, StoreSpecs>, res: Response<createStoreResponseSpecs>) => {
  try {
    if (req.user) {
      req.body.createdBy = req.user.userId;

      const { storeName, storeDescription } = req.body;

      if (!storeName || !storeDescription) {
        return res.status(400).json({
          error: 'process aborted',
          responseMessage: 'store data missing: please fill all input fields'
        });
      }

      // check if user has already created a store
      const store = await findStore(req.user?.userId);

      if (store) {
        // console.log(store);
        return res.status(403).json({
          error: 'forbidden: process aborted',
          responseMessage: `user already created a store named '${store.storeName}'`
        });
      }

      // create store
      const newStore = await createStore(req.body);

      if (!newStore) {
        return res.status(400).json({
          error: 'store not created',
          responseMessage: 'request unsuccessful: store creation failed'
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
        responseMessage: 'store created successfully, user was validated and fresh set of tokens were generated',
        response: {
          store: newStore,
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

export default createNewStore;
