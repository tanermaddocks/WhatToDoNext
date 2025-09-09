
let url = process.env.WEBSITE_URL + "api/";

export async function fetchUserHome(id: { id: string }) {
  try {
    let response = await fetch(url + "users/?id=" + id);
    let data = await response.json();
    return data?.data

  } catch (error) {
    console.error(error)
  }
}