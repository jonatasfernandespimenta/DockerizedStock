import { HttpException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { LogRepository } from "../repositories/log.repository";
import { LogService } from "./log.service";

describe('LogService', () => {
  let service: LogService;

  const validLog = {
    "log": [
      {
        "name": "Alcool Para Limpeza",
        "exits": [
          {
            "withdrawDate": "Invalid Date",
            "inputDate": "12-11-2000",
            "quantity": 1
          },
          {
            "withdrawDate": "Invalid Date",
            "inputDate": "12-11-2000",
            "quantity": 1
          },
        ]
      }
    ]
  }

  const rawLog = {
    "_id": "60903ccf3b23671e5d449b01",
    "inputDate": "2000-11-12T02:00:00.000Z",
    "withdrawDate": null,
    "quantity": 8,
    "sku": "Alcool Para Limpeza",
    "__v": 0
  }

  const mockRepository = {
    getLogs: jest.fn().mockResolvedValue([validLog]),
    getById: jest.fn(),
    deleteLog: jest.fn(),
    createLog: jest.fn(),
    updateLog: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogService,
        {
          provide: LogRepository,
          useValue: mockRepository
        }
      ],
    }).compile()
    service = module.get<LogService>(LogService);
  })

  afterAll(() => {
    mockRepository.getLogs.mockReset();
    mockRepository.getById.mockReset();
    mockRepository.deleteLog.mockReset();
    mockRepository.createLog.mockReset();
    mockRepository.updateLog.mockReset();
  })

  it('should be defined', async () => {
    expect(service).toBeDefined();
  })

  describe('When get all logs', () => {
    it('should return a list containing all logs', async () => {
      const log = validLog;

      mockRepository.getLogs.mockReturnValue([log, log]);
      const logs = await service.getlogs();


      expect(mockRepository.getLogs).toHaveBeenCalledTimes(1);
    })
  })

  describe('When get log by id', () => {
    it('should return a log with same id', async () => {
      const log = rawLog;
      mockRepository.getById.mockReturnValue(log);
      const foundLog = await service.getlog('60903ccf3b23671e5d449b01');
      expect(foundLog).toMatchObject(rawLog);
    })
  });

  describe('When create log', () => {
    it('should create a log', async() => {
      const log = {
        "inputDate": "2000-11-12T02:00:00.000Z",
        "withdrawDate": null,
        "quantity": 8,
        "sku": "Alcool Para Limpeza",
      };
      mockRepository.createLog.mockReturnValue(log);
      const savedLog = await service.createLog({
        "inputDate": "2000-11-12T02:00:00.000Z",
        "withdrawDate": null,
        "quantity": 8,
        "sku": "Alcool Para Limpeza",
      });
      expect(savedLog).toMatchObject(log);
    });
  });

  describe('When update log', () => {
    it('should update a log', async () => {
      const log = rawLog;
      const updatedLog = { name: 'Updated Name' }
      mockRepository.getById.mockReturnValue(log);
      mockRepository.updateLog.mockReturnValue({
        ...log,
        ...updatedLog
      })
      mockRepository.createLog.mockReturnValue({
        ...log,
        ...updatedLog
      })

      const resultlog = await service.updatelog('60903cae3b2367bd1f449a46', {
        ...log,
        name: 'Updated Name'
      });

      expect(resultlog).toMatchObject(updatedLog);
    })
  });

  describe('When delete log', () => {
    it('should delete a log', async () => {
      const log = rawLog;
      mockRepository.deleteLog.mockReturnValue(log);
      mockRepository.getById.mockReturnValue(log);

      const deletedlog = await service.deleteLog('60903cae3b2367bd1f449a46');

      expect(deletedlog).toMatchObject(rawLog);
    })
  })

});
