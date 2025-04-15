import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get previous count from localStorage or set to 0
    let count = parseInt(localStorage.getItem("visitorCount") || "0", 10);

    // Increase count on every refresh or visit
    count += 1;

    // Save updated count
    localStorage.setItem("visitorCount", count);

    // Update state to reflect new count
    setVisitorCount(count);
  }, []);

  // Format with leading zeroes (e.g., 000012)
  const formattedCount = visitorCount.toString().padStart(6, "0");

  return (
    <div className="bg-gray-900 rounded-md p-2 w-fit shadow-md">
      <div className="bg-black px-4 py-2 rounded text-yellow-400 font-mono text-xl tracking-widest shadow-inner">
        {formattedCount}
      </div>
    </div>
  );
};

export default VisitorCounter;
