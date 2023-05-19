import React from "react";
import "./blog.scss";

const Blog = (props) => {
  return (
    <div className="blog">
      <div className="user">{props.username}</div>
      <div className="title">{props.title}</div>
      <div className="description">{props.content}</div>
      <div className="date">{props.datetime}</div>
    </div>
  );
};

export default Blog;
