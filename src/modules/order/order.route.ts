import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

// Order routes
router.post("/", orderControllers.createOrder);
router.get("/", orderControllers.getAllOrders);
router.get("/:orderEmail", orderControllers.getOrderByEmail);

export const orderRouter = router;



// import express, { Request, Response } from 'express'
// import { orderControllers } from './order.controller';

// const router = express.Router()


// //order
// router.post("/",orderControllers.createOrder);
// router.get("/",orderControllers.getAllOrders);
// router.get("/:orderEmail",orderControllers.getOrderByEmail);


// export const orderRouter = router;