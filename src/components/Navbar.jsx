import { Link, NavLink } from "react-router";
import "../styles/navbar.css";

export default function Shop({ itemCount }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Cart {itemCount() > 0 ? "(" + itemCount() + ")" : ""}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
