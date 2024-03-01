import { Link, useLoaderData, Form} from 'react-router-dom'


const ShowAll = () => {
    const items = useLoaderData()
    return (
        <div className="index-container">
            <h1 className="add-item">
                Add an Item
            </h1>
            <Form action={'/create'} method="post" className="form-class">
                <input className="input-class" type='input' name='seller' placeholder='Seller Name'/>
                <input className="input-class" type='input' name='itemName' placeholder='Item Name'/>
                <input className="input-class" type='input' name='description' placeholder='Description'/>
                <input className="input-class" type='number' name='quantity' placeholder='Quantity'/>
                <input className="input-class" type='number' name='price' placeholder='$$'/>
                <input className="input-class" type="submit" value={'add item'}/>
            </Form>

            <div className="all-item-container">
                
                    <div className="item-container">
                        {items.map(v => {
                            return(
                                <div className="item" key={v._id}>
                                    <Link className="links links-container" to={`/${v._id}`}>
                                        <h4 className="item-detail">{v.itemName}</h4>
                                        <h6 className="item-detail">qty: {v.quantity}</h6>
                                        <h6 className="item-detail">${v.price}</h6>
                                    </Link>
                                </div>
                            )
                        })}         
                    </div>
                
            </div>
        </div>
    )
}

export default ShowAll