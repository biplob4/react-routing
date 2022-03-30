import React from "react";
import { useNavigate } from "react-router-dom";

const DFriend = ({ friend }) => {
    let navigate = useNavigate();
    const SowFD =()=>{
        navigate(/friend/+friend.id) 
    }
  return (
    <div className="border border-primary m-3 p-2">
      <h2>{friend.name}</h2>
      <h3>{friend.username}</h3>
      <h6>{friend.email}</h6>
      <button onClick={SowFD} className="btn btn-primary mt-2">sow detail</button>
    </div>
  );
};

export default DFriend;
