import { useContext } from "react";
import { CartContext } from "../../contex/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }} >
        <p className="CartImg"> <AiOutlineShoppingCart/> {totalQuantity} </p>
        </Link>
    )
}

export default CartWidget