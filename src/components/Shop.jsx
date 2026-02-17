import Card from "./Card";

export default function Shop({ product }) {
  console.log(product);

  return <Card product={product} />;
}
