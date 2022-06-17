import React from "react";
import UserActions from "../components/UserActions";
import DbData from "../components/DbData";
import "../components/RecipeCard.css";

export function Home() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem("color")) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem("count")) || 0);

  React.useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("count", JSON.stringify(count));
  }, [color, count]);

  return (
    <div>
      <DbData />
      <UserActions setColor={setColor} setCount={setCount} color={color} count={count} />
    </div>
  );
}

export default Home;
