import { useEffect, useState } from "react";

useClock.propTypes = {};

function formatData() {
  const now = new Date();

  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);
  const fullString = `${hours}:${minutes}:${seconds}`;

  return fullString;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    // Cập nhật ngay lập tức khi component mount
    const newTimeString = formatData();
    setTimeString(newTimeString);

    const clockInterval = setInterval(() => {
      const newTimeString = formatData();
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return { timeString };
}

export default useClock;
