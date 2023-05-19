import React, { useState } from "react";
import "./new.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const New = () => {
  const navigate = useNavigate();
  const [Blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const postBlog = async (e) => {
    e.preventDefault();
    console.log(Blog.content);
    axios
      .post("http://localhost:8080/blog", {
        title: Blog.title,
        content: Blog.content,
        userid: localStorage.getItem("userid"),
        username: localStorage.getItem("username"),
        datetime: Date().toLocaleString(),
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <div className="wrapper">
      <form className="logForm" onSubmit={(e) => postBlog(e)}>
        <div className="formHead">NEW BLOG</div>
        <div className="inputContainer">
          <div className="label">Title : </div>
          <input
            name="title"
            className="logInput"
            type="text"
            value={Blog.title}
            onChange={(e) =>
              setBlog({ ...Blog, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="inputContainer">
          <div className="label">Content : </div>
          <textarea
            name="content"
            className="kek"
            type="text"
            value={Blog.content}
            onChange={(e) =>
              setBlog({ ...Blog, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button className="logSubmit" type="submit">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default New;
