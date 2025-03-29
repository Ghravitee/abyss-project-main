import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#a510d6");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <button onClick={() => setLoading(!loading)} className="hidden">
        Toggle Loader
      </button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
        className="hidden"
      />

      <div className="flex flex-col items-center justify-center ">
        <CircleLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="text-center text-Purple text-3xl font-bold mt-10">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
