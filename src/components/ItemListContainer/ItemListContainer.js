import { useState , useEffect } from "react";
// import {getProducts, getProductsByCategory} from "../../Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from "./../../config/Firebase"

function ItemListContainer({greeting}) {

const [geneticas, setGeneticas] = useState([]);
const [loading , setLoading] = useState(true)
console.log(loading)
const { categoryId } = useParams();


useEffect(() => {

    setLoading(true)

    const collectionRef = categoryId
    ? query(collection(db,'geneticas'), where('cat', '==', categoryId))
    : collection(db,'geneticas')

    getDocs(collectionRef)
    .then(response => {
       const geneticasElegidas = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data }
       })
       setGeneticas(geneticasElegidas)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })
},[categoryId])


    return (
        <div className="geneticas">
        {greeting && <h1 className="text-center titulo text-white"> {greeting} </h1>}
            <ItemList geneticas= {geneticas} />
        </div>
    )
}

export default ItemListContainer;

// function ItemListContainer({greeting}) {

//     const [geneticas, setGeneticas] = useState([]);
    
//     const { categoryId } = useParams();
    
//     console.log("La categoria que llego aca es:", categoryId)
//     console.log(greeting)
    
//     useEffect(() => {
    
//         const asyncFunc = categoryId ? getProductsByCategory : getProducts
    
//         asyncFunc(categoryId)
//         .then(response => {
//             setGeneticas(response)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     },[categoryId])
    
//         return (
//             <div className="geneticas">
//             {greeting && <h1 className="text-center titulo text-white"> {greeting} </h1>}
//                 <ItemList geneticas= {geneticas} />
//             </div>
//         )
//     }
    
//     export default ItemListContainer;