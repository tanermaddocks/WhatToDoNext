import Cards from "@/app/ui/cards";
import { cards } from "../lib/sample-data";

export default async function Page() {

  return (
    <div>
      <main>
        <h1>Home Page</h1>
        <Cards />
      </main>
    </div>
  )
}