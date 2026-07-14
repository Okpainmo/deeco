import productModel from '../models/product.model.js';

export async function findAllUserProduct(userId: string) {
  try {
    const allUserProducts = await productModel.find({ createdBy: userId });
    // console.log(userId);

    // console.log(allUserProducts);
    return allUserProducts;
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
