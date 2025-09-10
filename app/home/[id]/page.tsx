
import Cards from "@/app/ui/cards";
import { fetchUserHome } from "@/app/lib/data";

export default async function Page({ params }: any) {

  const { id } = await params

  const { username, cards } = await fetchUserHome({ id });

  return (
    <div>
      <main>
        <h1>Welcome {username}</h1>
        <Cards cards={cards} />
      </main>
    </div>
  )
}