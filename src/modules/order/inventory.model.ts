import { Schema, model } from "mongoose";
import { TInventory } from "./inventory.interface";

const inventorySchema = new Schema<TInventory>({
  productId: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const Inventory = model<TInventory>("Inventory", inventorySchema);