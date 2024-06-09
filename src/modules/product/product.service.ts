import slugify from "slugify";
import {  Product as Product } from "./product.model";
import { compareAsc, format } from "date-fns";
import {  TProduct } from "./product.interface";

const createProduct = async(payload:TProduct)=>{

    // const date = format(payload.releaseDate,"dd-MM-yyyy");
    // //creating slug
    // const slug = slugify(`${payload.title}-${date}`);


    // const result = await Movie.create({...payload,slug});
    const result = await Product.create(payload);
    return result;
};
const getAllProducts = async()=>{
    const result = await Product.find();
    return result;
};
const getProductById = async(id:string)=>{
    const result = await Product.findById(id);
    return result;
};








export const productServices = {
    createProduct,
    getAllProducts,
    getProductById,
}






//interface => schema => model => query