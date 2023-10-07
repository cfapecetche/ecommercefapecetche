import  classes from "./ItemListContainer.module.css"
const ItemListContainer = ({greeting}) =>
{
return(
    <div className = {classes.saludo}>
        <h1>{greeting}</h1>
    </div>


)

}

export default ItemListContainer