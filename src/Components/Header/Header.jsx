import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav>
      <NavLink className="mr" to="/"> Home </NavLink>
      <NavLink className="mr" to="/about">About</NavLink>
      <NavLink className="mr" to="/contact"> Contact </NavLink>
      <NavLink className="mr" to="/users"> Users </NavLink>
      <NavLink className="mr" to="/posts"> Posts </NavLink>
    </nav>
  );
};

export default Header;
