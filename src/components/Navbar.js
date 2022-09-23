import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "tabler-icons-react";
import { CartContext } from "./context";
const Navbar = (props) => {
  const { cartItem } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <nav>
      <div className="brand-title" onClick={() => navigate("/")}>
        Store
      </div>
      <div className="checkout-cart-link" onClick={() => navigate("/checkout")}>
        <div>
          <ShoppingCart />
        </div>
        <div className="cart-item-count">{cartItem.length}</div>
      </div>
    </nav>
  );
};

export default Navbar;
