import storeModel from '../models/store.model.js';
export async function createStore(storeData) {
  const { storeName, storeDescription, createdBy } = storeData;
  try {
    const newStore = await storeModel.create({
      storeName,
      storeDescription,
      createdBy
    });
    return newStore;
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
