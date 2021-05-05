import { Test, TestingModule } from "@nestjs/testing";
import { ProductRepository } from "../repositories/product.respository";
import { ProductService } from "./product.service";

describe('ProductService', () => {
  let service: ProductService;

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
  }

  const mockRepository = {
    getProducts: jest.fn().mockResolvedValue([validProduct]),
    getById: jest.fn(),
    deleteProduct: jest.fn(),
    createProduct: jest.fn()
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: ProductRepository,
          useValue: mockRepository
        }
      ],
    }).compile()
    service = module.get<ProductService>(ProductService);
  })

  afterEach(() => {
    mockRepository.getProducts.mockReset();
    mockRepository.getById.mockReset();
    mockRepository.deleteProduct.mockReset();
    mockRepository.createProduct.mockReset();
  })

  it('should be defined', async () => {
    expect(service).toBeDefined();
  })

  describe('Get all products', () => {
    it('should return a list containing all products', async () => {
      const product = validProduct;

      mockRepository.getProducts.mockReturnValue([product, product]);
      const products = await service.getProducts();
      expect(mockRepository.getProducts).toHaveBeenCalledTimes(1);
    })
  })

  describe('Get product by id', () => {
    it('should return a product with same id', async () => {
      const product = validProduct;
      mockRepository.getById.mockReturnValue(product);
      const foundProduct = await service.getProduct('60903cae3b2367bd1f449a46');
      expect(foundProduct).toMatchObject(validProduct);
    })
  })

  describe('Create product', () => {
    it('should create a product', async() => {
      const product = validProduct;
      mockRepository.createProduct.mockReturnValue(product);
      const savedProduct = await service.createProduct({
        "items": [],
        "sku": "Vinil premium laranja",
        "name": "Vinil premium laranja",
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
    })
  })

});
