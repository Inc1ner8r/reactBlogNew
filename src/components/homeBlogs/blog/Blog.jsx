import React, { useState } from "react";
import "./blog.scss";
import axios from "axios";

const Blog = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
    // Make an API request to update the like count on the backend
    axios
      .put(`http://localhost:8080/likes/${props.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    // Make an API request to update the dislike count on the backend
    axios
      .put(`http://localhost:8080/dislikes/${props.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog">
      <div className="user">{props.username}</div>
      <div className="title">{props.title}</div>
      <div className="description">{props.content}</div>
      <div className="date">{props.datetime}</div>
      <div className="interaction">
        <button className="int_btn like_btn" onClick={handleLike}>
          Like | {likes}
        </button>
        <button className="int_btn dislike_btn" onClick={handleDislike}>
          Dislike | {dislikes}
        </button>
      </div>
    </div>
  );
};

export default Blog;
