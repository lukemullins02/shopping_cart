import { Link, NavLink } from "react-router";

export default function Shop() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}
