import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { NavLink, useNavigate } from 'react-router-dom'


const Cart = ({id}) => {
    const navigate = useNavigate()
    const { cart, removeItem, clearCart, total} = useCart()

    const handleClear = (e) => {
        e.stopPropagation()
               
        clearCart()
        navigate('/')
               
    }

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(e.target.value)
        console.log(e.target.value)
      
    }
      

    return (
        
        <div className="d-flex justify-content-around">
            <div >
                <h3 >Carrito de compras - Total: $ {total}</h3>
                <Button variant="danger" onClick={handleClear} >Vaciar carrito </Button>
                <Link to='/checkout'><Button variant="primary" >Finalizar compra </Button></Link>
            </div>
        <div>
                {
                    cart.map(prod => {
                        return (
                            
                            <div key={prod.id} className="d-flex justify-content-around">

                                <Card style={{ width: '15rem', alignItems: 'center' }} >
                                    
                                    <Card.Body>
                                        <Card.Title>{prod.quantity} x {prod.name}</Card.Title>
                                        <Card.Img variant="top" src={prod.img} />
                                        <Card.Text>
                                        Subtotal Item:${prod.price * prod.quantity}
                                        </Card.Text>
                                        <Button variant="secondary" value={prod.id} onClick={handleRemoveItem}>Eliminar item </Button>
                                    </Card.Body>
                                    </Card>

                              
                            </div>
                        )
                    })
                }
            </div>
            
            
        </div>
    )
}

export default Cart