export const PriceCoin = ({
  currentPrice,
  priceChange,
  priceChangePercentage,
}: {
  currentPrice: number;
  priceChange: number | null;
  priceChangePercentage: number;
}) => {
  const formattedPriceChange =
    typeof priceChange === "number" ? `${priceChange}$` : "";

  const priceChangeClass =
    typeof priceChange !== "number"
      ? "text-muted-foreground hidden"
      : priceChange > 0
        ? "text-green-500"
        : "text-red-500";

  return (
    <div className="flex items-start justify-between min-h-20">
      <p className="text-2xl font-bold">${currentPrice}</p>
      <div className="flex flex-col gap-2">
        <p className={`font-medium ${priceChangeClass}`}>
          {formattedPriceChange}
        </p>
        <p
          className={`font-medium ${priceChangePercentage > 0 ? "text-green-500" : "text-red-500"}`}
        >
          {priceChangePercentage}%
        </p>
      </div>
    </div>
  );
};
