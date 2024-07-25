import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <section className="log-con">
        <h1 className="welcome-message">
          Welcome to decentralized 
          <br />
          Voting Application
        </h1>
        <button className="login-button" onClick={props.connectWallet}>
          Login Metamask
        </button>
      </section>
    </div>
  );
};

export default Login;
