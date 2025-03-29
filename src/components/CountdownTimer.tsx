import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CountdownTimerProps = {
  getTimeRemaining: number | undefined | bigint;
  isLoadingTimeRemaining: boolean;
};

const CountdownTimer = ({
  getTimeRemaining,
  isLoadingTimeRemaining,
}: CountdownTimerProps) => {
  const [countdown, setCountdown] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const totalTime = Number(getTimeRemaining) || 3600; // Default 1 hour if not provided

  // Set the initial countdown when the data is loaded
  useEffect(() => {
    if (!isLoadingTimeRemaining && getTimeRemaining && !isTimerRunning) {
      setCountdown(Number(getTimeRemaining));
      setIsTimerRunning(true);
    }
  }, [getTimeRemaining, isLoadingTimeRemaining, isTimerRunning]);

  // Countdown logic
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (countdown > 0 && isTimerRunning) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, countdown]);

  // Calculate time remaining
  const hours = String(Math.floor(countdown / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((countdown % 3600) / 60)).padStart(2, "0");
  const seconds = String(countdown % 60).padStart(2, "0");

  // Calculate progress (percentage)
  const progress = (countdown / totalTime) * 100;

  return (
    <div className="relative w-full h-full mx-auto">
      <CircularProgressbar
        value={progress}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: `rgb(
      ${progress > 50 ? 255 - (progress - 50) * 5.1 : 255}, 
      ${progress > 50 ? 255 : progress * 5.1}, 
      0
    )`, // Green → Yellow → Red
          textColor: "#fff",
          trailColor: "rgba(255, 255, 255, 0.02)",
          pathTransitionDuration: 1,
        })}
      />

      <div className="absolute left-0 right-0 top-1/2 flex items-center justify-center text-[44px] text-3xl font-bold">
        {hours} <span className="text-lg">HH :</span> {minutes}{" "}
        <span className="text-lg">MM :</span> {seconds}{" "}
        <span className="text-lg">SS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
