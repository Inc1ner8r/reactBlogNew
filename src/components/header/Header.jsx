import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("userid");
  return (
    <div className="header">
      <div className="left">
        <div
          className="home leftChild"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="myBlogs leftChild"
          onClick={() => {
            navigate("/myBlogs/" + id);
          }}
        >
          My Blogs
        </div>
        <div
          className="newBlog leftChild"
          onClick={() => {
            navigate("/new");
          }}
        >
          New Blog
        </div>
      </div>
      <div
        className="logout"
        onClick={() => {
          localStorage.removeItem("userid");
          navigate("/login");
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default Header;
