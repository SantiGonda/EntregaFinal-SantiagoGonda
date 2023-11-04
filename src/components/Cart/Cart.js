import { useContext } from "react"
import { CartContext } from "../../contex/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if( totalQuantity === 0 ) {
        return (
            <div className="cart">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option" >Productos</Link>
            </div>
        )
    }
    console.log(cart)

    return (
        <div className="cart">
            <div className="cartCards">
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            </div>
            <h3>Total: ${total} </h3>
            <div className="botonesCart">
            <button onClick={() => clearCart()} className="Button botonCart" >Limpiar carrito</button>
            <button className="botonCart" > <Link to='/checkout' className="Option">Comprar</Link> </button>
            </div>
        </div>
    )

}

export default Cart;