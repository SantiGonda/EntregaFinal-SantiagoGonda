import "./../Cart/Cart.css"

function CartItem({id, titulo, cat, img, precio, count}) {

const subTotal = precio * count;

    return (
       
        <div className="cardItem card">
            <img className="card-img-top imgcard" src={img} alt={titulo}  />
                <div className="card-body">
                    <h5 className="card-title text-center ">{titulo} </h5>
                    <p className="card-text"> ${precio} x {count}g = {subTotal} </p>
                </div>
        </div>


    )
}
export default CartItem