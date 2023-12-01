import userModel from '../models/userModel.js';
export async function findUser(userData) {
    const { email } = userData;
    try {
        const user = await userModel.findOne({
            email
        });
        return user;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            throw new Error(error.message);
        }
        else {
            console.log(error);
            throw new Error('An error occurred');
        }
    }
}
