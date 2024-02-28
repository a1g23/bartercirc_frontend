import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const singleItem = useLoaderData()
    return (
        <div className="show-container">
            <h1 className="show-item show-item-title">{singleItem.itemName}</h1>
            <h3 className="show-item show-item-seller">Seller: {singleItem.seller}</h3>
            <h3 className="show-item show-item-name">Item Name: {singleItem.itemName}</h3>
            <h3 className="show-item show-item-description">Item Description: {singleItem.description}</h3>
            <h3 className="show-item show-item-quantity">Item Quantity: {singleItem.quantity}</h3>
            <h3 className="show-item show-item-price">Item Price: {singleItem.price}</h3>
            <div className="show-button-container">
                <Form action={`/update/${singleItem._id}`}>
                    <input type='submit' value={`Update ${singleItem.itemName}`} className="show-update-button"/>
                </Form>
                <Form action={`/delete/${singleItem._id}`} method='post'>
                    <input type='submit' value={`Delete ${singleItem.itemName}`} className="show-delete-button"/>
                </Form>
            </div>
        </div>
    )
}

export default Show