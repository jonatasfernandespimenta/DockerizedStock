import { ItemViewModel } from '../domains/item.viewmodel';
import { ItemRepository } from '../repositories/item.repository';
import { LogRepository } from '../repositories/log.repository';
import { ProductRepository } from '../repositories/product.respository';
export declare class ItemService {
    readonly itemRepository: ItemRepository;
    readonly productRepository: ProductRepository;
    readonly logRepository: LogRepository;
    constructor(itemRepository: ItemRepository, productRepository: ProductRepository, logRepository: LogRepository);
    getItems(): Promise<import("../domains/schemas/item.schema").Item[]>;
    getItem(id: any): Promise<import("../domains/schemas/item.schema").Item>;
    updateItem(newProps: any, id: any): Promise<import("../domains/schemas/item.schema").Item>;
    removeItem(id: any): Promise<boolean>;
    createItem(newItem: ItemViewModel): Promise<{
        created: boolean;
    }>;
}
