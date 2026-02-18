import "../styles/card.css";
// import { useState } from "react";
import CardTemp from "./CardTemp";

export default function Card({ product, setCart, cart }) {
  if (!product) return <p>Failed to Load</p>;

  const shopCard = product.map((item) => (
    <CardTemp
      key={item.id}
      item={item}
      product={product}
      setCart={setCart}
      cart={cart}
    />
  ));
  return <div className="container">{shopCard}</div>;
}
