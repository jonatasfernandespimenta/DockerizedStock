import { ProductViewModel } from '../domains/product.viewmodel';
import { ProductRepository } from '../repositories/product.respository';
export declare class ProductService {
    readonly productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    getProducts(): Promise<import("../domains/schemas/product.schema").Product[]>;
    getByNameOrSku(params: any): Promise<import("../domains/schemas/product.schema").Product[]>;
    getProduct(id: any): Promise<import("../domains/schemas/product.schema").Product>;
    delProduct(id: any): Promise<import("../domains/schemas/product.schema").Product>;
    updateProduct(newProps: any, id: any): Promise<import("../domains/schemas/product.schema").Product>;
    updateProductQty(newProps: any, id: any): Promise<import("../domains/schemas/product.schema").Product>;
    inventoryWithdraw(newProps: any, id: any): Promise<import("../domains/schemas/product.schema").Product>;
    createProduct(newProduct: ProductViewModel): Promise<import("../domains/schemas/product.schema").Product>;
}
