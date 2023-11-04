import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard"
import { getDoc, doc } from "firebase/firestore"
import { db } from "./../../config/Firebase"


function ItemDetailContainer() {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(loading)

    const { itemId } = useParams();

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'geneticas', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const geneticaElegida = { id: response.id, ...data}
                setProduct(geneticaElegida)
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    console.log(product)

return (
    <div className="ItemDetailContainer">
        <h1 className="tituloele">Genética</h1>
        <ProfileCard {...product} />
    </div>
)

}

export default ItemDetailContainer;
