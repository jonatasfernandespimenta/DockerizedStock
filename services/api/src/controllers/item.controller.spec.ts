import { Test, TestingModule } from "@nestjs/testing";
import { join } from 'path';
import { ItemViewModel } from "../domains/item.viewmodel";
import { ItemService } from "../services/item.service";
import { ItemController } from "./item.controller"

const mockedItems = {
  "_id": "60903cd03b23672d82449b02",
  "createdAt": "2000-11-12T02:00:00.000Z",
  "sku": "Alcool Para Limpeza",
  "__v": 0
};

describe('Item controller', () => {
  let controller: ItemController;
  let service: ItemService;

  const mockRepository = {
    getItems: jest.fn().mockResolvedValue([mockedItems, mockedItems]),
    getItem: jest.fn().mockImplementation((id: string) => Promise.resolve(mockedItems)),
    createItem: jest.fn().mockImplementation((item: ItemViewModel) => Promise.resolve({ 
      _id: 'a uuid', ...item
    })),
    removeItem: jest.fn().mockResolvedValue(true),
  }

  beforeEach(async() => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [
        {
          provide: ItemService,
          useValue: mockRepository
        }
      ]
    }).compile();
    controller = module.get<ItemController>(ItemController);
    service = module.get<ItemService>(ItemService);
  })

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    describe('getItems', () => {
      it('should return an array of items', async () => {
        expect(await controller.getItems()).toEqual([mockedItems, mockedItems]);
      });
    });

    describe('getOneItem', () => {
      it('should return a single item', async() => {
        expect(await controller.getItem('60903cd03b23672d82449b02')).toEqual(mockedItems);
      });
    });

    describe('createItem', () => {
      it('should create a new item', async() => {
        const newItemDTO: ItemViewModel = {
          createdAt: new Date(),
          productName: 'Test',
          quantity: 2,
          sku: 'Test'
        };

        expect(await controller.createItem(newItemDTO, undefined)).toEqual(undefined)
      })
    })

  })
