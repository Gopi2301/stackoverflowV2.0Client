import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assets/logo.png";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  return (
    <section className="auth-section">
      <div className="auth-container">
        {!isSignUp && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form>
          <label htmlFor="">
            <h4>Email</h4>
            <input type="email" name="name" id="email" />
          </label>
          <label htmlFor="password">
            <div>
              <h4>Password</h4>
              <h4>forget password</h4>
            </div>
            <input type="password" name="name" id="password" />
          </label>
          <button type="submit" className="auth-btn">
            {isSignUp ? "SignUp" : "LogIn"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
