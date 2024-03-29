import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './commands/impl/kill-dragon.command.ts';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface.ts';
import { Hero } from './models/hero.model.ts';
import { GetHeroesQuery } from './queries/impl/index.ts';
import { ZodSerializerDto } from 'nestjs-zod';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { HerosService } from './heros.service.ts';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly heroService: HerosService,
  ) {}

  @Post(':id/kill')
  // @UsePipes(ZodValidationPipe)
  @ApiCreatedResponse({ type: KillDragonDto })
  @ZodSerializerDto(KillDragonDto)
  async killDragon(
    @Param('id') id: string,
    @Body() dto: KillDragonDto,
  ): Promise<KillDragonDto> {
    console.log(dto);
    return this.heroService.kill(id, dto);

    // return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
