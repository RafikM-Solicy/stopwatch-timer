import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const storedMinutes = localStorage.getItem('timerMinutes');
  const storedSeconds = localStorage.getItem('timerSeconds');
  const storedIsActive = localStorage.getItem('timerIsActive');

  const [minutes, setMinutes] = useState(storedMinutes ? parseInt(storedMinutes, 10) : 0);
  const [seconds, setSeconds] = useState(storedSeconds ? parseInt(storedSeconds, 10) : 0);
  const [isActive, setIsActive] = useState(storedIsActive === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('timerMinutes', minutes.toString());
    localStorage.setItem('timerSeconds', seconds.toString());
    localStorage.setItem('timerIsActive', isActive.toString());
  }, [minutes, seconds, isActive]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setIsActive(false);
          clearInterval(interval);
          return;
        }

        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h2 className="timer-title">Timer</h2>
      <div className="timer-input">
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="number"
          id="minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
        />
      </div>
      <h3 className={`timer-time ${isActive ? 'active' : ''}`}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </h3>
      <div className="timer-buttons">
        <button className="timer-button" onClick={handleStartStop}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
