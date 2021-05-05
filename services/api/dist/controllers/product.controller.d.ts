import { Product } from 'src/domains/schemas/product.schema';
import { ProductViewModel } from '../domains/product.viewmodel';
import { ProductService } from '../services/product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    getProduct(params: any): Promise<Product>;
    delProduct(params: any): Promise<Product>;
    createProduct(product: ProductViewModel): Promise<Product>;
    updateProduct(product: ProductViewModel, params: any): Promise<Product>;
    updateProductQty(product: any, params: any): Promise<Product>;
    getByNameOrSku(params: any): Promise<Product[]>;
}
