import userModel from '../models/userModel.js';
import type { UserSpecs } from '../schemas/userSchema.zod.js';

export async function createUser(hashedPassword: string, hashedConfirmPassword: string, userData: UserSpecs) {
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
