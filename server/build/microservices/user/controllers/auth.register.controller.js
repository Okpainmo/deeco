// import userModel from '../models/userModel.js';
import generateTokens from '../../../utils/generateTokens.js';
import hashPassword from '../../../utils/hashPassword.js';
import { createUser } from '../lib/auth.createUser.service.js';
import { validateConfirmPasswordWithRegex, validatePasswordWithRegex } from '../../../utils/validatePasswordWithRegex.js';
const registerUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  try {
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: 'user input missing',
        responseMessage: 'request unsuccessful: please provide all inputs'
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: 'password and confirm-password mis-match',
        responseMessage: 'password and confirm-password must match'
      });
    }
    const passwordValidationResponse = validatePasswordWithRegex(password);
    const confirmPasswordValidationResponse = validateConfirmPasswordWithRegex(confirmPassword);
    if (!passwordValidationResponse && !confirmPasswordValidationResponse) {
      return res.status(403).json({
        error: 'request rejected',
        responseMessage: 'password and confirm-password must match specifications'
      });
    }
    //hash passwords
    const hashedPassword = await hashPassword(password);
    const hashedConfirmPassword = await hashPassword(confirmPassword);
    // create user - using an extracted DB-layer function
    const user = await createUser(hashedPassword, hashedConfirmPassword, req.body);
    if (user) {
      const generatedTokens = await generateTokens(user);
      const { refreshToken } = generatedTokens;
      // set refresh token as cookie for authorization purposes
      res.cookie('DeecoCommerce_SecretRefreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      });
      const { accessToken } = generatedTokens;
      return res.status(201).json({
        responseMessage: 'user sign-up/registration successful',
        response: {
          user,
          accessToken: accessToken
        }
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      const myErrorString = error.message;
      if (myErrorString.includes('email_1 dup key: { email:')) {
        return res.status(400).json({
          responseMessage: 'duplicate user email detected',
          error: 'email already exist on another user: please attempt your sign up with a different email'
        });
      } else {
        // Handle other unique index violations as needed
        return res.status(500).json({
          responseMessage: 'duplicate key error. Please check your input.',
          error: error.message
        });
      }
    } else {
      return res.status(500).json({
        responseMessage: 'profile creation failed: please try again',
        error: error
      });
    }
  }
  return;
};
export default registerUser;
