import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.ts';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HeroesGameModule } from './cqrs-sample/heroes.module.ts';
import { patchNestJsSwagger } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const config = new DocumentBuilder()
    .setTitle('Heroes example')
    .setDescription('The Heroes API description')
    .setVersion('1.0')
    .addTag('heroes')
    .build();
  patchNestJsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);
  // swagger end

  await app.listen(3000);
}
bootstrap();
