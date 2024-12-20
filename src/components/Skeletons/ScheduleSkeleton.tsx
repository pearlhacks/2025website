"use client";

export const ScheduleSkeleton = () => {
  return (
    <div className="w-full flex justify-center items-start py-4">
      {/* Scrollable horizontal container */}
      <div className="flex flex-col gap-4 w-full">
        {/* Skeleton cards */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="relative w-full bg-white rounded-lg p-5 w-80 animate-pulse"
          >
            {/* Skeleton Lines for Title and Details */}
            <div className="animate-pulse h-3 bg-pink rounded-md w-3/4 mb-3"></div>
            <div className="animate-pulse h-3 bg-pink-200 rounded-md w-5/6 mb-3"></div>
            <div className="animate-pulse h-3 bg-pink-200 rounded-md w-1/2 mb-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
