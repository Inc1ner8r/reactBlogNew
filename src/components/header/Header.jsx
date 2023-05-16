import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
            navigate("/myBlogs/1");
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
      <div className="logout">Logout</div>
    </div>
  );
};

export default Header;
