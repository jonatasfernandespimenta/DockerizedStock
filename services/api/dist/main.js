"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const nestjs_redoc_1 = require("nestjs-redoc");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Estoque')
        .setDescription('Documentaçao da API de estoque')
        .setVersion('1.0')
        .setBasePath('/api/v1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const redocOptions = {
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
    await nestjs_redoc_1.RedocModule.setup('/docs', app, document, redocOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map