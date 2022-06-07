import React from "react";
import "./UserActions.css";

function UserActions(props) {
  // Helper function to toggle color and increment count on user click
  const handleOnCLick = () => {
    props.setColor(props.color === "blue" ? "red" : "blue");
    props.setCount(props.count + 1);
  };
  //button will toggle the counter and the count and update both states via callbacks
  return (
    <button class="koolbtn" onClick={handleOnCLick}>
      Better button
    </button>
  );
}

export default UserActions;
