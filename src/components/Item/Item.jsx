
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  classes from '../Item/Item.module.css'
import {Link, useNavigate} from 'react-router-dom'


const Item = ({id,name, img, price, stock, description}) =>
{
   
   
   return(  
               <Card border="dark" style={{ width: '20rem', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className = {classes.cardet} >
               <Card.Img variant="top" src={img} alt={name} />
               <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text>
                  <p>{description}</p>
                  <p>Precio: ${price}</p>
                  <p>Stock: {stock} un.</p>
               </Card.Text>
              
               <Link to={`/item/${id}`}><Button variant="secondary" >Ver detalle </Button></Link>
                                             
            </Card.Body>
         </Card>
      
      
   )




}

export default Item