import React from "react";
import MyBlog from "./myblog/MyBlog";
import "./mblogs.scss";

const MyBlogs = () => {
  return (
    <div>
      <div className="ProfileTitle">My Blogs</div>
      <div className="allBlgs">
        <MyBlog />
        <MyBlog />
        <MyBlog />
        <MyBlog />
      </div>
    </div>
  );
};

export default MyBlogs;
