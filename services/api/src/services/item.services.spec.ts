import { HttpException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { LogRepository } from "../repositories/log.repository";
import { ProductRepository } from "../repositories/product.respository";
import { ItemRepository } from "../repositories/item.repository";
import { ItemService } from "./item.service";
import { LogService } from "./log.service";
import { ProductService } from "./product.service";

describe('ItemService', () => {
  let service: ItemService;
  let productService: ProductService;
  let logService: LogService;

  const validItem = {
    "_id": "60903cd03b236768a2449b0a",
    "createdAt": "2000-11-12T02:00:00.000Z",
    "sku": "Alcool Para Limpeza",
    "__v": 0
  }

  const validProduct = {
    "_id": "60903caf3b23671697449aa0",
    "items": [
      "60903cd03b236768a2449b0a"
    ],
    "sku": "Alcool Para Limpeza",
    "name": "Alcool Para Limpeza",
    "und": "UN",
    "sector": "Cozinha",
    "resp": "Suélen",
    "provider": "Mercado Taquaral",
    "quantity": 8,
    "createdAt": "2021-05-03T18:10:55.021Z",
    "__v": 0
  }

  const rawLog = {
    "_id": "60903ccf3b23671e5d449b01",
    "inputDate": "2000-11-12T02:00:00.000Z",
    "withdrawDate": null,
    "quantity": 8,
    "sku": "Alcool Para Limpeza",
    "__v": 0
  }

  const logRepository = {
    createLog: jest.fn(),
  };

  const mockRepository = {
    getItems: jest.fn().mockResolvedValue([validItem]),
    getById: jest.fn(),
    deleteItem: jest.fn(),
    createItem: jest.fn(),
    updateItem: jest.fn(),
  };

  const productMock = {
    getProducts: jest.fn().mockResolvedValue([validProduct]),
    getById: jest.fn(),
    deleteProduct: jest.fn(),
    createProduct: jest.fn(),
    getProductByName: jest.fn().mockResolvedValue([validProduct]),
    updateProduct: jest.fn(),
  };


  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemService,
        {
          provide: ItemRepository,
          useValue: mockRepository
        },
        {
          provide: ProductRepository,
          useValue: productMock
        },
        {
          provide: LogRepository,
          useValue: logRepository
        },
        {
          provide: LogService,
          useValue: { createLog: jest.fn() }
        },
        {
          provide: ProductService,
          useValue: { updateProduct: jest.fn() }
        }
      ],
    }).compile()
    service = module.get<ItemService>(ItemService);
    productService = module.get<ProductService>(ProductService);
    logService = module.get<LogService>(LogService);
  })

  afterAll(() => {
    mockRepository.getItems.mockReset();
    mockRepository.getById.mockReset();
    mockRepository.deleteItem.mockReset();
    mockRepository.createItem.mockReset();
    mockRepository.updateItem.mockReset();

    logRepository.createLog.mockReset();

    productMock.createProduct.mockReset();
    productMock.deleteProduct.mockReset();
    productMock.getById.mockReset();
    productMock.getProductByName.mockReset();
    productMock.getProducts.mockReset();
    productMock.updateProduct.mockReset();
  })

  it('should be defined', async () => {
    expect(service).toBeDefined();
  })

  it('should be defined', async () => {
    expect(productService).toBeDefined();
  })

  it('should be defined', async () => {
    expect(logService).toBeDefined();
  })

  describe('When get all items', () => {
    it('should return a list containing all items', async () => {
      const item = validItem;

      mockRepository.getItems.mockReturnValue([item, item]);
      const items = await service.getItems();


      expect(mockRepository.getItems).toHaveBeenCalledTimes(1);
    })
  })

  describe('When get item by id', () => {
    it('should return a item with same id', async () => {
      const item = validItem;
      mockRepository.getById.mockReturnValue(item);
      const foundItem = await service.getItem('60903ccf3b23671e5d449b01');
      expect(foundItem).toMatchObject(validItem);
    })
  });

  describe('When create item', () => {
    it('should create a item', async() => {
      const item = {
        "createdAt": new Date(),
        "sku": "Alcool Para Limpeza",
        "quantity": 2,
        'productName': 'Alcool Para Limpeza',
        'created': false
      };
      mockRepository.createItem.mockReturnValue(item);
      const savedItem = await service.createItem({
        "createdAt": new Date(),
        "sku": "Alcool Para Limpeza",
        "quantity": 2,
        'productName': 'Alcool Para Limpeza',
      });
      expect(savedItem).toMatchObject({'created': false});
    });
  });

  describe('When update item', () => {
    it('should update a item', async () => {
      const item = validItem;
      const updatedItem = { name: 'Updated Name' }
      mockRepository.getById.mockReturnValue(item);
      mockRepository.updateItem.mockReturnValue({
        ...item,
        ...updatedItem
      })
      mockRepository.createItem.mockReturnValue({
        ...item,
        ...updatedItem
      })

      const resultitem = await service.updateItem('60903cae3b2367bd1f449a46', {
        ...item,
        name: 'Updated Name'
      });

      expect(resultitem).toMatchObject(updatedItem);
    })
  });

  describe('When delete item', () => {
    it('should delete a item', async () => {
        mockRepository.getById.mockResolvedValueOnce(validItem);
        productMock.getProducts.mockResolvedValueOnce([validProduct]);
        logRepository.createLog.mockResolvedValueOnce(rawLog);
        productMock.updateProduct.mockResolvedValueOnce(undefined);
        mockRepository.deleteItem.mockResolvedValueOnce(validItem);
        expect(await service.removeItem('60903cd03b236768a2449b0a')).toEqual(true);
    })
  })

});
