export async function Card(cardData: {
  cardBody: string,
  status: string,
  date: string
}) {

  return (
    <article>
      <p>{cardData.cardBody}</p>
      <div>{cardData.status}</div>
      <div>{cardData.date}</div>
    </article>
  )
}