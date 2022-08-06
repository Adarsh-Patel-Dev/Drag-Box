import { React, useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let TimeId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(TimeId);
  });

  return (
    <div className="clock-container">
    <div className="time">
      {time.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
    </div>
  );
}

export { Clock };
