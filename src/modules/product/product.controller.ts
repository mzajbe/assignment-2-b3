import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await productServices.createProduct(productData);

  res.json({
    success: true,
    message: "product is created successfully!",
    data: result,
  });
};




const getAllProducts = async (req:Request,res:Response)=>{
    try{
        const result = await productServices.getAllProducts();

        res.status(200).json({
            success:true,
            message:"Products are fetched successfully!",
            data:result,
        });
    }catch(err:any){
        res.status(500).json({
            success:false,
            message:"could not fetch products!",
            error:err,
        });
    }
}



const getProductById = async (req:Request,res:Response)=>{
    try{
        const {productId: productId}=req.params;
        const result = await productServices.getProductById(productId);

        res.status(200).json({
            success:true,
            message:"Product are fetched successfully!",
            data:result,
        });
    }catch(err:any){
        res.status(500).json({
            success:false,
            message:"could not fetch Product!",
            error:err,
        });
    }
}




export const productControllers = {
    createProduct: createProduct,
    getAllProducts,
    getProductById: getProductById,
}
