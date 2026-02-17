import "../styles/card.css";
export default function Card({ product, setCart, cart }) {
  if (!product) return <p>Failed to Load</p>;

  const shopCard = product.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.image} />
      <p>{item.title}</p>
      <p>Price: ${item.price}</p>
      <button
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
      </button>
    </div>
  ));
  return <div className="container">{shopCard}</div>;
}
