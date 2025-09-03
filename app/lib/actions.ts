import {z} from 'zod';

const CardSchema = z.object({
  id: z.string(),
  userId: z.string(),
  cardTitle: z.string(),
  cardBody: z.string(),
  status: z.enum(['to-do', 'doing', 'done']),
  date: z.string(),
});

