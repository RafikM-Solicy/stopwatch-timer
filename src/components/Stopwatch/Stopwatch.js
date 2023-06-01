import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const storedTime = localStorage.getItem('stopwatchTime');
  const storedIsActive = localStorage.getItem('stopwatchIsActive');

  const [time, setTime] = useState(storedTime ? parseInt(storedTime, 10) : 0);
  const [isActive, setIsActive] = useState(storedIsActive === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('stopwatchTime', time.toString());
    localStorage.setItem('stopwatchIsActive', isActive.toString());
  }, [time, isActive]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-title">Stopwatch</h2>
      <h3 className={`stopwatch-time ${isActive ? 'active' : ''}`}>{time}</h3>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={handleStartStop}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="stopwatch-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
