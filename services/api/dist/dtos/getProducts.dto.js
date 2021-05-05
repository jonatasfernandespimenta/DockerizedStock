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
exports.GetProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetProductsDto {
}
__decorate([
    swagger_1.ApiProperty({
        example: '67a89sd0a789das',
        description: 'ID do produto',
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: '["60903f773b23677b2f44ab08", "60903f773b71829304ab38"]',
        description: 'Array contendo os IDs dos items em estoque',
        type: [String]
    }),
    __metadata("design:type", Array)
], GetProductsDto.prototype, "items", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Papel Branco Fosco',
        description: 'SKU do produto',
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "sku", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Papel Branco Fosco',
        description: 'Nome do produto',
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'CX',
        description: 'Unidade do produto, necessario para saber se é unitario(UN), caixa(CX), etc'
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "und", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Papelaria',
        description: 'Setor do produto'
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "sector", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Jon Doe',
        description: 'Responsavel pelo produto'
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "resp", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Empresa top de papel',
        description: 'Nome do fornecedor'
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "provider", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 5,
        description: 'Quantidade em estoque de um produto'
    }),
    __metadata("design:type", Number)
], GetProductsDto.prototype, "quantity", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: new Date(),
        description: 'Data de criação'
    }),
    __metadata("design:type", String)
], GetProductsDto.prototype, "createdAt", void 0);
exports.GetProductsDto = GetProductsDto;
//# sourceMappingURL=getProducts.dto.js.map