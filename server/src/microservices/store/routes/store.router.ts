import express from 'express';
import createNewStore from '../controllers/createStore.controller.js';
import authMiddleware from '../../../middlewares/authMiddleware.js';
import getStore from '../controllers/getStore.controler.js';
import createNewProduct from '../controllers/createProduct.controller.js';
import getAllUserStoreData from '../controllers/getAllUserStoreData.controller.js';
import getAllUserStoreDataById from '../controllers/getAllUserStoreData.controllerById.js';

// express router init
const router = express.Router();

// routes

router.route('/create-store').post(authMiddleware, createNewStore);
router.route('/get-store').get(authMiddleware, getStore);
router.route('/create-product').post(authMiddleware, createNewProduct);
router.route('/get-all-store-data').get(authMiddleware, getAllUserStoreData);
router.route('/get-all-store-data/:storeOwnerId').get(getAllUserStoreDataById);

export default router;
