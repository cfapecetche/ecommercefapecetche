import { useState } from "react"


export const useCount = (initial = 0) => {
    const [count, setCount] = useState(initial)
    
   
    const decrement = () => {
        if (count > 0) {
        setCount(old => old - 1)
        }
    }

    const increment = () => {
        
         setCount(old => old + 1)
                
    }

    return {
        count,
        decrement,
        increment
    }
}