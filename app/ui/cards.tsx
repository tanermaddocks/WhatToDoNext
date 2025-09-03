import { fetchUsersCards } from '@/app/lib/data'
import { cardProps } from '@/app/models/Card';


export default function Cards() {
  const cards: any = fetchUsersCards();

  return (
    <div className='CardWrapper'>
      {cards.map(((card: cardProps) => {
        return (
          <article key={card.id}>
            <p>{card.cardBody}</p>
            <div>{card.status}</div>
            <div>{card.dueDate}</div>
          </article>
        )
      }))}
    </div>
  )
}