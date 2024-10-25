export const Accordion = () => {
  return (
    <div className="flex flex-row items-center h-10 w-full transition-all ease-in-out rounded-md justify-between bg-pink-200"></div>
  );
};

export const AccordionGrid = () => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <Accordion key={`skeleton-${index}`} />
      ))}
    </div>
  );
};
