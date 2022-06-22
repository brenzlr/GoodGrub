import React from "react";
import DbData from "../components/DbData";
import "../components/RecipeCard.css";
import UserDashboard from "../components/UserDashboard";

export function Home() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem("color")) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem("count")) || 0);

  React.useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("count", JSON.stringify(count));
  }, [color, count]);

  return (
    <div>
      <UserDashboard />
      <DbData />
    </div>
  );
}

export default Home;
