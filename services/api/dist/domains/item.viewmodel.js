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
exports.ItemViewModel = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ItemViewModel {
    constructor(createdAt, sku) {
        this.createdAt = createdAt;
        this.sku = sku;
    }
}
__decorate([
    swagger_1.ApiProperty({
        example: 'papel branco fosco',
        description: 'Nome do produto'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ItemViewModel.prototype, "sku", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 3,
        description: 'Quantidade de itens que irão entrar para o estoque'
    }),
    __metadata("design:type", Number)
], ItemViewModel.prototype, "quantity", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'papel branco fosco',
        description: 'Nome do produto'
    }),
    __metadata("design:type", String)
], ItemViewModel.prototype, "productName", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: new Date(),
        description: 'Data de criação'
    }),
    __metadata("design:type", Date)
], ItemViewModel.prototype, "createdAt", void 0);
exports.ItemViewModel = ItemViewModel;
//# sourceMappingURL=item.viewmodel.js.map