const URL = process.env.REACT_APP_URL

export const barterCircusLoader = async () => {
    const response = await fetch(`${URL}/items`)
    const data = await response.json()
    return data
}

export const barterCircusItemLoader = async ({params}) => {
    const response = await fetch(`${URL}/items/${params.id}`)
    const data = await response.json()
    return data
}