import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (response) => response.json(),
      );

      setProduct(...data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home product={product} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
