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
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  function ValidatePassword(password) {
    if (
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      return true;
    }
    return false;
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    if (User.password != User.confirmpassword) {
      alert("check password again");
      return;
    }
    const mailbool = ValidateEmail(User.email);
    if (!mailbool) {
      alert("You have entered an invalid email address!");
      return;
    }
    const passbool = ValidatePassword(User.password);
    if (!passbool) {
      alert("You have entered a weak password");
      return;
    }

    //ValidateEmail(User.email);
    axios
      .post("http://localhost:8080/register", {
        username: User.username,
        email: User.email,
        password: User.password,
        confirmpassword: User.confirmpassword,
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
            type="password"
            value={User.password}
            onChange={(e) =>
              setUser({ ...User, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="inputContainer">
          <div className="label">Confirm Password : </div>
          <input
            name="confirmpassword"
            className="logInput"
            type="password"
            value={User.confirmpassword}
            onChange={(e) =>
              setUser({ ...User, [e.target.name]: e.target.value })
            }
          />
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
