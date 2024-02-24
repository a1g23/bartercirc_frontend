import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const singleItem = useLoaderData()
    return (
        <div>
            <h1>{singleItem.itemName}</h1>
            
            <h3>{singleItem.seller}</h3>
            <h3>{singleItem.itemName}</h3>
            <h3>{singleItem.description}</h3>
            <h3>{singleItem.quantity}</h3>
            <h3>{singleItem.price}</h3>
            <Form action={`/update/${singleItem._id}`}>
                <input type='submit' value={`update ${singleItem.itemName}`}/>
            </Form>
                
            <Form action={`/delete/${singleItem._id}`} method='post'>
                <input type='submit' value={`Delete ${singleItem.itemName}`} />
            </Form>
        </div>
    )
}

export default Show