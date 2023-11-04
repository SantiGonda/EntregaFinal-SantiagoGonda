
function CheckItem({ titulo, img, precio, count }) {

    const subTotal = precio * count;

    return (
        <div className=" card mb-3 row g-0 checkcard">
            <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start cardimg" alt={titulo}/>
            </div>
            <div className="col-md-8 cardtext">
                <div className="card-body">
                    <h5 className="card-title"> {titulo} </h5>
                    <p className="card-text"> ${precio} x {count}g = {subTotal} </p>
                </div>
            </div>
        </div>
    )
}
export default CheckItem