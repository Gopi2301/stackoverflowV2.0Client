import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assets/smalllogo.png";
import AboutAuth from "./AboutAuth";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const handleSwitch = () => {
    setisSignUp(!isSignUp);
  };
  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignUp && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="">
            <h4>Email</h4>
            <input type="email" name="name" id="email" />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignUp && (
                <h4 style={{ color: "#007ac6" }}>forget password</h4>
              )}
            </div>
            <input type="password" name="name" id="password" />
            {isSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must Contain at least eight characters,
                <br /> including at least 1 letter and 1 <br />
                number
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Opt-in to recieve occasional <br />
                product updates, user research invitations,
                <br /> company announcements, and digest.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignUp ? "SignUp" : "LogIn"}
          </button>
          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By Clicking "Signup", you agree to our{" "}
              <span style={{ color: "#007ac6" }}> terms of service</span>,<br />
              <span style={{ color: "#007ac6" }}> Privacy policy </span>
              and <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "already have an account?" : "Don't have an Account"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignUp ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
