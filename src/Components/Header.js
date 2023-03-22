import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <h3>Wyze</h3>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/random">
          <li>Random Advice</li>
        </NavLink>
        <NavLink to="/search">
          <li>Search</li>
        </NavLink>
        <NavLink to="/aboutus">
          <li>About Us</li>
        </NavLink>
      </ul>
    </header>
  );
}
