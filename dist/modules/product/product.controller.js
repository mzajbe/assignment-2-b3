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
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const zod_Product_validation_1 = __importDefault(require("./zod.Product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodValidationData = zod_Product_validation_1.default.parse(productData);
        // Proceed with creating the product
        const result = yield product_service_1.productServices.createProduct(zodValidationData);
        res.json({
            success: true,
            message: "Product is created successfully!",
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
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.productServices.getAllProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: searchTerm ? `Products matching search term '${searchTerm}' fetched successfully!` : "Products are fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products!",
            error: err,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId: productId } = req.params;
        const result = yield product_service_1.productServices.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product are fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "could not fetch Product!",
            error: err,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = yield product_service_1.productServices.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not update product!",
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.productServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not delete product!",
            error: err,
        });
    }
});
exports.productControllers = {
    createProduct: createProduct,
    getAllProducts,
    getProductById: getProductById,
    updateProduct,
    deleteProduct,
};
