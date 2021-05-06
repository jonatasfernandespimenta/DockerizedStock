import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LogViewModel } from '../domains/log.viewmodel';
import { LogService } from '../services/log.service';
import { runInThisContext } from 'vm';

@ApiTags('logs')
@Controller('/log')
export class LogController {
  constructor(private logService: LogService) {  }

  @ApiCreatedResponse({
    type: LogViewModel,
  })
  @Get('/')
  async getLog() {
    return this.logService.getlogs();
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: LogViewModel,
  })
  @Delete('/:id')
  async removeLog(@Param() params) {
    return this.logService.deleteLog(params.id);
  }

  @Post('/')
  async createLog(@Body() body: LogViewModel) {
    return this.logService.createLog(body)
  }

}
