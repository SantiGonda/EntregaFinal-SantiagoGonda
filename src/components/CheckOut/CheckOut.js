import { CartContext } from "../../contex/CartContext";
import { useContext } from "react"
import CheckItem from "./CheckItem";
import "./CheckOut.css"



const CheckOut = () => {
    const { cart, totalQuantity, total} = useContext(CartContext)

    let boleta = [];

    cart.map( p=> 
        boleta += [ p.count + "g-" + p.titulo + ", "])

    return (
        <div>
        <div className="checkCart">
            <div className="checkCards">
            { cart.map(p => <CheckItem key={p.id} {...p} />) }
            </div>
            <h3 className="desc" >Total: ${total} - {totalQuantity} gramos </h3>
        </div>
        <form action="https://formsubmit.co/santiago.j.g.t@gmail.com" method="POST" className="main-contacto">
        <section className="formulario">
            <div className="mb-3 correo">
                <label for="exampleFormControlInput1" className="form-label">Nombre de socio</label>
                <input type="text" name="Nombre"  className="form-control" id="exampleFormControlInput1" placeholder="Nombre Apellido" />
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label"> Aclaraciones </label>
                <textarea type="text" name={boleta} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
            <button type="submit">Pedir la maruja</button>
        </div>
        </section>
    </form>
        </div>
    )

}

export default CheckOut