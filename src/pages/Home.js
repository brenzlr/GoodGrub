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
      <div className="body">
        <div className="wrapper">
          <RecipeCard
            img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="The Everyday Salad"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
          />
        </div>
      </div>
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
