import React, { Component } from "react";
import FormInput from "../Forms/FormInput/FormInput";
import Button from "../Forms/Button/Button";
import { auth, handleUserProfile } from "../../firebase/utils";
import "./SignUp.scss";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleFromSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      const err = ["password don match"];
      this.setState({
        errors: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await handleUserProfile(user, { displayName });

      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };
  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;
    const configAuthWrapper = {
      headline: " Registration",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {/* {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return <li key={index}>{ }</li>;
              })}
            </ul>
          )} */}

          <form onSubmit={this.handleFromSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="passowrd"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="confirmPassword"
              onChange={this.handleChange}
            />
            <Button>Register</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default SignUp;
