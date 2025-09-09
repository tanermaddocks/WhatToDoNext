import { CardProps } from '@/app/models/Card';


export default function Cards({ cards }: { cards: CardProps[]}) {

  return (
    <div className='CardWrapper'>
      {cards.map(((card: CardProps) => {
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