export const roundNumber = (value: number, decimals: number = 2) => {
  return Number(value).toFixed(decimals);
};

export const formatCompactNumber = (value: number, decimals: number = 1) => {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: decimals,
  });
  return formatter.format(value);
};
