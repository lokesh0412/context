import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import "./components/context";
import { CartProvider } from "./components/context";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/checkout" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
