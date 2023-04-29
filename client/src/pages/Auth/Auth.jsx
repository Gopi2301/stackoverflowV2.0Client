import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  return (
    <section className="auth-section">
      <div className="auth-container">
        {/* {!isSignUp && <img src={icon} alt='stack overflow' className="login-logo"/>} */}
      </div>
    </section>
  );
};

export default Auth;
