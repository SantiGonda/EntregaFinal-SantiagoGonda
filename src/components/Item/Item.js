import {Link} from "react-router-dom";

function Item({ titulo, cat, img}) {

    return (
        <div className="card">
            <div className="card-img">
                <figure>
                    <img src={img} alt="Genética" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4"> {titulo} </h3>
                    <h4 className="subtitle is-6"> {cat} </h4>
                </div>
            </div>
            <footer>
                <Link to={`/item/${titulo}`}>Ver detalle</Link>
            </footer>
        </div>
    )
}
export default Item