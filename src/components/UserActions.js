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
    <button className="koolbtn" onClick={handleOnCLick}>
      Better button
    </button>
  );
}

export default UserActions;

function ThemeButton(props) {
  const handleOnCLick = () => {
    props.isBasic ? alert("Basic Theme") : alert("Fancy Theme");
  };

  return props.isBasic ? (
    <button onClick={handleOnCLick}>Normal button</button>
  ) : (
    <button class="btn btn-primary" onClick={handleOnCLick}>
      Bootstrap button
    </button>
  );
}
