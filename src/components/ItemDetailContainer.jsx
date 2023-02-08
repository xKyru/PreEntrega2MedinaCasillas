import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setproduct] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response =  await fetch('http://localhost:5173/products.json');
        const products =  await response.json();
        const item = products.find(prod => prod.id === Number(id) );
        setproduct(item);
      } catch (error) {
          console.log(error);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="container container-lg">
        <ItemDetail item={product}/>  
    </div>
  )
}

export default ItemDetailContainer