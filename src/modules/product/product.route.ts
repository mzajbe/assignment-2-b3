import express, { Request, Response } from 'express'
import { productControllers } from './product.controller';

const router = express.Router()

//product
router.post("/",productControllers.createProduct);
router.get("/:productId",productControllers.getProductById);
router.get("/",productControllers.getAllProducts);
router.put("/:productId", productControllers.updateProduct);
router.delete("/:productId", productControllers.deleteProduct);


export const productRouter = router;
