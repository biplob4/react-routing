import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostDetail = () => {
    let {postId} = useParams();
    const [posts, setPost] = useState({});
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => setPost(json));
    }, [postId]);
    return (
        <div>
            <h2>{posts.title}</h2>
        </div>
    );
};

export default PostDetail;