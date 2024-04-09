import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.util";

const Header = ({ currentUser }) => {
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
                SIGN OUT
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
        <Link to="/">
          <Search />
        </Link>
        <Link to="/">
          <Cart />
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
