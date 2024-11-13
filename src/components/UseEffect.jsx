import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up a timer that increments `seconds` every second
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Clean-up function: clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array, runs once when component mounts

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
