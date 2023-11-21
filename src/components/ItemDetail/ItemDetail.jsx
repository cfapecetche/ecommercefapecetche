
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'
import {Link} from 'react-router-dom'  
import { useCart } from '../../context/CartContext';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";







const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        
            setCount(count - 1)
    }

    return (
        <div >
            <p>{count}</p>
             
            <Button variant="secondary" onClick={(count > 1) ? decrement:''}>-</Button>
            <Button variant="secondary" onClick={()=> onAdd(count)} disabled={!stock} >Agregar al carrito</Button>
            <Button variant="secondary" onClick={(count < stock) ? increment:''}>+</Button>
           
        </div>
    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('Button')

    const ItemCount = inputType === 'Button' ? ButtonCount : InputCount
    
    
    
    const { addItem, isInCart } = useCart()
    
    const handleOnAdd = (quantity) => {       
        const productToAdd = {
            id, img, name, price, quantity
        }

        addItem(productToAdd)
        toast.success(`Se agregaron ${quantity} un.  ${name}`);
    }

    return (
        
        <Card border="primary" style={{ height: '30rem', width:'30rem', alignItems: 'center', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                     
                    <Card.Img variant="top" src={img} alt={name} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >
                        <p>{description}</p>
                        <p>Precio: ${price}</p>
                    </Card.Text>  
                                          
                   {
                    isInCart(id) ? (
                        <Link to='/cart'><Button variant="secondary" >Finalizar compra </Button></Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                    
                }
                
             </Card.Body>


             <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='light'/>   
       </Card>

       
       
    )
}

export default ItemDetail
  

   