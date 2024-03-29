import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface.ts';
import { KillDragonCommand } from './commands/impl/kill-dragon.command.ts';

@Injectable()
export class HerosService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  async kill(id: string, dto: KillDragonDto): Promise<KillDragonDto> {
    console.log('Hello World!');
    console.log(id, dto);
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }
}
