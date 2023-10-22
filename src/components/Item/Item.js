import { Link } from "react-router-dom";

function Item({ titulo, cat, img }) {

    return (
       
        <div className="card">
            <img className="card-img-top imgcard" src={img} alt={titulo}  />
                <div className="card-body">
                    <h5 className="card-title text-center ">{titulo} </h5>
                    <p className="card-text"> {cat} </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted "><Link to={`/item/${titulo}`}>Ver detalle</Link></small>
                </div>
        </div>


    )
}
export default Item


 /*
        <div className="card column is-4">
            <div className="card-img">
                <figure>
                    <img src={img} alt="Genética"/>
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
        */