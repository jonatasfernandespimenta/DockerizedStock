import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { RedocOptions, RedocModule } from 'nestjs-redoc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Estoque')
  .setDescription('Documentaçao da API de estoque')
  .setVersion('1.0')
  .setBasePath('/api/v1')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  const redocOptions: RedocOptions = {
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    auth: {
      enabled: false,
      user: 'admin',
      password: '123'
    },
    tagGroups: [
      {
        name: 'Produtos',
        tags: ['products'],
      },
      {
        name: 'Itens',
        tags: ['items'],
      },
      {
        name: 'Logs',
        tags: ['logs'],
      },
    ],
  };

  await RedocModule.setup('/docs', app, document, redocOptions);

  await app.listen(3000);
}
bootstrap();
