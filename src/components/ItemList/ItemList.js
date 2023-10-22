import Item from "../Item/Item";

function ItemList({geneticas}){
    return(
        <div className="card-group carta">
            {geneticas.map(gen => <Item key={gen.id} {...gen} />)}
        </div>
    )
}

export default ItemList