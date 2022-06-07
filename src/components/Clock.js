import React from "react";

// Clock component that stores its time in memory and updates that time every second
function Clock(props) {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); //time
  return <p>React Clock: {time}</p>;
}

export default Clock;
