import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/domains/schemas/product.schema';
import { ProductViewModel } from '../domains/product.viewmodel';
import { ProductService } from '../services/product.service';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {  }

  @ApiCreatedResponse({
    type: ProductViewModel,
  })
  @Get('/')
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @ApiCreatedResponse({
    type: ProductViewModel,
  })
  @Get('/:id')
  async getProduct(@Param() params) {
    return this.productService.getProduct(params.id);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ProductViewModel,
  })
  @Delete('/:id')
  async delProduct(@Param() params) {
    return this.productService.delProduct(params.id);
  }

  @Post('/')
  async createProduct(@Body() product: ProductViewModel) {
    return this.productService.createProduct(product);
  }

  @Put('/:id')
  async updateProduct(@Body() product: ProductViewModel, @Param() params) {
    return this.productService.updateProduct(product, params.id);
  }

  @Put('qty/:id')
  async updateProductQty(@Body() product, @Param() params) {
    return this.productService.updateProductQty(product, params.id);
  }

  @ApiCreatedResponse({
    type: ProductViewModel,
  })
  @Get('/name/:param')
  async getByNameOrSku(@Param() params) {
    return this.productService.getByName(params.param);
  }

}
