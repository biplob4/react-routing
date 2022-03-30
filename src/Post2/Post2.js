import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Post2 = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);
  return (
    <div className="container-sm">
        <h2>All post</h2>
      {
          posts.map(post=>(<Link 
          to={`/post/${post.id}`}
          key={post.id}
          >{post.id} </Link>))
      }
      <Outlet/>
    </div>
  );
};

export default Post2;
