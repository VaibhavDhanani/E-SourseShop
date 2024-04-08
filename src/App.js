import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./pages/Home/homepage.component";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShopPage from "./pages/Shop/shop-page.component";
import Header from "../src/components/Header/header.component";
import SignInUpPage from "./pages/SignInUpPage/sign-in-up-page";
import {
  auth,
  createUserProfileDocument,
} from "../src/components/firebase/firebase.util";
import { onSnapshot } from "firebase/firestore";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        this.unsubscribe = onSnapshot(userRef, (snapShot) => {
          // console.log(snapShot.data());
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state.currentUser)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/sign-in-up" element={<SignInUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
