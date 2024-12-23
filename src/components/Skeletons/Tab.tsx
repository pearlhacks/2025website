export const TabSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        {[
          "All",
          "Chairs",
          "Marketing",
          "Experience",
          "Logistics",
          "Sponsorship",
        ].map((tab) => (
          <button
            key={tab}
            className={`
              whitespace-nowrap
              flex-1
              py-2
              px-3
              sm:px-4
              transition-colors
              duration-300
              border-brown border-b text-brown hover:border-pink-accent hover:text-pink-accent`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white block w-full flex flex-col justify-center items-center space-y-4 rounded-md px-2 py-6 shadow-sm"
          >
            <div className="flex mb-2 items-center animate-pulse justify-center bg-pink-200 rounded-full p-10">
              <svg
                className="w-16 h-16 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="animate-pulse h-1 bg-pink rounded-md w-2/3"></div>
            <div className="animate-pulse h-1 bg-pink rounded-md w-1/3"></div>
            <div className="animate-pulse h-1 bg-pink rounded-md w-3/5"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
