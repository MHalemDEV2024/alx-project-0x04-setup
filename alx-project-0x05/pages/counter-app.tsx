import { useCount } from "@/context/CountContext";
import { useState, useEffect } from "react";

const CounterApp: React.FC = () => {
  const { count, increment, decrement } = useCount();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) {
      setMessage("🙈 No clicks yet!");
    } else if (count % 10 === 0) {
      setMessage("🔥 You're on fire!");
    } else {
      setMessage(""); // Clear when no special condition
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

      {/* Counter Display */}
      <div className="text-6xl font-bold mb-4">{count}</div>

      {/* Special message */}
      {message && (
        <p className="text-lg font-medium mb-4">{message}</p>
      )}

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Increment 🚀
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Decrement 👎
        </button>
      </div>

      {/* Footer message */}
      <p className="mt-8 text-sm text-white opacity-75">
        Keep clicking, who knows what happens at 100? 😏
      </p>
    </div>
  );
};

export default CounterApp;
