import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers/index.ts';
import { HeroesGameController } from './heroes.controller.ts';
import { QueryHandlers } from './queries/handlers/index.ts';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class HeroesGameModule {}
