import Spinner from 'react-bootstrap/Spinner';
import {useState, useEffect } from "react"
import {getProducts} from '../../services/firebase/firestore/products'
import ItemList from '../ItemList/ItemList'
import  classes from './ItemListContainer.module.css'
import {useParams} from 'react-router-dom'
import { memo } from 'react'
import { useAsync } from '../../hooks/useAsync'

const MemoizedItemList = memo(ItemList)

const ItemListContainer = ({greeting}) =>
{
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return ( <div className="d-flex justify-content-around"> 
                 <Spinner animation="border" variant="secondary" />
        </div> )           
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    if(products.length === 0) {
        return <h1>No existen productos para esta categoria</h1>
    }

    return (



    <div className = {classes.saludo}>
        <h1>{greeting}</h1>
        <MemoizedItemList products={products}/>
    </div>


)

}

export default ItemListContainer