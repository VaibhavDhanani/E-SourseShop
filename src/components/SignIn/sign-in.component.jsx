import React, { Component } from "react";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custombutton.component";
import { auth, signInWithGoogle } from "../firebase/firebase.util";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = this.state
    
    try {
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message)
    }

  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="p-4 max-w-md mx-10">
        <h2 className="text-xl font-bold mb-2">I have already account.</h2>
        <span className="block mb-4">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} className="space-y-4">
          <div>
            <FormInput
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder=""
              label="Email"
              required
            />
          </div>
          <div>
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder=""
              label="Password"
              required
            />
          </div>
          <div className="flex justify-between">
            <CustomButton onClick={signInWithGoogle} color>
              SIGN IN WITH GOOGLE
            </CustomButton>
            <CustomButton type="submit">
              SUBMIT
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
