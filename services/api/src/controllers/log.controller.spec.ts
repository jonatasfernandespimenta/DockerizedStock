import { Test, TestingModule } from "@nestjs/testing";
import { LogViewModel } from "../domains/log.viewmodel";
import { LogService } from "../services/log.service";
import { LogController } from "./log.controller"

const testLog = {
  "_id": '60903ccf3b23671e5d449b01',
  "inputDate": "2000-11-12T02:00:00.000Z",
  "withdrawDate": null,
  "quantity": 8,
  "sku": "Alcool Para Limpeza"
}

describe('Log Controller', () => {
  let controller: LogController;
  let service: LogService;

  beforeEach(async() => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogController],
      providers: [
        {
          provide: LogService,
          useValue: {
            getlogs: jest.fn().mockResolvedValue([
              {
                "_id": "60903ccf3b23671e5d449b01",
                "inputDate": "2000-11-12T02:00:00.000Z",
                "withdrawDate": null,
                "quantity": 8,
                "sku": "Alcool Para Limpeza"
              },
              {
                "_id": "60903ccf3b23671e5d449b01",
                "inputDate": "2000-11-12T02:00:00.000Z",
                "withdrawDate": null,
                "quantity": 8,
                "sku": "Alcool Para Limpeza"
              },
            ]),
            createLog: jest.fn().mockImplementation((log: LogViewModel) =>
              Promise.resolve({ _id: 'a uuid', ...log })
            ),
            deleteLog: jest.fn().mockImplementation((log: LogViewModel) =>
              Promise.resolve(log)
            )
          },
        }
      ]
    }).compile()

    controller = module.get<LogController>(LogController);
    service = module.get<LogService>(LogService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  })

  describe('getLogs', () => {
    it('should return an array of logs', async () => {
      expect(await controller.getLog()).toEqual([testLog, testLog])
    });
  });

  describe('createLog', () => {
    it('should create a new log', async () => {
      const newLogDTO: LogViewModel = {
        inputDate: new Date(),
        quantity: 1,
        sku: 'Papel',
        withdrawDate: null
      };

      expect(await controller.createLog(newLogDTO)).toEqual({
        _id: 'a uuid',
        ...newLogDTO
      });
    });
  });

})
