import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';
import { join } from 'path';
import { ItemViewModel } from '../domains/item.viewmodel';
import { ItemService } from '../services/item.service';

@ApiTags('items')
@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {  }

  @ApiCreatedResponse({
    type: ItemViewModel,
  })
  @Get('/')
  async getItems() {
    return this.itemService.getItems();
  }

  @ApiCreatedResponse({
    type: ItemViewModel,
  })
  @Get('/:id')
  async getItem(@Param() params) {
    return this.itemService.getItem(params.id);
  }

  @Post('/')
  async createItem(@Body() Item: ItemViewModel, @Res() res) {
    const response = await this.itemService.createItem(Item);
    if(response.created) {
      return res.sendFile(join(__dirname, '..', '..', 'teste.txt'));
    }
  }

  @ApiCreatedResponse({
    type: ItemViewModel,
  })
  @Get('delete/:id')
  async updateItem(@Param() params) {
    return this.itemService.removeItem(params.id);
  }

}
