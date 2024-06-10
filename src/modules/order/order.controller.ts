import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderSchema from "./zod.order.validation";

//order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodValidationData = orderSchema.parse(orderData);
    const result = await orderServices.createOrder(zodValidationData);
    res.json({
      success: true,
      message: "product is created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: err.errors,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrders();

    res.status(200).json({
      success: true,
      message: "Orders are fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "could not fetch Orders!",
      error: err,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { orderEmail: orderEmail } = req.params;
    const result = await orderServices.getOrderByEmail(orderEmail);

    res.status(200).json({
      success: true,
      message: "Product are fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "could not fetch Product!",
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
