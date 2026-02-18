import CartCard from "./CartCard";

export default function Cart({ cart, setCart }) {
  if (cart.length === 0) return <p className="cart-empty">Cart Empty</p>;

  const total = () => {
    return cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
  };

  function handlePurchase() {
    setCart([]);
  }

  return (
    <div>
      <div className="cart-top">
        <h1 className="total">Total: ${total().toFixed(2)}</h1>
        <button onClick={handlePurchase} className="purchase">
          Purchase
        </button>
      </div>
      <CartCard cart={cart} setCart={setCart}></CartCard>{" "}
    </div>
  );
}
