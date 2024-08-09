import React from "react";
import { useTime } from "react-timer-hook";

function MeTimer() {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2rem" }}>
        <p>
          {" "}
          Just in case you wanted to know the current time: {"=> "}{" "}
          <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
          <span>{ampm}</span>
        </p>
      </div>
    </div>
  );
}

export default MeTimer;
