import { fetchUsersCards } from '@/app/lib/data'


export default function Cards() {
  const cards: any = fetchUsersCards();

  interface cardProps {
    id: string;
    cardBody: string;
    status: string;
    dueDate: string;
  }

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