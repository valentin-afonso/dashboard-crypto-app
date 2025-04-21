export const fetchCoinsMarket = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_HONO_API_PATH}/api/crypto/coins/markets?vs_currency=eur&sparkline=true`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HONO_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
