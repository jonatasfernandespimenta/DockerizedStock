"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const testing_1 = require("@nestjs/testing");
const product_respository_1 = require("../repositories/product.respository");
const product_service_1 = require("./product.service");
describe('ProductService', () => {
    let service;
    const validProduct = {
        "_id": "60903cae3b2367bd1f449a46",
        "items": [],
        "sku": "Vinil premium laranja",
        "name": "Vinil premium laranja",
        "und": "UN",
        "sector": "Vinil Colorido",
        "resp": "Suzi",
        "provider": "Alltak",
        "quantity": 0,
        "createdAt": "2021-05-03T18:10:54.918Z",
        "__v": 0
    };
    const mockRepository = {
        getProducts: jest.fn().mockResolvedValue([validProduct]),
        getById: jest.fn(),
        deleteProduct: jest.fn(),
        createProduct: jest.fn(),
        getProductByName: jest.fn(),
        updateProduct: jest.fn(),
    };
    beforeAll(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                product_service_1.ProductService,
                {
                    provide: product_respository_1.ProductRepository,
                    useValue: mockRepository
                }
            ],
        }).compile();
        service = module.get(product_service_1.ProductService);
    });
    afterAll(() => {
        mockRepository.getProducts.mockReset();
        mockRepository.getById.mockReset();
        mockRepository.deleteProduct.mockReset();
        mockRepository.createProduct.mockReset();
        mockRepository.getProductByName.mockReset();
        mockRepository.updateProduct.mockReset();
    });
    it('should be defined', async () => {
        expect(service).toBeDefined();
    });
    describe('When get all products', () => {
        it('should return a list containing all products', async () => {
            const product = validProduct;
            mockRepository.getProducts.mockReturnValue([product, product]);
            const products = await service.getProducts();
            expect(mockRepository.getProducts).toHaveBeenCalledTimes(1);
        });
    });
    describe('When get product by id', () => {
        it('should return a product with same id', async () => {
            const product = validProduct;
            mockRepository.getById.mockReturnValue(product);
            const foundProduct = await service.getProduct('60903cae3b2367bd1f449a46');
            expect(foundProduct).toMatchObject(validProduct);
        });
    });
    describe('When create product', () => {
        it('should create a product', async () => {
            const product = {
                "items": [],
                "sku": "Test",
                "name": "Test",
                "und": "UN",
                "sector": "Vinil Colorido",
                "resp": "Suzi",
                "provider": "Alltak",
                "quantity": 0,
                "createdAt": new Date(),
                "days": 0,
                "providerDays": 0
            };
            mockRepository.createProduct.mockReturnValue(product);
            const savedProduct = await service.createProduct({
                "items": [],
                "sku": "Test",
                "name": "Test",
                "und": "UN",
                "sector": "Vinil Colorido",
                "resp": "Suzi",
                "provider": "Alltak",
                "quantity": 0,
                "createdAt": new Date(),
                "days": 0,
                "providerDays": 0
            });
            expect(savedProduct).toMatchObject(product);
        });
        it('should return an exception when user isnt created', async () => {
            const product = {
                "items": [],
                "sku": "Test",
                "name": "Test",
                "und": "UN",
                "sector": "Vinil Colorido",
                "resp": "Suzi",
                "provider": "Alltak",
                "quantity": 0,
                "createdAt": new Date(),
                "days": 0,
                "providerDays": 0
            };
            mockRepository.createProduct.mockReturnValue(null);
            await service.createProduct({
                "items": [],
                "sku": "Test",
                "name": "Test",
                "und": "UN",
                "sector": "Vinil Colorido",
                "resp": "Suzi",
                "provider": "Alltak",
                "quantity": 0,
                "createdAt": new Date(),
                "days": 0,
                "providerDays": 0
            }).catch(err => {
                expect(err).toBeInstanceOf(common_1.HttpException);
                expect(err).toMatchObject({
                    message: 'Product already exists'
                });
            });
        });
    });
    describe('When get product by name', () => {
        it('should return a product with same name', async () => {
            const product = validProduct;
            mockRepository.getProductByName.mockReturnValue(product);
            const foundProduct = await service.getProduct('Vinil');
            expect(foundProduct).toMatchObject(validProduct);
        });
    });
    describe('When update product', () => {
        it('should update a product', async () => {
            const product = validProduct;
            const updatedProduct = { name: 'Updated Name' };
            mockRepository.getById.mockReturnValue(product);
            mockRepository.updateProduct.mockReturnValue(Object.assign(Object.assign({}, product), updatedProduct));
            mockRepository.createProduct.mockReturnValue(Object.assign(Object.assign({}, product), updatedProduct));
            const resultProduct = await service.updateProduct('60903cae3b2367bd1f449a46', Object.assign(Object.assign({}, product), { name: 'Updated Name' }));
            expect(resultProduct).toMatchObject(updatedProduct);
        });
    });
    describe('When delete product', () => {
        it('should delete a product', async () => {
            const product = validProduct;
            mockRepository.deleteProduct.mockReturnValue(product);
            mockRepository.getById.mockReturnValue(product);
            const deletedProduct = await service.delProduct('60903cae3b2367bd1f449a46');
            expect(deletedProduct).toMatchObject(validProduct);
        });
    });
});
//# sourceMappingURL=product.services.spec%20copy.js.map