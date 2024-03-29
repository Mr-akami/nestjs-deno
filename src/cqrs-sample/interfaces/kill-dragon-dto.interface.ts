import { createZodDto } from 'nestjs-zod';
import { zodToOpenAPI } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const KillDragonSchema = z.object({
  dragonId: z.string(),
});
// zodToOpenAPI(KillDragonSchema);

export class KillDragonDto extends createZodDto(KillDragonSchema) {}

// export class KillDragonDto {
//   dragonId: string;
// }
