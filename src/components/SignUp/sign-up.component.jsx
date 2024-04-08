import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custombutton.component";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        ...userCredential.user,
        displayName: displayName
      };
      await createUserProfileDocument(user);
    } catch (error) {
      console.log(error.message);
    }
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="p-4 max-w-md mx-10">
        <h2 className="text-xl font-bold mb-2">I do not have account.</h2>
        <span className="block mb-4">Enter details to create account</span>
        <form onSubmit={this.handleSubmit} className="space-y-4">
          <div>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              placeholder=""
              label="Name"
              required
            />
          </div>
          <div>
            <FormInput
              type="email"
              name="email"
              value={email}
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
              value={password}
              onChange={this.handleChange}
              placeholder=""
              label="Password"
              required
            />
          </div>
          <div>
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder=""
              label="Confirm Password"
              required
            />
          </div>

          <div className="flex justify-end">
            <CustomButton type="submit">SUBMIT</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
