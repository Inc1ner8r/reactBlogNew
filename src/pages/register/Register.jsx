import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", {
        username: User.username,
        email: User.email,
        password: User.password,
      })
      .then((res) => {
        navigate("/login");
      });
  };
  return (
    <div className="wrapper">
      <form className="logForm" onSubmit={(e) => handleRegister(e)}>
        <div className="formHead">REGISTER</div>
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
          <div className="label">Email : </div>
          <input
            name="email"
            className="logInput"
            type="text"
            value={User.email}
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
        <div className="inputContainer">
          <div className="label">Confirm Password : </div>
          <input name="confirmpassword" className="logInput" type="text" />
        </div>
        <button className="logSubmit" type="submit">
          Register
        </button>
      </form>
      <div className="login-btn" onClick={() => navigate("/login")}>
        login
      </div>
    </div>
  );
};

export default Register;
