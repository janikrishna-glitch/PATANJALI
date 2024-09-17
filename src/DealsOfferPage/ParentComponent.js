


import React, { useEffect, useState } from "react";
import axios from "axios";
import FlashCard from "./FlashCard"; 

const ParentComponent = () => {
  const [productItems, setProductItems] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productItems");
        setProductItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding to cart
  const addToCart = (item) => {
    console.log("Item added to cart:", item);
  };

  return (
    <div>
      <FlashCard productItems={productItems} addToCart={addToCart} />
    </div>
  );
};

export default ParentComponent;
