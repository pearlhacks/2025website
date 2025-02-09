import { getPrizes } from "@/api/getData";
import { useQuery } from "@tanstack/react-query";

export const PrizeSection = () => {
  const {
    data: prizes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["prizes"],
    queryFn: getPrizes,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="space-y-6">
      {Object.entries(
        prizes.reduce((acc, prize) => {
          if (!acc[prize.type]) acc[prize.type] = [];
          acc[prize.type].push(prize);
          return acc;
        }, {})
      ).map(([type, prizeList]) => (
        <div key={type}>
          <h2 className="font-sans text-pink-transition text-lg font-bold mb-3">
            {type}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {prizeList.map(({ category, prizes }, index) => (
              <div key={index} className="p-4 rounded-lg bg-white">
                <h3 className="font-medium">{category}</h3>
                <p className="text-brown">{prizes}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
