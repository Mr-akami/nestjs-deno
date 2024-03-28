import { Module } from '@nestjs/common';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { HeroesGameModule } from './cqrs-sample/heroes.module.ts';

@Module({
  imports: [HeroesGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
