import { createContext , useState } from "react";

export const CartContext = createContext({
    cart : [] ,
    totalQuantity : 0,
    total : 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity , setQuantity] = useState(0)
    const [total , setTotal] = useState(0)

    console.log(cart , totalQuantity)

    const addItem = (item) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item}])
        setQuantity(totalQuantity + item.count)
        setTotal(total + item.count*item.precio)
        } else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
        setQuantity(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some( prod => prod.id === itemId)
    }

    return(
<CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart}}>
    {children}
</CartContext.Provider>
    )
}