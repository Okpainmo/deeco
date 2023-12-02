import mongoose from 'mongoose';
import type { ProductSpecs } from '../schemas/productSchema.zod.js';

const productSchema = new mongoose.Schema<ProductSpecs>(
  {
    productName: {
      type: String,
      required: [true, 'Please add a name for your product']
    },
    productDescription: {
      type: String,
      required: [true, 'Please add a description for your product']
    },
    productPriceInUSD: {
      type: Number,
      required: [true, 'Please specify a price for your product in USD - we will convert to all other currencies for you']
    },
    // product category: a section to come in the future for users to specify which category their products should be in.
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'user'
      // required: [true, 'User not provided'],
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('product', productSchema);
