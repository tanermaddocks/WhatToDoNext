import { cardProps } from '@/app/models/Card';


export default function Cards({ cards }: { cards: cardProps[]}) {

  return (
    <div className='CardWrapper'>
      {cards.map(((card: cardProps) => {
        return (
          <article key={card.id}>
            <p>{card.cardBody}</p>
            <p>{card.status} -- {card.dueDate}</p>
            <div></div>
          </article>
        )
      }))}
    </div>
  )
}