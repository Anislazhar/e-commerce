import React, { Component } from "react";
import Button from "../Forms/Button/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import FormInput from "../Forms/FormInput/FormInput";
import "./SignIn.scss";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log();
    }
  };

  render() {
    const { email, password } = this.state;
    const configAuthWrapper = {
      headline: "logIn",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="password"
              handleChange={this.handleChange}
            />
            <Button type="submit">LogIn</Button>
            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in With Google</Button>
              </div>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default SignIn;
