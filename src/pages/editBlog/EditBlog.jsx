import React from "react";

const EditBlog = () => {
  return (
    <div className="wrapper">
      <form className="logForm" action="">
        <div className="formHead">EDIT BLOG</div>
        <div className="inputContainer">
          <div className="label">Title : </div>
          <input className="logInput" type="text" />
        </div>
        <div className="inputContainer">
          <div className="label">Content : </div>
          <textarea className="kek" type="text" />
        </div>
        <button className="logSubmit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
