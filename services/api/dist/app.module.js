"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const log_controller_1 = require("./controllers/log.controller");
const log_service_1 = require("./services/log.service");
const product_controller_1 = require("./controllers/product.controller");
const product_service_1 = require("./services/product.service");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./domains/schemas/product.schema");
const item_schema_1 = require("./domains/schemas/item.schema");
const product_respository_1 = require("./repositories/product.respository");
const item_controller_1 = require("./controllers/item.controller");
const item_service_1 = require("./services/item.service");
const item_repository_1 = require("./repositories/item.repository");
const log_schema_1 = require("./domains/schemas/log.schema");
const log_repository_1 = require("./repositories/log.repository");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/estoquedb', {
                useFindAndModify: false
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Product', schema: product_schema_1.ProductSchema },
                { name: 'Item', schema: item_schema_1.ItemSchema },
                { name: 'Log', schema: log_schema_1.LogSchema },
            ]),
        ],
        controllers: [
            log_controller_1.LogController,
            product_controller_1.ProductController,
            app_controller_1.AppController,
            item_controller_1.ItemController
        ],
        providers: [
            log_service_1.LogService,
            product_service_1.ProductService,
            app_service_1.AppService,
            product_respository_1.ProductRepository,
            item_service_1.ItemService,
            item_repository_1.ItemRepository,
            log_repository_1.LogRepository
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map