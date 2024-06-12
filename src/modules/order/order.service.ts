import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Inventory } from "./inventory.model";

const createOrder = async (payload: TOrder) => {
  const { productId, quantity } = payload;

  // Check inventory for the product
  const inventory = await Inventory.findOne({ productId });
  if (!inventory) {
    throw new Error("Product not found in inventory");
  }

  // Check if sufficient quantity is available
  if (inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  // Create the order
  const result = await Order.create(payload);

  // Update inventory
  inventory.quantity -= quantity;
  inventory.inStock = inventory.quantity > 0;
  await inventory.save();

  return result;
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const orderServices = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};



// import { TOrder } from "./order.interface";
// import { Order } from "./order.model";



// //order
// const createOrder = async(payload:TOrder)=>{

//     const result = await Order.create(payload);
//     return result;
// };


// const getAllOrders = async()=>{
//     const result = await Order.find();
//     return result;
// };

// const getOrderByEmail = async(email:string)=>{
//     const result = await Order.find({email});
//     return result;
// };

// export const orderServices = {
//     createOrder,
//     getAllOrders,
//     getOrderByEmail,
// }

