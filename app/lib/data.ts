
let url = "http://localhost:3000/api/";

export async function fetchUserHome(id: { id: string }) {
  try {
    let response = await fetch(url + "users/" + id);
    let data = await response.json();
    return data?.data

  } catch (error) {
    console.error(error)
  }
}