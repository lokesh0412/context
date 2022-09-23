import { useContext } from "react";
import { CartContext } from "./context";
const Cart = () => {
  const { cartItem = [] } = useContext(CartContext);
  return (
    <div className="cart-container">
      {cartItem.length === 0 && "Cart is empty"}
      {cartItem.map((item, index) => {
        return (
          <p key={index}>
            ID: {item?.id} Title: {item?.title} Price: {item?.price}
          </p>
        );
      })}
    </div>
  );
};

export default Cart;
