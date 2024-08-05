import { clockStyle } from "./Clock.style";
import { Txt } from "../Txt/Txt";
import { nowToHHM } from "../../utils/date-time";
import { useState, useEffect } from "react";
export const Clock = () => {
  const [time, setTime] = useState(nowToHHM());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHM());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Txt style={clockStyle.time}>{time}</Txt>
    </>
  );
};
