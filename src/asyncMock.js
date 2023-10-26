import { products } from "./products"

export const getProducts = () =>{
     return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 500)
     } )


}

 export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) =>{
       setTimeout(()=> {
           resolve(products.filter(prod => prod.category === categoryId))
       }, 500)
    } )


}

export const getProductsById = (productId) =>{
    return new Promise((resolve) =>{
       setTimeout(()=> {
           resolve(products.find(prod => prod.id === productId))
       }, 500)
    } )


}