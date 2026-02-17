import "../styles/card.css";
export default function Card({ product }) {
  if (!product) return <p>Failed to Load</p>;

  const shopCard = product.map((item) => (
    <div
      onClick={() => {
        console.log("Hello");
      }}
      className="card"
      key={item.id}
    >
      <img src={item.image} />
      <p>{item.title}</p>
      <p>Price: {item.price}</p>
    </div>
  ));
  return <div className="container">{shopCard}</div>;
}
