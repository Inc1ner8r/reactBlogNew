import React from "react";
import "./myBlog.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyBlog = (props) => {
  const navigate = useNavigate();
  const deleteBlog = () => {
    axios.delete(`http://localhost:8080/blogs/${props.id}`).then((response) => {
      window.location.reload(true);
    });
  };
  return (
    <div className="blog">
      <div className="title">{props.title}</div>
      <div className="description">{props.content}</div>
      <div className="date">{props.datetime}</div>
      <div className="actions">
        {/* <div className="edit actBtn" onClick={() => navigate("/edit")}>
          edit
        </div> */}
        <div
          className="delete actBtn"
          onClick={() => {
            deleteBlog();
          }}
        >
          delete
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
