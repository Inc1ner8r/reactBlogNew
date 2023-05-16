import React from "react";
import "./myBlog.scss";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog">
      <div className="title">Title of this blog</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ea,
        possimus iste, consequuntur, laudantium unde odit excepturi facere
        dolorum voluptatum eius doloribus sed ipsum itaque animi illum nobis
        harum incidunt.
      </div>
      <div className="date">may 20 | 4:20 pm</div>
      <div className="actions">
        <div className="edit actBtn" onClick={() => navigate("/edit")}>
          edit
        </div>
        <div className="delete actBtn">delete</div>
      </div>
    </div>
  );
};

export default MyBlog;
