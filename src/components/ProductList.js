import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log("Product List");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="product-list">
      {products?.map((product, index) => {
        return <Product key={index} {...product} />;
        /* return (
          <div className="product-container" key={index}>
            <img src={product?.image} alt={index} className="product-image" />
            <div className="product-footer">
              <span className="product-title">{product?.title}</span>
              <span className="product-title">{product?.price}</span>
            </div>
          </div>
        ); */
      })}
    </div>
  );
};

export default ProductList;
