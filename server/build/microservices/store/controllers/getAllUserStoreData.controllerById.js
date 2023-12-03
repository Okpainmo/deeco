import { findStore } from '../lib/findStore.service.js';
import { findAllUserProduct } from '../lib/findAllUserProduct.service.js';
const getAllUserStoreDataById = async (req, res) => {
  try {
    const { storeOwnerId } = req.params;
    // check if user has already created a store
    const basicStoreInfo = await findStore(storeOwnerId);
    if (!basicStoreInfo) {
      // console.log(store);
      return res.status(404).json({
        error: 'store not found',
        responseMessage: `store not found on this user: please create a store first`
      });
    }
    const allUserProducts = await findAllUserProduct(storeOwnerId);
    console.log(allUserProducts);
    if (!allUserProducts) {
      // console.log(store);
      return res.status(404).json({
        error: 'products not fetched',
        responseMessage: `products data for this store could not be fetched`
      });
    }
    return res.status(200).json({
      responseMessage: 'store data fetched successfully',
      response: {
        storeData: {
          basicStoreInfo,
          productCount: allUserProducts.length,
          products: allUserProducts
        }
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        responseMessage: 'store creation failed',
        error: error.message
      });
    } else {
      return res.status(500).json({
        responseMessage: 'store creation unsuccessful: please try again',
        error: error
      });
    }
  }
};
export default getAllUserStoreDataById;
