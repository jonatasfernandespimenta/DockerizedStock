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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductViewModel = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ProductViewModel {
    constructor(sku, quantity, name, createdAt, items, days, providerDays, resp, und, sector, provider) {
        this.sku = sku !== null && sku !== void 0 ? sku : name;
        this.quantity = quantity;
        this.name = name;
        this.createdAt = createdAt;
        this.items = items;
        this.days = days;
        this.providerDays = providerDays;
        this.resp = resp;
        this.und = und;
        this.sector = sector;
        this.provider = provider;
    }
}
__decorate([
    swagger_1.ApiProperty({
        example: 'papel branco fosco',
        description: 'SKU do produto'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductViewModel.prototype, "sku", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 5,
        description: 'Quantidade em estoque de um produto'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductViewModel.prototype, "quantity", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'papel branco fosco',
        description: 'nome do produto'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductViewModel.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: new Date(),
        description: 'Data de criação'
    }),
    __metadata("design:type", Date)
], ProductViewModel.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 10,
        description: 'Dias de estoque desejaveis para saber quando comprar mais. Por exemplo se os dias de estoque sao 10 e só tem em estoque o suficiente para 8 dias, já está na hora de comprar mais.'
    }),
    __metadata("design:type", Number)
], ProductViewModel.prototype, "days", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 4,
        description: 'Quantidade de dias que demora para o fornecedor entregar o produto'
    }),
    __metadata("design:type", Number)
], ProductViewModel.prototype, "providerDays", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Jon Doe',
        description: 'Responsavel pelo produto'
    }),
    __metadata("design:type", String)
], ProductViewModel.prototype, "resp", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'CX',
        description: 'Unidade do produto, necessario para saber se é unitario(UN), caixa(CX), etc'
    }),
    __metadata("design:type", String)
], ProductViewModel.prototype, "und", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Papelaria',
        description: 'Setor do produto'
    }),
    __metadata("design:type", String)
], ProductViewModel.prototype, "sector", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Empresa top de papel',
        description: 'Nome do fornecedor'
    }),
    __metadata("design:type", String)
], ProductViewModel.prototype, "provider", void 0);
exports.ProductViewModel = ProductViewModel;
//# sourceMappingURL=product.viewmodel.js.map