import express, { Request, Response } from 'express'
import { orderControllers } from './order.controller';

const router = express.Router()


//order
router.post("/",orderControllers.createOrder);
router.get("/",orderControllers.getAllOrders);


export const orderRouter = router;