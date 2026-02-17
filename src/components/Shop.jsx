import Card from "./Card";

export default function Shop({ product, cart, setCart }) {
  return <Card product={product} cart={cart} setCart={setCart} />;
}
