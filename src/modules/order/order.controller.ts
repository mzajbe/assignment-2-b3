import { Request, Response } from "express";
import { orderServices } from "./order.service";




//order
const createOrder = async (req: Request, res: Response) => {
    const orderData = req.body;
    const result = await orderServices.createOrder(orderData);
  
    res.json({
      success: true,
      message: "product is created successfully!",
      data: result,
    });
  };


  const getAllOrders = async (req:Request,res:Response)=>{
    try{
        const result = await orderServices.getAllOrders();

        res.status(200).json({
            success:true,
            message:"Orders are fetched successfully!",
            data:result,
        });
    }catch(err:any){
        res.status(500).json({
            success:false,
            message:"could not fetch Orders!",
            error:err,
        });
    }
}


  export const orderControllers = {
    createOrder,
    getAllOrders,

}