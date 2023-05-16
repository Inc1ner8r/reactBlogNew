import React from "react";
import Blog from "./blog/Blog";
import "./homeblogs.scss";

const HomeBlogs = () => {
  return (
    <>
      <div className="homeTitle">All Blogs</div>
      <div className="blogs">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </>
  );
};

export default HomeBlogs;
