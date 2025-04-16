import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null); // Start with null to handle loading state

  useEffect(() => {
    const baseCount = 3400;
    
    // Retrieve the stored visitor count from localStorage
    const storedCount = localStorage.getItem("visitorCount");
    const parsedCount = storedCount ? parseInt(storedCount, 10) : baseCount;

    // Check if the user has already visited this session
    const alreadyVisited = sessionStorage.getItem("visited");

    // If the user has not visited yet, update the count
    if (!alreadyVisited) {
      const updatedCount = parsedCount + 1;
      localStorage.setItem("visitorCount", updatedCount);
      sessionStorage.setItem("visited", "true");
      setVisitorCount(updatedCount); // Set the updated count after the first visit
    } else {
      setVisitorCount(parsedCount); // Use the stored count if already visited in this session
    }
  }, []);

  // If visitorCount hasn't been set yet, show nothing (or loading state)
  if (visitorCount === null) return null;

  // Format the count with commas
  const formattedCount = visitorCount.toLocaleString();

  return (
    <div className="bg-gray-900 rounded-md p-2 w-fit shadow-md">
      <div className="bg-black px-4 py-2 rounded text-yellow-400 font-mono text-xl tracking-widest shadow-inner">
        {formattedCount}
      </div>
    </div>
  );
};

export default VisitorCounter;
