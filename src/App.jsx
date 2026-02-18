import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const itemCount = () => {
    if (cart.length > 0) {
      return cart.reduce((sum, cur) => sum + cur.quantity, 0);
    } else {
      return "";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setProduct(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <Navbar itemCount={itemCount} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop product={product} setCart={setCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
