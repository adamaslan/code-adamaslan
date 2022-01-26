import React from "react";
import { useTime } from "react-timer-hook";

function MeTimer() {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>The Time Now is</h1>

      <div style={{ fontSize: "100px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        <span>{ampm}</span>
        <p>May this imaginary force be with you</p>
      </div>
    </div>
  );
}

export default MeTimer;
