
import KrypImg from "./components/ItemListContainer/img/cards/IMG_0325.JPG";
import CookImg from "./components/ItemListContainer/img/cards/IMG_0330.JPG";
import GorImg from "./components/ItemListContainer/img/cards/IMG_0315.JPG";

const geneticas = [
    {
        "id": "1",
        "titulo": "Kryptonite",
        "cat": "Sativa",
        "img": KrypImg
    },
    {
        "id": "2",
        "titulo": "Cookies",
        "cat": "Indica",
        "img": CookImg
    },
    {
        "id": "3",
        "titulo": "Gorilla",
        "cat": "Hibrida",
        "img": GorImg
    },
    {
        "id": "4",
        "titulo": "Critical",
        "cat": "Hibrida",
        "img": GorImg
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(geneticas)
        }, 500)
    })
}


export const getProductById = (idProduct) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(geneticas.find(prod => prod.titulo === idProduct))
        }, 500);

    })

}

export const getProductsByCategory = (cat) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(geneticas.filter(prod => prod.cat === cat))
        }, 500);
    })
}

export const getCategories = () => {

    const categorias = [...new Set(geneticas.map(item => item.cat))];

console.log(categorias);

    return categorias;
} 