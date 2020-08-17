import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import Button from "../Forms/Button/Button";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import FormInput from "../Forms/FormInput/FormInput";
import "./SignIn.scss";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
    } catch (err) {
      // console.log();
    }
  };

  const configAuthWrapper = {
    headline: "logIn",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">LogIn</Button>
          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign in With Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Passowrd</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
