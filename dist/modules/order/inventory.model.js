"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const mongoose_1 = require("mongoose");
const inventorySchema = new mongoose_1.Schema({
    productId: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
exports.Inventory = (0, mongoose_1.model)("Inventory", inventorySchema);
