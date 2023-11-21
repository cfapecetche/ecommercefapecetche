
import Button from 'react-bootstrap/Button';
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {

      const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (

       <div>
           <Button variant="secondary" onClick={() => navigate('/cart')}>
           <img src={cart} alt="cart-widget" /> 
           {totalQuantity}
           </Button>
       </div>


      )


}

export default CartWidget

