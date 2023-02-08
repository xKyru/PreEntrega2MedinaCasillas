import Item from "./Item";
const ItemList = ({products}) => {
  return (
    <>
      {products.map(product => <Item item={product} key={product.id}/>)}
    </>
  )
}

export default ItemList