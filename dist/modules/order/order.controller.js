"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const order_service_1 = require("./order.service");
const zod_order_validation_1 = __importDefault(require("./zod.order.validation"));
//order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodValidationData = zod_order_validation_1.default.parse(orderData);
        const result = yield order_service_1.orderServices.createOrder(zodValidationData);
        res.json({
            success: true,
            message: "product is created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
            error: err.errors,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders are fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "could not fetch Orders!",
            error: err,
        });
    }
});
const getOrderByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderEmail } = req.params;
        console.log("Searching for orders with email:", orderEmail); // Debugging log
        const result = yield order_service_1.orderServices.getOrderByEmail(orderEmail);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "No order found for the provided email.",
            });
        }
        res.status(200).json({
            success: true,
            message: "Order is fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch order!",
            error: err.message,
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrders,
    getOrderByEmail,
};
