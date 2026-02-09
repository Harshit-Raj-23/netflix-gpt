import React from "react";

const Shimmer = () => {
  const shimmerCards = Array(12).fill(0);

  return (
    <div className="bg-black m-4 min-h-screen p-4 md:p-8">
      <div className="w-64 h-8 bg-gray-800 rounded mb-6 animate-pulse"></div>

      <div className="flex flex-wrap justify-center gap-6">
        {shimmerCards.map((_, index) => (
          <div
            key={index}
            className="w-36 md:w-48 p-2 rounded-lg bg-gray-900 animate-pulse flex flex-col gap-2"
          >
            <div className="w-full h-56 md:h-72 bg-gray-800 rounded-md"></div>

            <div className="w-full h-4 bg-gray-800 rounded mt-2"></div>

            <div className="w-2/3 h-4 bg-gray-800 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
