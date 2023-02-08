import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { useDarkModeContext } from "../context/darkModeContext";
const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const {idCat} = useParams();
  const {darkMode} = useDarkModeContext();

  useEffect(() => {
    if(idCat){
      const getCategory = async () => {
        try {
          const response =  await fetch('http://localhost:5173/products.json');
          const prods =  await response.json();
          const products = prods.filter(prod => prod.cat.replace(" ", "-").toLowerCase() == idCat);
          const productsList = ItemList({products});    
          setProductsList(productsList);
        } catch (error) {
            console.log(error);
        }
      }
      getCategory();
    }
    else{
      const getProducts = async () => {
        try {
          const response =  await fetch('http://localhost:5173/products.json');
          const products =  await response.json();
          const productsList = ItemList({products});
          setProductsList(productsList);
        } catch (error) {
            console.log(error);
        }
      }
      getProducts();
    }
  }, [idCat]);
  return (
    <div className="container container-lg">
      <ul className="products-list">
        {productsList}    
      </ul>
    </div>
  )
}

export default ItemListContainer