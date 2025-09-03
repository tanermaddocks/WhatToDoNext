import { fetchUsersCards } from '@/app/lib/data'


export default function Cards() {
  const cards: any = fetchUsersCards();

  return (
    <div className='CardWrapper'>
      {cards.map(((card: {
        cardBody: string,
        status: string,
        date: string,
      }) => {
        return (
          <article>
            <p>{card.cardBody}</p>
            <div>{card.status}</div>
            <div>{card.date}</div>
          </article>
        )
      }))}
    </div>
  )
}