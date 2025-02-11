export const Prize = () => {
  return (
    <div className="flex flex-row items-center h-20 w-full transition-all ease-in-out rounded-md justify-between bg-pink-200"></div>
  );
};

export const PrizeGrid = () => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-x-10 w-full">
      {Array.from({ length: 4 }).map((_, index) => (
        <Prize key={`skeleton-${index}`} />
      ))}
    </div>
  );
};
