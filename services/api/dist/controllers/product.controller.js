"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_schema_1 = require("../domains/schemas/product.schema");
const product_viewmodel_1 = require("../domains/product.viewmodel");
const product_service_1 = require("../services/product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts() {
        return this.productService.getProducts();
    }
    async getProduct(params) {
        return this.productService.getProduct(params.id);
    }
    async delProduct(params) {
        return this.productService.delProduct(params.id);
    }
    async createProduct(product) {
        return this.productService.createProduct(product);
    }
    async updateProduct(product, params) {
        return this.productService.updateProduct(product, params.id);
    }
    async updateProductQty(product, params) {
        return this.productService.updateProductQty(product, params.id);
    }
    async getByNameOrSku(params) {
        return this.productService.getByName(params.param);
    }
};
__decorate([
    swagger_1.ApiCreatedResponse({
        type: product_viewmodel_1.ProductViewModel,
    }),
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    swagger_1.ApiCreatedResponse({
        type: product_viewmodel_1.ProductViewModel,
    }),
    common_1.Get('/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    swagger_1.ApiCreatedResponse({
        description: 'The record has been successfully deleted.',
        type: product_viewmodel_1.ProductViewModel,
    }),
    common_1.Delete('/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delProduct", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_viewmodel_1.ProductViewModel]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_viewmodel_1.ProductViewModel, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    common_1.Put('qty/:id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductQty", null);
__decorate([
    swagger_1.ApiCreatedResponse({
        type: product_viewmodel_1.ProductViewModel,
    }),
    common_1.Get('/name/:param'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getByNameOrSku", null);
ProductController = __decorate([
    swagger_1.ApiTags('products'),
    common_1.Controller('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map