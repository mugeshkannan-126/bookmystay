import "./navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/10.jpg";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(clicked ? false : true);
  };
  const navigate = useNavigate();
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Roamio</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} onClick={() => navigate(item.url)}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button onClick={() => navigate("/login")}>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
