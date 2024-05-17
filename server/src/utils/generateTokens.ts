import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import type { UserSpecs } from '../microservices/user/schemas/userSchema.zod.js';

async function generateTokens(user: UserSpecs) {
  const jwtSecret = process.env.JWT_SECRET as string;
  const accessToken = jwt.sign({ userId: user._id, userEmail: user.email }, jwtSecret, { expiresIn: process.env.JWT_LIFETIME });

  const salt = await bcrypt.genSalt(14);
  const refreshTokenPartA = await bcrypt.hash(user.email, salt);
  const refreshTokenPartB = process.env.JWT_SECRET as string;

  const refreshToken = `DeecoCommerce_SecretRefreshToken_${refreshTokenPartA}_${refreshTokenPartB}`;
  // console.log(refreshToken);

  const tokens = {
    accessToken,
    refreshToken
  };

  return tokens;
}

export default generateTokens;
