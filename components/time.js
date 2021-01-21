import { useState, useEffect } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    fetch("/currentTime")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  return <h1>{time}</h1>;
}
