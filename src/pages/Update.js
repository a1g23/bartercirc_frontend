import { useLoaderData, Form } from "react-router-dom";

const Update = () => {
    const singleItem = useLoaderData()
    return (
        <div>
            <h1>{singleItem.itemName}</h1>
            <h1>Update Item</h1>
            <Form action={`/updating/${singleItem._id}`} method='post' className="form-class">
                <fieldset>
                  <legend></legend> 
                 <label>Seller</label><input  className="input-class" type='input' name='seller' defaultValue={singleItem.seller} />
                <label>Name</label><input  className="input-class" type='input' name='itemName' defaultValue={singleItem.itemName} />
                <label>Description</label><input  className="input-class" type='input' name='description' defaultValue={singleItem.description} />
                <label>Quantity</label><input  className="input-class" type='input' name='quantity' defaultValue={singleItem.quantity} />
                <label>Price</label><input  className="input-class" type='input' name='price' defaultValue={singleItem.price} />
                <input  className="input-class" type='submit' value={`Update ${singleItem.itemName}`}/>
            </fieldset>
            </Form>
            
        </div>
    )
}

export default Update