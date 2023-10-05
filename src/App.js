import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css";

function App() {

    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/geneticas' element={<ItemListContainer/>} />
          <Route path='/geneticas/:categoryId' element={<ItemDetailContainer/>} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
        </Routes>
        </BrowserRouter>
    )
};
export default App;
