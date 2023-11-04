import { useContext, useState } from "react";
import "./ProfileCard.css"
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";


function ProfileCard({id, titulo, cat, precio, img }) {

    const [count, setCount] = useState(0);

    const {addItem} = useContext(CartContext)

    function handleClickSuma() {
        setCount(count + 1)
    }

    function agregoCarrito() {
        const item = {id, titulo, cat, precio, count, img}
        addItem(item)
    }

    function handleClickResta() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        < div className = "card mb-3 detailcard" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt={titulo}/>
            </div>
            <div className="col-md-8 cardtext">
                <div className="card-body">
                    <h5 className="card-title"> {titulo} </h5>
                    <p className="card-text">{cat} - ${precio}/g </p>
                </div>
                <div className="card-body botones">
                    <button onClick={handleClickSuma} className="button">
                        <p>+</p>
                    </button>
                    <button onClick={handleClickResta} className="button">
                        <p>-</p>
                    </button>
                    <button onClick={agregoCarrito} className="button">
                        <p>Agregar al carrito</p>
                    </button>
                </div>
                <div>
                    <span className="textoGreen"> <p> Gramos: {count} </p> </span>
                </div>
            </div>
        </div>
        <div className="links">
        <NavLink to={'/geneticas'} className="link" >VOLVER</NavLink>
        <NavLink to={'/cart'} className="link" >COMPRAR</NavLink>
        </div>
        </div>
    )
}
export default ProfileCard

    

/*
<div className="card">
            <div className="card-img">
                <figure  className="cardimg">
                    <img src={img} alt="Genética" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4"> {titulo} </h3>
                    <h4 className="subtitle is-6"> {cat} </h4>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <button onClick={handleClickSuma} className="button is-fullwidth">
                        <p>+</p>
                    </button>
                </div>
                <div className="column">
                    <button onClick={handleClickResta} className="button is-danger is-fullwidth">
                        <p>-</p>
                    </button>
                </div>
                <div className="column">

                    <span> <p> Gramos: {count} </p> </span>

                </div>
            </div>



        </div>
        */