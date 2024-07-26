import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-body-tertiary">
        <div className="container-fluid navbar-brand brand">
          <h6>Shopping Cart</h6>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" to="/" aria-current="page">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="cart">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
