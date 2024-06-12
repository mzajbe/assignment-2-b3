import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderSchema from "./zod.order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodValidationData = orderSchema.parse(orderData);
    const result = await orderServices.createOrder(zodValidationData);
    res.json({
      success: true,
      message: "Order is created successfully!",
      data: result,
    });
  } catch (err: any) {
    if (err.message === "Insufficient quantity available in inventory") {
      res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    } else if (err.message === "Product not found in inventory") {
      res.status(404).json({
        success: false,
        message: "Product not found in inventory",
      });
    } else {
      res.status(400).json({
        success: false,
        message: err.message,
        error: err.errors,
      });
    }
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
      message: "Could not fetch Orders!",
      error: err,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { orderEmail } = req.params;
    const result = await orderServices.getOrderByEmail(orderEmail);
    res.status(200).json({
      success: true,
      message: "Orders are fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Orders!",
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};



// import { Request, Response } from "express";
// import { orderServices } from "./order.service";
// import orderSchema from "./zod.order.validation";

// //order
// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const orderData = req.body;
//     const zodValidationData = orderSchema.parse(orderData);
//     const result = await orderServices.createOrder(zodValidationData);
//     res.json({
//       success: true,
//       message: "product is created successfully!",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(400).json({
//       success: false,
//       message: err.message,
//       error: err.errors,
//     });
//   }
// };

// const getAllOrders = async (req: Request, res: Response) => {
//   try {
//     const result = await orderServices.getAllOrders();

//     res.status(200).json({
//       success: true,
//       message: "Orders are fetched successfully!",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "could not fetch Orders!",
//       error: err,
//     });
//   }
// };

// const getOrderByEmail = async (req: Request, res: Response) => {
//   try {
//     const { orderEmail: orderEmail } = req.params;
//     const result = await orderServices.getOrderByEmail(orderEmail);

//     res.status(200).json({
//       success: true,
//       message: "Product are fetched successfully!",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "could not fetch Product!",
//       error: err,
//     });
//   }
// };

// export const orderControllers = {
//   createOrder,
//   getAllOrders,
//   getOrderByEmail,
// };
