import { useLoaderData, Form } from "react-router-dom";

const Update = () => {
    const singleItem = useLoaderData()
    return (
        <div>
            <h1>{singleItem.itemName}</h1>
            <h1>Update Item</h1>
            <Form action={`/updating/${singleItem._id}`} method='post' className="form-class">
                <input  className="input-class" type='input' name='seller' defaultValue={singleItem.seller} />
                <input  className="input-class" type='input' name='itemName' defaultValue={singleItem.itemName} />
                <input  className="input-class" type='input' name='description' defaultValue={singleItem.description} />
                <input  className="input-class" type='input' name='quantity' defaultValue={singleItem.quantity} />
                <input  className="input-class" type='input' name='price' defaultValue={singleItem.price} />
                <input  className="input-class" type='submit' value={`update ${singleItem.itemName}`}/>
            </Form>
            
        </div>
    )
}

export default Update