'use server';

import { z } from 'zod';

const CardSchema = z.object({
  id: z.string(),
  cardBody: z.string(),
  status: z.enum(['to-do', 'doing', 'done']),
  date: z.string(),
});

const CreateCard = CardSchema.omit({ id: true, date: true })

export async function createCard(cardData: FormData) {
  const { cardBody, status } = CreateCard.parse({
    cardBody: cardData.get('cardBody'),
    status: cardData.get('status'),
  })

  const date = new Date().toISOString().split('T')[0];

  try { } catch (error) { }
}
