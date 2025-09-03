'use server';

import { z } from 'zod';

const CardSchema = z.object({
  id: z.string(),
  cardBody: z.string(),
  status: z.enum(['to-do', 'doing', 'done']),
  dueDate: z.string(),
});

const CreateCard = CardSchema.omit({ id: true, date: true })

export async function createCard(cardData: FormData) {
  const { cardBody, status } = CreateCard.parse({
    cardBody: cardData.get('cardBody'),
    status: cardData.get('status'),
    dueDate: cardData.get('dueDate'),
  })


  // Need to connect to a DB using typegoose.
  try { } catch (error) { }
}
