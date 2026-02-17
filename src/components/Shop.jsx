import Card from "./Card";

export default function Shop({ product, cart, setCart }) {
  console.log(product);

  return <Card product={product} cart={cart} setCart={setCart} />;
}
