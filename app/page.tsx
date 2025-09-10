import { redirect } from "next/navigation";

export default function Page() {
  
  // IF user has valid token/id then
  // redirect('/home/[id]');
  
  redirect('/login');
}