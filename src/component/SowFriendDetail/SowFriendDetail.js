import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SowFriendDetail = () => {
  let { friendId } = useParams();
  const [friends, setFriends] = useState([]);
  useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
      .then((response) => response.json())
      .then((json) => setFriends(json));
  }, []);
  return (
    <div>
      <h1 className="text-danger">{friends.name}</h1>
      <h3>{friends.username}</h3>
      <h4>{friends.address?.city}</h4>
      <h5>{friends.email}</h5>
    </div>
  );
};

export default SowFriendDetail;
