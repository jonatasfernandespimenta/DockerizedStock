import { LogController } from './controllers/log.controller';
import { LogService } from './services/log.service';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './domains/schemas/product.schema';
import { ItemSchema } from './domains/schemas/item.schema';
import { ProductRepository } from './repositories/product.respository';
import { ItemController } from './controllers/item.controller';
import { ItemService } from './services/item.service';
import { ItemRepository } from './repositories/item.repository';
import { LogSchema } from './domains/schemas/log.schema';
import { LogRepository } from './repositories/log.repository';

// mongodb://stock-db/estoquedb

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/estoquedb', {
      useFindAndModify: false
    }),
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'Item', schema: ItemSchema },
      { name: 'Log', schema: LogSchema },
    ]),
  ],
  controllers: [
    LogController,
    ProductController,
    AppController,
    ItemController
  ],
  providers: [
    LogService,
    ProductService,
    AppService,
    ProductRepository,
    ItemService,
    ItemRepository,
    LogRepository
  ],
})
export class AppModule { }
