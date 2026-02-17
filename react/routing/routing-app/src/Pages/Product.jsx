import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProduct = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        const categoriesList = [
          ...new Set(res.data.map((prod) => prod.category)),
        ];
        setCategory(categoriesList);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") setFilteredProducts(products);
    else
      setFilteredProducts(
        products.filter((prod) => prod.category === selectedCategory),
      );
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Products</h1>
      <select onChange={handleCategoryChange} id="category">
        <option value="all">All</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div id="products-container">
        {filteredProducts.map((prod) => (
          <div key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.title}</h4>
            <p>{prod.price}</p>
            <Link to={`/products/${prod.id}`}>View more details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
