import { useState , useEffect } from "react";
import {getProducts, getProductsByCategory} from "../../Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {

const [geneticas, setGeneticas] = useState([]);

const { categoryId } = useParams();

console.log("La categoria que llego aca es:", categoryId)

useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response => {
        setGeneticas(response)
    })
    .catch(error => {
        console.log(error)
    })
},[categoryId])

    return (
        <div className="geneticas">
            <h1 className="text-center titulo text-white"> {greeting} </h1>
            <ItemList geneticas= {geneticas} />
        </div>
    )
}

export default ItemListContainer;