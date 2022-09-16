import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthSignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { fullname, email, username, password, password2 } = formData;

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
          <h3>SIGN UP</h3>

          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="infoInput"
              name="fullname"
              value={fullname}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              className="infoInput"
              name="email"
              value={email}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              value={username}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => onChange(event)}
            />
            <input
              type="text"
              className="infoInput"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>Already have an account?</span>
            <Link to="/login">Login!</Link>
          </div>
          <button
            className="button infoButton"
            type="submit"
            onClick={(event) => onSubmit(event)}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthSignUp;
