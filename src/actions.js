import { redirect } from "react-router-dom"

const URL = process.env.REACT_APP_URL

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newItem = {
        seller: formData.get('seller'),
        itemName: formData.get('itemName'),
        description: formData.get('description'),
        quantity: formData.get('quantity'),
        price: formData.get('price')
    }

    await fetch(`${URL}/items`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })

    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatedItem = {
        seller: formData.get('seller'),
        itemName: formData.get('itemName'),
        description: formData.get('description'),
        quantity: formData.get('quantity'),
        price: formData.get('price')
    }

    await fetch(`${URL}/items/${params.id}`, {
        method: 'put',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
    })

    return redirect('/')
}

export const deleteAction = async ({params}) => {
    await fetch(`${URL}/items/${params.id}`, {
        method: 'delete'
    });
    return redirect('/')
}