export const fetchCoinMarket = async (
  coinId: string = "bitcoin",
  days: number = 1
) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coin market data");
  }
  return response.json();
};
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
export const fetchCoin = async (coinId: string = "bitcoin") => {
  const response = await fetch(
    `${import.meta.env.VITE_HONO_API_PATH}/api/crypto/coins/${coinId}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HONO_API_KEY}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coin details");
  }
  return response.json();
};
