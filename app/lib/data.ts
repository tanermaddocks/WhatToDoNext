export async function fetchCardData() {
  try {
    const cardTitle = 'example-title'
    const cardBody = 'example-description'
    const status = ''

    return {
      cardTitle,
      cardBody,
      status,
    }
  } catch (error) {
    throw new Error()
  }
}