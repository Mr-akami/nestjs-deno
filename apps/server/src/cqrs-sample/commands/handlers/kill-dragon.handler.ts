import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { KillDragonCommand } from '../impl/kill-dragon.command.ts';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor() {}

  async execute(command: KillDragonCommand): promise<KillDragonDto> {
    console.log(command);
    console.log('KillDragonCommand...');
    return { heroId: command.heroId, dragonId: command.dragonId };
  }
}
