import type { ProductSpecs } from '../schemas/productSchema.zod.js';
import productModel from '../models/product.model.js';

export async function createProduct(storeData: ProductSpecs) {
  const { productName, productDescription, productPriceInUSD, createdBy } = storeData;

  try {
    const newProduct = await productModel.create({
      productName,
      productDescription,
      productPriceInUSD,
      createdBy
    });

    return newProduct;
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
