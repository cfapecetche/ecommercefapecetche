import Spinner from 'react-bootstrap/Spinner';
import Placeholder from 'react-bootstrap/Placeholder';
import {useState, useEffect} from 'react';
import { getProductById } from "../../services/firebase/firestore/products"
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>
{
const[product, setProduct] = useState(null) 
const [loading, setLoading] = useState(true)

const{itemId} = useParams()

useEffect(()=> {

    setLoading(true)

    getProductById(itemId)
         .then(response => {
               setProduct(response)
         })
         .catch(error =>{ 
            console.log(error)
         })
         .finally(() => {
            setLoading(false)
        })
}, [itemId])


if(loading) {
    return ( <div className="d-flex justify-content-around"> 
            <Spinner animation="border" variant="secondary" />
</div> ) 
}

if(!product) {
    return <h1>El producto no existe</h1>
}

return (
    <div className="d-flex justify-content-around"> 
        <ItemDetail {...product}/>
    </div>


)

}

export default ItemDetailContainer