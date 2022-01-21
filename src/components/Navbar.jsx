import React, { useContext } from "react";
import cartIcon from "../assets/images/cart.svg";
import { AddedItemsContext } from "./App";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { addedItems } = useContext(AddedItemsContext);
  // console.log(addedItems);

  return (
    <nav className="nav">
      <div className="nav__container fixed-width-lg">
        <ul className="nav__ul">
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
