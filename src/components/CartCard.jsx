import "../styles/card.css";
export default function CartCard({ cart, setCart }) {
  if (!cart) return <p>Failed to Load</p>;

  const cartCard = cart.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.image} />
      <p>{item.title}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Cost: ${item.price * item.quantity}</p>
      <button
        onClick={() => {
          const updatedCart = cart.filter((ele) => ele.id !== item.id);
          setCart(updatedCart);
        }}
      >
        Remove
      </button>
    </div>
  ));
  return <div className="container">{cartCard}</div>;
}
