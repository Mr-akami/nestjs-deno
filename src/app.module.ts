import { Module } from '@nestjs/common';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { HeroesGameModule } from './cqrs-sample/heroes.module.ts';
import { ZodValidationPipe, ZodSerializerInterceptor } from 'nestjs-zod';
import { APP_PIPE, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [HeroesGameModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR, // This token indicates a global interceptor
      useClass: ZodSerializerInterceptor, // The class to be used for this token
    },
  ],
})
export class AppModule {}
