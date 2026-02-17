import Card from "./Card";

export default function Cart({ cart }) {
  console.log(cart);

  return <Card product={cart} />;
}
