"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// import { TInventory, TProduct, TVariant } from "./product.interface";
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, "Type is required"),
    value: zod_1.z.string().min(1, "Value is required")
});
// Define the Inventory schema
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, "Quantity must be a positive number").int("Quantity must be an integer"),
    inStock: zod_1.z.boolean()
});
// Define the Product schema
const productSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required").max(20, "Name cannot exceed 20 characters"),
    description: zod_1.z.string().min(1, "Description is required").max(250, "Name cannot exceed 20 characters"),
    price: zod_1.z.number().min(0, "Price must be a positive number"),
    category: zod_1.z.string().min(1, "Category is required"),
    tags: zod_1.z.array(zod_1.z.string().min(1, "Tag cannot be empty")).nonempty("Tags are required"),
    variants: zod_1.z.array(variantSchema).nonempty("At least one variant is required"),
    inventory: inventorySchema.optional()
});
exports.default = productSchema;
