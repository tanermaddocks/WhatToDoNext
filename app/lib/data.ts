
let url = process.env.WEBSITE_URL + "api/"

export interface ApiResponse {
  success: boolean,
  data?: any,
  error?: any,
  count?: number,
}

export async function fetchUserHome({ id }: { id: string }) {
  try {
    let data: ApiResponse = await fetch(url + "users/" + id)

    return data?.data

  } catch (error) {33
    console.error(error)
  }
}