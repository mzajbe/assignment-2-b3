
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
    const { orderEmail } = req.params;
    console.log("Searching for orders with email:", orderEmail); // Debugging log

    const result = await orderServices.getOrderByEmail(orderEmail);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "No order found for the provided email.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order is fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch order!",
      error: err.message,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
