import { useState, useEffect } from 'react';

export function useCountdown(initialTime: bigint | undefined, isLoading: boolean) {
  const [countdown, setCountdown] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Initialize countdown when data is loaded
  useEffect(() => {
    if (!isLoading && initialTime && !isTimerRunning) {
      setCountdown(Number(initialTime));
      setIsTimerRunning(true);
    }
  }, [initialTime, isLoading, isTimerRunning]);

  // Start countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (countdown > 0 && isTimerRunning) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, countdown]);

  return { countdown, isTimerRunning };
}