export const DevpostLinkCardSkeleton = () => {
  return (
    <div className="bg-white block w-full flex flex-col justify-start items-start space-y-3 rounded-md p-5 shadow-sm">
      <div className="flex  items-center animate-pulse justify-center bg-pink-200 rounded-full p-3">
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="animate-pulse h-3 bg-pink rounded-md w-full"></div>
    </div>
  );
};

export const ExternalLinkCardSkeleton = () => {
  return (
    <div className="bg-white h-64 block w-full flex flex-col justify-center items-start space-y-3 rounded-md p-5 shadow-sm">
      <div className="animate-pulse h-4 bg-pink mb-4 rounded-md w-full"></div>
      <div className="animate-pulse h-2 bg-pink-200 rounded-md w-full"></div>
      <div className="animate-pulse h-2 bg-pink-200 rounded-md w-full"></div>
      <div className="animate-pulse h-2 bg-pink-200 rounded-md w-full"></div>
      <div className="animate-pulse h-2 bg-pink-200 rounded-md w-full"></div>
      <div className="animate-pulse h-2 bg-pink-200 rounded-md w-full"></div>
      <div className="animate-pulse h-2 bg-pink-200 rounded-md w-1/3"></div>
    </div>
  );
};
