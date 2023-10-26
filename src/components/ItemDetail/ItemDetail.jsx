
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id,name, img, category, price, stock, description}) =>
{
   return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <p>{category}</p>
                <p>{description}</p>
                <p>Precio: ${price}</p>
                <p>Stock: {stock} un.</p>
            </Card.Text>
                     <ItemCount initial={1} stock={stock} onAdd={(count) => console.log('Cantidad Agregada', count)}/> 
            </Card.Body>
        </Card>
   )




}

export default ItemDetail