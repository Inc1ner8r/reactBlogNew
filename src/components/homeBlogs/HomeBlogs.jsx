import React, { useEffect, useState } from "react";
import Blog from "./blog/Blog";
import "./homeblogs.scss";
import axios from "axios";
import { json } from "react-router-dom";

const HomeBlogs = () => {
  const [allBlogs, setBlogs] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8080/blogs")
        .then((response) => {
          setBlogs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="homeTitle">Blog Hub</div>
      <div className="blogs">
        {allBlogs && (
          <ul>
            {allBlogs.map((item) => (
              <div key={item.id}>
                <Blog
                  title={item.title}
                  content={item.content}
                  username={item.username}
                  datetime={item.datetime}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default HomeBlogs;
