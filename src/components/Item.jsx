import { Link } from "react-router-dom";
const Item = ({item}) => {
    const {name, price, cat, img, shortDesc, id} = item;
  return (
    <>
        <li className="product-item" data-cat={cat.toLowerCase()}>
            <div className="product-img">
                <Link to={`/item/${id}`}>
                    <img src={`http://localhost:5173/img/products/${img}`} alt="Producto" />
                </Link>
            </div>
            <div className="product-body">
                <h3>{name}</h3>
                <p className="product-price">{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)}</p>
                <p className="product-description">{shortDesc}</p>
                <Link to={`/item/${id}`} className="product-btn"><span>Ver más</span></Link>
            </div>
        </li>
    </>
  )
}
export default Item;