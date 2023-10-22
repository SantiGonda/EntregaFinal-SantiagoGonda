import { useState, useEffect } from "react";
import { getProductById } from "../../Data";
import { useParams } from "react-router-dom";
import ProfileCard from "./../cartWidget/ProfileCard"



function ItemDetailContainer() {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams();
    console.log("El item iD QUE llega es: ", itemId);
    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
    }
        , [itemId])

    return (
        <div className="ItemDetailContainer">
            <h1 className="tituloele">Genética</h1>
            <ProfileCard {...product} />
        </div>
    )

}

export default ItemDetailContainer;