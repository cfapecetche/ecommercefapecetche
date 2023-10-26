import classes from "./ItemCount.module.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useCount} from '../../hooks/useCount'

const ItemCount = ({ stock, onAdd }) => {
    const { count, decrement, increment} = useCount(0)
        
    return (
        <div className= {classes.Counter}>
        <ButtonGroup >
              <Button variant="secondary" onClick={decrement}>-</Button>
              <Button variant="secondary" onClick={()=> onAdd(count)} disabled={!stock} >Agregar al carrito {count} un.</Button>
              <Button variant="secondary" onClick={(count < stock) ? increment:''}>+</Button>
         </ButtonGroup>
    </div>
    )
}

export default ItemCount