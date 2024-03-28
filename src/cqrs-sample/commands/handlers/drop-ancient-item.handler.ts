import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { DropAncientItemCommand } from '../impl/drop-ancient-item.command.ts';

@CommandHandler(DropAncientItemCommand)
export class DropAncientItemHandler
  implements ICommandHandler<DropAncientItemCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: DropAncientItemCommand) {
    console.log('Async DropAncientItemCommand...');
  }
}
