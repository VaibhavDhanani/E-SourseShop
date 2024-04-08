import React, { Component } from "react";
import { SignIn } from "../../components/SignIn/sign-in.component";
import SignUp from "../../components/SignUp/sign-up.component";

export class SignInUpPage extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 w-full mt-8">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInUpPage;
