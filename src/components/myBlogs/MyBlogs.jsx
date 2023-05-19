import React, { useEffect, useState } from "react";
import MyBlog from "./myblog/MyBlog";
import "./mblogs.scss";
import axios from "axios";

const MyBlogs = () => {
  const [allBlogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/blogs/${localStorage.getItem("userid")}`)
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
    <div>
      <div className="ProfileTitle">My Blogs</div>
      <div className="allBlgs">
        {allBlogs && (
          <ul>
            {allBlogs.map((item) => (
              <div key={item.id}>
                <MyBlog
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  datetime={item.datetime}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
