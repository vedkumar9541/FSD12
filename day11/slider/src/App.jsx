import React, { useState } from "react";
import "./App.css"

export default function App() {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    // Reset after 360° to avoid very large numbers
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {/* ✅ Use vite.svg from public folder */}
      <img
        src="/vite.svg"
        alt="Vite Logo"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.4s ease",
        }}
        className="w-32 h-32"
      />

      <button
        onClick={handleRotate}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Rotate 90°
      </button>
    </div>
  );
}
