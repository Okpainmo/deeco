import type { Request, Response } from 'express';
import type { UserSpecs } from '../schemas/userSchema.zod.js';
import type { StoreSpecs } from '../../store/schemas/storeSchema.zod.js';
import { findStore } from '../../store/lib/findStore.service.js';
import { findUser } from '../lib/auth.findUser.service.js';

// description: gets larger user(user's profile and user's store) data and sends back relevant data as response.
// request: POST
// route: '/api/v1/auth/get-user-data';
// access: Private & Internal

type getPersonalProfileResponseSpecs = {
  error?: string;
  responseMessage: string;
  response?: {
    user: UserSpecs;
    store: StoreSpecs | string;
    tokenStatus: string;
    renewedUserAccessToken: string;
  };
};

const getPersonalData = async (req: Request<{}, getPersonalProfileResponseSpecs>, res: Response<getPersonalProfileResponseSpecs>) => {
  try {
    if (req.user) {
      req.body.createdBy = req.user.userId;

      const { userEmail: email } = req.user;

      // find user
      const user = await findUser({ email });

      if (!user) {
        return res.status(404).json({
          error: 'user not found',
          responseMessage: `a user with this email was not found`
        });
      }

      // check if user has already created a store
      const store = await findStore(req.user.userId);

      // req content from auth middleware
      const { renewedUserAccessToken, renewedUserRefreshToken, tokenStatus } = req.user;

      // update refresh token(cookie)
      res.cookie('DeecoCommerce_SecretRefreshToken', renewedUserRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      });

      if (!store) {
        return res.status(200).json({
          responseMessage: 'store data fetched successfully',
          response: {
            user: user,
            store: 'store not found for this user',
            tokenStatus,
            renewedUserAccessToken: renewedUserAccessToken
          }
        });
      }

      return res.status(200).json({
        responseMessage: 'store data fetched successfully',
        response: {
          user: user,
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

export default getPersonalData;
