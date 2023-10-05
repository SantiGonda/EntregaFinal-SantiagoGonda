
import KrypImg from "./components/ItemListContainer/img/cards/IMG_0325.JPG";
import CookImg from "./components/ItemListContainer/img/cards/IMG_0330.JPG";
import GorImg from "./components/ItemListContainer/img/cards/IMG_0315.JPG";

const geneticas = [
    {
        "titulo": "Kryptonite",
        "cat": "Sativa",
        "img": KrypImg 
    },
    {
        "titulo": "Cookies",
        "cat": "Índica",
        "img":  CookImg 
    },
    {
       "titulo": "Gorilla",
        "cat": "Híbrida",
       "img": GorImg 
    }
]

export const getProducts = ()=> {
return new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(geneticas)
    },500)
})
}


export const getProductById = (idProduct)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(geneticas.find( prod => prod.titulo === idProduct))
        }, 500);
        
    })

   }

   export const getProductsByCategory = (cat)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(geneticas.filter( prod => prod.cat === cat ))
        }, 500);
    })

   }