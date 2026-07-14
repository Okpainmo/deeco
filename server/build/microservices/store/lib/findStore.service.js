import storeModel from '../models/store.model.js';
export async function findStore(userId) {
  try {
    const store = await storeModel.findOne({
      createdBy: userId
    });
    return store;
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
