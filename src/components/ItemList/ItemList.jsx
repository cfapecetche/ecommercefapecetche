
import Placeholder from 'react-bootstrap/Placeholder';
import Item from '../Item/Item';

const ItemList = ({products }) => {
     return(
            <div className="d-flex justify-content-around">
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>

     )

}

export default ItemList