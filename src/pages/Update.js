import { useLoaderData, Form } from "react-router-dom";

const Update = () => {
    const singleItem = useLoaderData()
    return (
        <div>
            <h1 className="update-title">{singleItem.itemName}</h1>
            
            <Form action={`/updating/${singleItem._id}`} method='post' className="update-form-class">

                
                    <div className="update-grid-seller">
                        <label>Seller:</label>
                        <input className="update-input-class" type='input' name='seller' defaultValue={singleItem.seller} />
                    </div>  
                    
                    <div className="update-grid-name">
                        <label>Name:</label>
                        <input  className="update-input-class" type='input' name='itemName' defaultValue={singleItem.itemName} />
                    </div> 
                
                

                <div className="update-grid-description">
                    <label>Description:</label>
                    <input  className="update-input-description" type='text' name='description' defaultValue={singleItem.description} />
                </div> 

                
                    <div className="update-grid-quantity">
                        <label>Quantity:</label>
                        <input  className="update-input-quantity" type='input' name='quantity' defaultValue={singleItem.quantity} />
                    </div> 

                    <div className="update-grid-price">
                        <label>$$:</label>
                        <input  className="update-input-price" type='input' name='price' defaultValue={singleItem.price} />
                    </div> 
               

                <input  className="update-input-button" type='submit' value={`Update ${singleItem.itemName}`}/>
                
            </Form>
            
        </div>
    )
}

export default Update