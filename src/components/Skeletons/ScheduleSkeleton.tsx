"use client";

export const ScheduleSkeleton = () => {
  return (
    <div className="overflow-hidden py-4">
      {/* Add a container to limit the overall width */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-md px-7 py-6 shadow-sm space-y-4 w-full"
            >
              {/* Skeleton Lines for Title and Details */}
              <div className="animate-pulse h-3 bg-brown rounded-md w-3/4"></div>
              <div className="animate-pulse h-3 bg-gray-300 rounded-md w-1/2"></div>

              {/* Additional Skeleton Lines */}
              <div className="animate-pulse h-3 bg-gray-200 rounded-md w-1/2"></div>
              <div className="animate-pulse h-3 bg-gray-200 rounded-md w-1/2"></div>
              <div className="animate-pulse h-3 bg-gray-200 rounded-md w-5/6"></div>
              <div className="animate-pulse h-3 bg-gray-200 rounded-md w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
