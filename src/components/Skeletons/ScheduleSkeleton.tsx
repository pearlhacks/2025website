"use client";

export const ScheduleSkeleton = () => {
  return (
    <div className="overflow-hidden py-4">
      {/* Add a container to limit the overall width */}
      <div className="max-w-8xl mx-auto px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white block w-full flex flex-col justify-center items-start space-y-3 rounded-lg p-7 shadow-lg animate-pulse max-w-80"
            >
              {/* Skeleton Lines for Title and Details */}
              <div className="animate-pulse h-3 bg-pink-accent rounded-md w-3/4"></div>

              {/* Additional Skeleton Lines */}
              <div className="animate-pulse h-3 bg-brown rounded-md w-1/2"></div>
              <div className="animate-pulse h-3 bg-brown rounded-md w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
