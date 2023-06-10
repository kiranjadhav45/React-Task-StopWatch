import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const startTimer = () => {
    if (isRunning) return null;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (!isRunning) return null;

    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>{formatTime(time)}</h2>

      {isRunning ? (
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
      ) : (
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
      )}

      <button onClick={resetTimer} disabled={time === 0}>
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
