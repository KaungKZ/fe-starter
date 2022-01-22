import React, { useContext } from "react";
import cartIcon from "../assets/images/cart.svg";
import homeIcon from "../assets/images/home.svg";
import { AddedItemsContext } from "./App";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { addedItems } = useContext(AddedItemsContext);

  return (
    <nav className="nav">
      <div className="nav__container fixed-width-nav">
        <ul className="nav__ul">
          <li className="nav__li home-li">
            <Link to="/" className="nav__link">
              <img src={homeIcon} alt="home-icon" />
            </Link>
          </li>
          <li className="nav__li cart-li">
            <Link to="/cart" className="nav__link">
              <img src={cartIcon} alt="cart-icon" />
              {addedItems.length > 0 ? (
                <span className="cart-active-number">{addedItems.length}</span>
              ) : null}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
