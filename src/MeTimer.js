import React from "react";
import { useTime } from "react-timer-hook";

function MeTimer() {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook </h1>
      <p>Current Time Demo</p>
      <div style={{ fontSize: "100px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        <span>{ampm}</span>
      </div>
    </div>
  );
}

export default MeTimer;
