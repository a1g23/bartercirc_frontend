import { Link, useLoaderData, Route} from 'react-router-dom'

const ShowAll = () => {
    const items = useLoaderData()
    return (
        <div>
            <h1>
                Add an Item
            </h1>
            <Form>
                <input type='input' name='seller' placeholder='Seller Name'/>
                <input type='input' name='itemName' placeholder='Item Name'/>
                <input type='input' name='description' placeholder='Description'/>
                <input type='number' name='quantity' placeholder='1'/>
                <input type='number' name='price' placeholder='10'/>
            </Form>

            <div>
                <h2>
                    <div>
                        {items.map(v => {
                            return(
                                <div key={v._id}>
                                    <Link to={`/${v._id}`}>
                                        <h4>{v.name}</h4>
                                    </Link>
                                </div>
                            )
                        })}         
                    </div>
                </h2>
            </div>
        </div>
    )
}

export default ShowAll