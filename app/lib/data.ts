import { cards, users } from '@/app/lib/sample-data'

export async function fetchAllUsersCards() {
  try {

    // Sample data retrieval
    const userCardsIds = users[0].card_ids
    const userCards: any[] = []

    cards.forEach(card => {
      if (card.id in userCardsIds) {
        userCards.push(card)
      }
    });

    return userCards
  } catch (error) {
    console.error(error)
  }
}