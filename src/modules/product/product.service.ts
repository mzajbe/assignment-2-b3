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
// const getAllProducts = async()=>{
//     const result = await Product.find();
//     return result;
// };

const getAllProducts = async (searchTerm?: string) => {
    const query = searchTerm ? { name: new RegExp(searchTerm, 'i') } : {};
    const result = await Product.find(query);
    return result;
  };
const getProductById = async(id:string)=>{
    const result = await Product.findById(id);
    return result;
};
const updateProduct = async (id: string, payload: TProduct) => {
    const result = await Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
  };
  const deleteProduct = async (id: string) => {
    await Product.findByIdAndDelete(id);
  };
export const productServices = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}