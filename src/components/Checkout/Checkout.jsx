import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from 'react-bootstrap/Spinner';
import  classes from './Checkout.module.css'
import {Link, useNavigate} from 'react-router-dom'

import { useState, useEffect } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firestore/firebaseconfig"

const Checkout = () => {

    

    const navigate = useNavigate()
       
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()


      
    useEffect(()=> {

        if (cart.length==0){ navigate('/')}
    }, [])
    
    
    
    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total
            }
            console.log(objOrder)
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(),'in',ids))
    
            // getDocs(productsRef).then(QuerySnapshot => {})
            // const QuerySnapshot = await getDocs(productsRef)
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(db, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                } else {
                    console.log('No hay stock de algun producto')
                }
            })
        } catch (error) {
            console.error('Hubo un error generando la orden',error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return ( <div className="d-flex justify-content-around"> 
            <Spinner animation="border" variant="secondary" />
          </div> ) 
    }

    if(orderId) {
       
        toast.success(`El id de su orden es: ${orderId} `);
    } 
            
    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

       createOrder(userData)
    
    }
    return (
        <div  className="d-flex justify-content-around">
            
            
<form onSubmit={handleSubmit} className = {classes.checkout}>

                 <Card border="primary" style={{ height: '12rem', width:'50rem', alignItems: 'center', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >
                     
                    
                     <Card.Body>
                     <Card.Title><h1>Finalizar compra</h1></Card.Title>
                     <Card.Text >
                         <label style={{ padding: '0.5rem'}}>
                             Nombre: 
                                <input value ={name} type= "text"  onChange={({target}) => setName(target.value)} required/>
                         </label>
                         <label style={{ padding: '0.5rem'}}>
                                Mail: 
                         <      input value={email} type= "email" onChange={({target}) => setEmail(target.value)} required/>
                         </label>
                         <label style={{ padding: '0.5rem'}}>
                               Telefono: 
                                <input value={phone} type= "tel" onChange={({target}) => setPhone(target.value)} required/>
                        </label>

                        
                     </Card.Text>  
                                           
                     <Button type = "submit">Crear orden</Button>
                     <Link to='/cart'><Button variant="secondary" >Volver al carrito </Button></Link>
                                       
                        
                     
                 
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
 
      
    

 
            
       
            
        </form>  
            
        </div>
        
    )

        
}


export default Checkout