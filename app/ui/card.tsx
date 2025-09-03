import { fetchCardData } from '@/app/lib/data'

export async function Card() {
  const {
    cardBody,
    status,
    date,
  } = await fetchCardData();

  return (
    <article>
      <p>{cardBody}</p>
      <div>{status}</div>
      <div>{date}</div>
    </article>
  )
}