import { AggregateRoot } from '@nestjs/cqrs';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    console.log('Hero killed enemy');
  }

  addItem(itemId: string) {
    // logic
    console.log('Hero added item');
  }
}
