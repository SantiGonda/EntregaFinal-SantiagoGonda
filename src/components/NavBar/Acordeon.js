import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'

const Acordeon = ({ categorias }) => {
    const [mostrarCategorias, setMostrarCategorias] = useState(false);
  
    return (
      <div>
        <div onClick={() => setMostrarCategorias(!mostrarCategorias)}><NavLink to={'/geneticas'} className="nav-link" >Genéticas </NavLink></div>
        {mostrarCategorias && (
          <ul>
            {categorias.map((categoria, index) => (
              <li key={index}><Link to={`/geneticas/${categoria}`} className="nav-link" > {categoria} </Link></li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Acordeon;
  



/*
  function Acordeon({ categorias }) {

    const [expandedIndex, setExpandedIndex] = useState(false)
useEffect(()=> {
if (expandedIndex){
    const AcordeonCat = categorias.map((item) => {

        return (
                <div>
                    <Link to={`/geneticas/${item}`} className="nav-link" > {item} </Link>
                </div>
        )
    })}

})
    
    return <div>
        <div className="" onClick={(expandedIndex) => setExpandedIndex(!expandedIndex)}>
            <NavLink to={'/geneticas'} className="nav-link" >Genéticas </NavLink>
        </div>
        <div>
           {AcordeonCat}
        </div>
            </div>
}

export default Acordeon */