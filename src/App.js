import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => Math.max(0, c - step));
  const reset = () => setCount(0);

  const handleStepChange = (e) => {
    const newStep = Math.max(1, Number(e.target.value) || 1);
    setStep(newStep);
  };

  return (
    <div className="p-6 border rounded-2xl shadow-md flex flex-col items-center space-y-4 w-64">
      <div
        aria-live="polite"
        className="text-2xl font-mono"
      >
        Count: {count}
      </div>

      <div className="flex space-x-3">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          +{step}
        </button>

        <button
          onClick={decrement}
          disabled={count - step < 0}
          className={`px-4 py-2 rounded-md ${
            count - step < 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          -{step}
        </button>

        <button
          onClick={reset}
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <label htmlFor="step" className="text-sm font-medium">
          Step Amount
        </label>
        <input
          id="step"
          type="number"
          min="1"
          value={step}
          onChange={handleStepChange}
          className="border rounded-md px-2 py-1 w-20 text-center"
        />
      </div>
    </div>
  );
}