import "../styles/card.css";
export default function CartCard({ cart }) {
  if (!cart) return <p>Failed to Load</p>;

  const cartCard = cart.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.image} />
      <p>{item.title}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Cost: ${item.price * item.quantity}</p>
    </div>
  ));
  return <div className="container">{cartCard}</div>;
}
