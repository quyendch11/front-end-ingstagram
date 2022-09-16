import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthLogIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>NGHIỆN HOOD</h1>
          <h6>A place for convicts throughout the world</h6>
        </div>
      </div>

      {/* Start of SignUp form */}

      <div className="a-right">
        <form className="infoForm authForm">
          <h3>LOG IN</h3>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={username}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>Don't have an account?</span>
            <Link to="/signup">Sign up</Link>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthLogIn;
