import userModel from '../models/userModel.js';
export async function createUser(hashedPassword, hashedConfirmPassword, userData) {
  const { fullName, email } = userData;
  try {
    const newUser = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword
    });
    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.log(error);
      throw new Error('An error occurred');
    }
  }
}
