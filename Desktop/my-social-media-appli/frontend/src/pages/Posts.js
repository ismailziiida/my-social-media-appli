// frontend/src/pages/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts/all')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.content}</p>
          <small>{post.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default Posts;