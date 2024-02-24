import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const singleItem = useLoaderData()
    return (
        <div>
            <h1>{singleItem.itemName}</h1>
            <h1>Update Item</h1>
            <Form action={`/update/${singleItem._id}`} method='post'>
                <input type='input' name='seller' defaultValue={singleItem.seller} />
                <input type='input' name='itemName' defaultValue={singleItem.itemName} />
                <input type='input' name='description' defaultValue={singleItem.description} />
                <input type='input' name='quantity' defaultValue={singleItem.quantity} />
                <input type='input' name='price' defaultValue={singleItem.price} />
            </Form>
            <h2>Delete Item</h2>
            <Form action={`/delete/${singleItem._id}`} method='post'>
                <input type='submit' value={`Delete ${singleItem.itemName}`} />
            </Form>
        </div>
    )
}

export default Show