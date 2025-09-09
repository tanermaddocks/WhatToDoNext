import Cards from "@/app/ui/cards";
import { fetchUserHome } from "../lib/data";



export default async function Page(props: { params: Promise<{ id: string }> }) {

  const params = await props.params;
  const id = params.id;
  const { username, cards } = await fetchUserHome({ id })

  return (
    <div>
      <main>
        <h1>Welcome {username}</h1>
        <Cards cards={cards} />
      </main>
    </div>
  )
}