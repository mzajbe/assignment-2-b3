import { TOrder } from "./order.interface";
import { Order } from "./order.model";



//order
const createOrder = async(payload:TOrder)=>{

    const result = await Order.create(payload);
    return result;
};


const getAllOrders = async()=>{
    const result = await Order.find();
    return result;
};

const getOrderByEmail = async(email:string)=>{
    const result = await Order.find({email});
    return result;
};

export const orderServices = {
    createOrder,
    getAllOrders,
    getOrderByEmail,
}

