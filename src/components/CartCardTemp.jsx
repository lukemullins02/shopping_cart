import { useState } from "react";

export default function CartCardTemp({ item, setCart, cart }) {
  const [value, setValue] = useState(item.quantity);

  function handleAdd() {
    const newCart = cart.map((ele) => {
      if (ele.id === item.id) {
        const count = value + 1;
        setValue(count);
        return { ...ele, quantity: count };
      }
      return ele;
    });

    setCart(newCart);
  }
  function handleSubtract() {
    const newCart = cart.map((ele) => {
      if (ele.id === item.id) {
        const count = value - 1;
        setValue(count);
        return { ...ele, quantity: count };
      }
      return ele;
    });

    setCart(newCart);
  }

  return (
    <div className="card" key={item.id}>
      <img src={item.image} />
      <p className="card-title">{item.title}</p>
      <p>Cost: ${item.price * value}</p>
      <div className="cart-quantity">
        <button onClick={handleSubtract} disabled={value === 1}>
          -
        </button>
        <p>{value}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <button
        className="remove"
        onClick={() => {
          const updatedCart = cart.filter((ele) => ele.id !== item.id);
          setCart(updatedCart);
        }}
      >
        Remove
      </button>
    </div>
  );
}
