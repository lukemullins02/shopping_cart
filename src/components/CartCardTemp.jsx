import { useState } from "react";

export default function CartCardTemp({ item, setCart, cart }) {
  const [value, setValue] = useState(item.quantity);

  function handleAdd() {
    setValue(value + 1);
  }

  function handleSubtract() {
    setValue(value - 1);
  }

  return (
    <div className="card" key={item.id}>
      <img src={item.image} />
      <p>{item.title}</p>
      <p>Cost: ${item.price * value}</p>
      <div>
        <button onClick={handleSubtract} disabled={value === 1}>
          -
        </button>
        <input
          min="1"
          type="number"
          name="quantity"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={handleAdd}>+</button>
      </div>
      <button
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
