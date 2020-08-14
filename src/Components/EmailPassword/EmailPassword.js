import React, { Component } from "react";
import AuthWrapper from "./../AuthWrapper/AuthWrapper";
import FormInput from "../Forms/FormInput/FormInput";
import Button from "../Forms/Button/Button";
import "./EmailPassword.scss";

const initialState = {
  email: "",
};

class EmailPassword extends Component {
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

  render() {
    const { email } = this.state;
    const configAuthWrapper = {
      headline: "Email Passowrd",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Passowrd</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
