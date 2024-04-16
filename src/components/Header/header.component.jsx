import React from "react";
import {createStructuredSelector} from "reselect"
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ShoppingCartIcon from "../Cart/cart-icon.component";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.util";
import CartDropdown from "../Cart/cart-dropdown.component";
import { selectCartHidden } from "../../redux/Cart/cart.selector";
import { selectCurrentUser } from "../../redux/User/user.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-10">
      <h1 className="w-3/12">
        <Link to="/">
          <Logo />
        </Link>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link to="/shop">SHOP</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="/shop">COLLECTIONS</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="/contact">CONTACT</Link>
          </li>
          {currentUser ? (
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/" onClick={() => auth.signOut()}>
                SIGN_OUT
              </Link>
            </li>
          ) : (
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/sign-in-up">SIGN IN</Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <ShoppingCartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
