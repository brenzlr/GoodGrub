import React from "react";
import Clock from "./Clock";
import DisplayMessage from "./DisplayMessage";
import CounterDisplay from "./CounterDisplay";
import UserActions from "./UserActions";

export function Main() {
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
      <UserActions setColor={setColor} setCount={setCount} color={color} count={count} />
    </div>
  );
}

/* class Main2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      count: 0,
    };
  }

  updateColorAndCount = () => {
    const newColor = this.state.color === "blue" ? "red" : "blue";
    const newCount = this.state.count + 1;

    this.setState({
      color: newColor,
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <DisplayMessage color={this.state.color} />
        <Clock time={new Date().toLocaleTimeString()} />
        <p>{this.state.count}</p>
        <button onClick={this.updateColorAndCount}>Main2</button>
      </div>
    );
  }
} */

export default Main;
