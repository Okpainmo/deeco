import mongoose from 'mongoose';
const storeSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      required: [true, 'Please provide a name for your store']
    },
    storeDescription: {
      type: String,
      required: [true, 'Please add a description for your store']
    },
    // store category: an array to come in future for users to add different product categories for their products.
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
export default mongoose.model('store', storeSchema);
