import React, { useEffect, useState } from "react";
import DFriend from "../dFriend/DFriend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setFriends(json));
  }, []);
  return (
    <div className="container-sm">
      <h1>Here is all my Friend</h1>
      {
        friends.map(friend=>(<DFriend key={friend.id} friend={friend}></DFriend>))
      }
    </div>
  );
};

export default Friends
;
