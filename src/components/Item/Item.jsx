
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const Item = ({id,name, img, price, stock, description}) =>
{
   return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <p>{description}</p>
                <p>Precio: ${price}</p>
                <p>Stock: {stock} un.</p>
            </Card.Text>
                 <Link to={`/item/${id}`}>Ver detalle</Link>                 
           </Card.Body>
        </Card>
   )




}

export default Item