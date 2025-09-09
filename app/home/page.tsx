
'use client';

import Cards from "@/app/ui/cards";
import { fetchUserHome } from "../lib/data";
import { useParams } from "next/navigation";



export default async function Page() {

  const params = useParams<{ id: string }>();
  const id = params.id;

  if (!id) {
    return (
      <h1>Not logged in</h1>
    )
  }

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