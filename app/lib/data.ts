export async function fetchCardData() {
  try {
    const cardBody = 'example-description'
    const status = 'doing'
    const date = "2022-12-23"

    return {
      cardBody,
      status,
      date,
    }
  } catch (error) {
    throw new Error()
  }
}