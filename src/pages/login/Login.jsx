import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        username: User.username,
      })
      .then((res) => {
        if (User.password == res.data[0].password) {
          navigate("/");
        } else {
          alert("wrong password");
        }
      });
  };

  return (
    <div className="wrapper">
      <form className="logForm" onSubmit={(e) => handleLogin(e)}>
        <div className="formHead">LOGIN</div>
        <div className="inputContainer">
          <div className="label">Username : </div>
          <input
            name="username"
            className="logInput"
            type="text"
            value={User.username}
            onChange={(e) =>
              setUser({ ...User, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="inputContainer">
          <div className="label">Password : </div>
          <input
            name="password"
            className="logInput"
            type="text"
            value={User.password}
            onChange={(e) =>
              setUser({ ...User, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button className="logSubmit" type="submit">
          Login
        </button>
      </form>
      <div className="register-btn" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
