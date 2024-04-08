import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHeroesQuery } from '../impl/index.ts';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor() {}

  async execute(query: GetHeroesQuery) {
    console.log('Async GetHeroesQuery...');
  }
}
