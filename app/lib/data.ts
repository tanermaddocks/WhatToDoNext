import { cards, users } from '@/app/lib/sample-data'

export function fetchUsersCards() {
  try {
    // Sample data retrieval of username-0's cards.
    const userCards = users[0].cards

    return userCards
  } catch (error) {
    console.error(error)
  }
}