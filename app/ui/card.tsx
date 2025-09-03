import { fetchCardData } from '@/app/lib/data'

export async function Card() {
  const {
    cardTitle,
    cardBody,
    status,
  } = await fetchCardData();

  return (
    <article>
      <h3>{cardTitle}</h3>
      <p>{cardBody}</p>
      <div>{status}</div>
    </article>
  )
}