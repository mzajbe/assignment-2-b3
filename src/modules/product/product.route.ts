import express, { Request, Response } from 'express'
import { productControllers } from './product.controller';

const router = express.Router()


//product
router.post("/",productControllers.createProduct);
router.get("/:productId",productControllers.getProductById);
router.get("/",productControllers.getAllProducts);




export const productRouter = router;
