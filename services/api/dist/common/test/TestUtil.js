"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = require("../../domains/schemas/product.schema");
class TestUtil {
    static giveMeAValidProduct() {
        const product = new product_schema_1.ProductSchema();
        product.name = 'papel branco';
    }
}
exports.default = TestUtil;
//# sourceMappingURL=TestUtil.js.map