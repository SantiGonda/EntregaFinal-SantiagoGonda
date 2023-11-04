import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
import "./components/ProfileCard/ProfileCard.css"
import { CartProvider } from "./contex/CartContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {

    return (
        <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/geneticas' element={<ItemListContainer/>} />
          <Route path='/geneticas/:categoryId' element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        </CartProvider>
        </BrowserRouter>
    )
};
export default App;
