import { z } from "zod";
// import { TInventory, TProduct, TVariant } from "./product.interface";

const variantSchema = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.string().min(1, "Value is required")
});

// Define the Inventory schema
const inventorySchema = z.object({
  quantity: z.number().min(0, "Quantity must be a positive number").int("Quantity must be an integer"),
  inStock: z.boolean()
});

// Define the Product schema
const productSchema = z.object({
  name: z.string().min(1, "Name is required").max(20, "Name cannot exceed 20 characters"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string().min(1, "Tag cannot be empty")).nonempty("Tags are required"),
  variants: z.array(variantSchema).nonempty("At least one variant is required"),
  inventory: inventorySchema.optional() // Make inventory optional to match the interface
});
export default  productSchema ;