import { useState } from "react";

export default function CardTemp({ item, cart, setCart, product }) {
  const [value, setValue] = useState(0);

  function handleAdd() {
    setValue(value + 1);
  }

  function handleSubtract() {
    setValue(value - 1);
  }

  return (
    <div className="card" key={item.id}>
      <img src={item.image} />
      <p className="card-title">{item.title}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <div>
        <button
          onClick={handleSubtract}
          disabled={value === 0}
          className="increment"
        >
          -
        </button>
        <input
          min="0"
          type="number"
          name="quantity"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="increment" onClick={handleAdd}>
          +
        </button>
      </div>
      <button
        className="add-cart"
        onClick={() => {
          if (!cart.find((ele) => ele.id === item.id)) {
            const ele = product.find((ele) => ele.id === item.id);
            setCart([...cart, { ...ele, quantity: value }]);
          } else {
            const newCart = cart.map((ele) => {
              if (ele.id === item.id) {
                const count = value + ele.quantity;
                console.log(count);
                return { ...ele, quantity: count };
              }

              return ele;
            });

            setCart([...newCart]);
          }
        }}
        disabled={value === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

{
  /* <button
  onClick={() => {
    if (!cart.find((ele) => ele.id === item.id)) {
      const ele = product.find((ele) => ele.id === item.id);
      setCart([...cart, { ...ele, quantity: 1 }]);
    } else {
      const newCart = cart.map((ele) => {
        if (ele.id === item.id) {
          const count = ++ele.quantity;
          console.log(count);
          return { ...ele, quantity: count };
        }

        return ele;
      });

      setCart([...newCart]);
    }
  }}
>
  +
</button>; */
}
