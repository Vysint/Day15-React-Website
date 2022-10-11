import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdClose} from "react-icons/md";

import Logo from "../images/logo.png";

import "./navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
      <div className="container nav__container">
        <Link to="/home" className="logo">
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prevState) => !prevState)}
        >
          {isNavShowing ?<MdClose/> : <GoThreeBars/> }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
