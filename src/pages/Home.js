import React from "react";
import Clock from "../components/Clock";
import DisplayMessage from "../components/DisplayMessage";
import CounterDisplay from "../components/CounterDisplay";
import UserActions from "../components/UserActions";
import DbData from "../components/DbData";
import { LogoutButton } from "../components/LogoutButton";
import { PokeData } from "../components/PokeData";
import { RecipeCard } from "../components/RecipeCard";
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
      <DisplayMessage color={color} />
      <Clock />
      <CounterDisplay count={count} />
      <DbData />
      <UserActions setColor={setColor} setCount={setCount} color={color} count={count} />
      <PokeData />
    </div>
  );
}

export default Home;
