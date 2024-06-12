"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    productId: zod_1.z.string(),
    price: zod_1.z.number().min(0, { message: "Price must be a positive number" }),
    quantity: zod_1.z.number().min(1, { message: "Quantity must be at least 1" }).optional().default(1),
});
exports.default = orderSchema;
