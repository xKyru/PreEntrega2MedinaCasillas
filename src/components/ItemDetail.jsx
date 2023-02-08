import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {name, fullDesc, img, cat, price, stock} = item;
  return (
    <div className="item-detail-wrap">
        <div className="item-detail-img">
            <img src={`http://localhost:5173/img/products/${img}`} alt="Producto" />
        </div>
        <div className="item-detail-info">
            <h1 className="item-detail-name">{name}</h1>
            <p className="item-detail-price">{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)}</p>
            <p className="item-detail-desc">{fullDesc}</p>
            <p className="item-detail-cat">{cat}</p>
            <p className="item-detail-stock">Disponibles: <span>{stock}</span></p>
            <ItemCount
                startValue={1}
                stock={stock}
            />
            <button className="item-detail-submit"><span>Agregar al carrito</span></button>
        </div>
        
    </div>
  )
}

export default ItemDetail