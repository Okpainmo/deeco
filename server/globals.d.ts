import { Request } from 'express';

// Augment the Express Request type - more like extending express(with ts) globally
declare module 'express' {
  interface Request {
    user?: {
      userId: string;
      userEmail: string;
      tokenStatus: string;
      renewedUserAccessToken: string;
      renewedUserRefreshToken: string;
    };
  }
}
