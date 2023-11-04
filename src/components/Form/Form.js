import { CartContext } from "../../contex/CartContext";
import { useContext } from "react"

function Form() {

    const { totalQuantity } = useContext(CartContext)

    return(
        <form action="https://formsubmit.co/santiago.j.g.t@gmail.com" method="POST" class="main-contacto">
        <section className="formulario">
            <div className="mb-3 correo">
                <label for="exampleFormControlInput1" className="form-label">Dirección de correo electrónico</label>
                <input type="email" name="email"  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"> {totalQuantity} </label>
                <textarea type="text" name="name" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
            <button type="submit">Enviar</button>
        </div>
        </section>
    </form>

    )


}

export default Form