import { useState, useEffect, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface LoadingScreenProps {
  isLoading: boolean;
}

function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isLoading) {
      const duration = 3000;
      const intervalTime = 50;
      const increment = (intervalTime / duration) * 95;
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + increment, 95));
      }, intervalTime);
    } else {
      setProgress(100);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center">
        <CircleLoader
          color="#a510d6"
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="text-center text-purple-500 text-3xl font-bold mt-6">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
