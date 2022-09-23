import { useContext } from "react";
import { CartContext } from "./context";
const Product = (props) => {
  const { ...product } = props;
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="product-container">
      <img
        src={product?.image}
        alt={product?.id}
        className="product-image"
        onClick={() => addItemToCart(product)}
      />
      <div className="product-footer">
        {/* <span className="product-title">{product?.title}</span> */}
        <span className="product-title">{product?.price}</span>
      </div>
    </div>
  );
};

export default Product;
