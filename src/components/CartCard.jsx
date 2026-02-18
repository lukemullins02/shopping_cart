import "../styles/card.css";
import CartCardTemp from "./CartCardTemp";

export default function CartCard({ cart, setCart }) {
  if (!cart) return <p>Failed to Load</p>;

  const cartCard = cart.map((item) => (
    <CartCardTemp item={item} cart={cart} setCart={setCart} />
  ));
  return <div className="container">{cartCard}</div>;
}
