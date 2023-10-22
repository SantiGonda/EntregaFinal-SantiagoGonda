import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
import "./components/cartWidget/ProfileCard.css"

function App() {

    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/geneticas' element={<ItemListContainer/>} />
          <Route path='/geneticas/:categoryId' element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
        </Routes>
        </BrowserRouter>
    )
};
export default App;
