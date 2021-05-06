import { LogViewModel } from '../domains/log.viewmodel';
import { LogService } from '../services/log.service';
export declare class LogController {
    private logService;
    constructor(logService: LogService);
    getLog(): Promise<{
        product: any[];
    }>;
    removeLog(params: any): Promise<import("../domains/schemas/log.schema").Log>;
    createLog(body: LogViewModel): Promise<import("../domains/schemas/log.schema").Log>;
}
