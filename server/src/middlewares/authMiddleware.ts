import jwt from 'jsonwebtoken';
// import { TokenExpiredError } from 'jsonwebtoken';
import { type Request, type Response, type NextFunction } from 'express';
import type { UserSpecs } from '../microservices/user/schemas/userSchema.zod.js';
import { findUser } from '../microservices/user/lib/auth.findUser.service.js';
import generateTokens from '../utils/generateTokens.js';

// import generateTokens from '../utils/generateTokens.js';

type RequestHeaderContentSpecs = {
  authorization: string;
  email: string;
};

type ResponseSpecs = {
  error?: string;
  responseMessage: string;
  response?: {
    user: UserSpecs;
    token: string;
  };
};

type JwtPayloadSpecs = {
  userId: string;
  userEmail: string;
  iat: number;
  exp: number;
};

const authMiddleware = async (req: Request, res: Response<ResponseSpecs>, next: NextFunction) => {
  const requestHeaders = req.headers;

  const { email, authorization } = requestHeaders as RequestHeaderContentSpecs;
  const jwtSecret = process.env.JWT_SECRET as string;

  // console.log(email);
  // console.log(authorization);

  try {
    if (!req.headers.cookie || !req.headers.cookie.includes(`DeecoCommerce_SecretRefreshToken`)) {
      return res.status(401).json({
        error: 'access forbidden',
        responseMessage: 'user does not have access to the route - please attempt a fresh log-in'
      });
    }

    //check if user exist
    const user = await findUser({ email });
    // console.log(user);

    if (!user) {
      return res.status(404).json({
        error: 'access forbidden',
        responseMessage: 'user not found: user does not have access to this route'
      });
    }

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(403).json({
        error: 'access forbidden',
        responseMessage: 'authorization string does not match expected result'
      });
    }

    const returnedToken = authorization.split(' ')[1];
    // console.log(returnedToken);

    if (returnedToken && user) {
      const decodedJWT = jwt.verify(returnedToken, jwtSecret) as JwtPayloadSpecs;
      // console.log(decodedJWT);

      // console.log(decodedJWT.userId);
      // console.log(user._id);

      if (!decodedJWT || decodedJWT.userEmail !== user.email) {
        return res.status(403).json({
          error: 'access forbidden',
          responseMessage: 'user credentials do not match - user login unsuccessful'
        });
      }

      const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
      const tokenExpirationTimeInSeconds = decodedJWT.exp;

      if (tokenExpirationTimeInSeconds > currentTimestampInSeconds) {
        const generatedTokens = await generateTokens(user);
        const { refreshToken, accessToken } = generatedTokens;

        const tokenStatus = `user access-token and user session for '${decodedJWT.userEmail}' has been renewed`;
        // console.log(tokenStatus);

        req.user = {
          userId: decodedJWT.userId,
          userEmail: decodedJWT.userEmail,
          tokenStatus,
          renewedUserAccessToken: accessToken,
          renewedUserRefreshToken: refreshToken
        };
      }
    }

    // proceed to next middleware or route
    next();
  } catch (error) {
    if (error instanceof Error && error.message === 'jwt expired') {
      /* Access token is expired. Verify token(ignoring expiry) to make sure it's the user,
      then regenerate new tokens(access and refresh) and pass from middleware */

      const user = await findUser({ email });
      // console.log(`catch block ${user}`);

      if (!user) {
        return res.status(404).json({
          error: 'access forbidden',
          responseMessage: 'user not found: user does not have access to this route'
        });
      }

      const generatedTokens = await generateTokens(user);
      const { refreshToken, accessToken } = generatedTokens;

      const decodedJWT = jwt.verify(accessToken, jwtSecret, {
        ignoreExpiration: true
      }) as JwtPayloadSpecs;
      // console.log(decodedJWT);

      // console.log(decodedJWT.userId);
      // console.log(user._id);

      if (!decodedJWT || decodedJWT.userEmail !== user.email) {
        return res.status(401).json({
          error: 'access forbidden',
          responseMessage: 'user credentials do not match - user login unsuccessful'
        });
      }

      const tokenStatus = `previous user access-token for '${decodedJWT.userEmail}' is expired - access-token and user session has been renewed`;
      console.log(tokenStatus);

      req.user = {
        userId: decodedJWT.userId,
        userEmail: decodedJWT.userEmail,
        tokenStatus,
        renewedUserAccessToken: accessToken,
        renewedUserRefreshToken: refreshToken
      };

      next();
    } else {
      return res.status(500).json({
        responseMessage: 'unauthorized access',
        error: error as string
      });
    }
  }

  return;
};

export default authMiddleware;
