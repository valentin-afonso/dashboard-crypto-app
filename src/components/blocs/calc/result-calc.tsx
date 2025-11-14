import { useQuery } from "@tanstack/react-query";
import { postCalc } from "@/api/coins";
export const ResultCalc = ({ ccy1, ccy2 }: { ccy1: string; ccy2: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["calc", ccy1, ccy2],
    queryFn: () => postCalc(ccy1, ccy2),
  });
  if (isLoading)
    return (
      <p className="text-2xl font-bold py-4">
        1 <span className="text-black/60">{ccy1}</span> = 0.0000{" "}
        <span className="text-black/60">{ccy2}</span>
      </p>
    );
  if (error) return <div>Error: {error.message}</div>;
  const rate = data[0];
  return (
    <>
      <p className="text-2xl font-bold py-4">
        1 <span className="text-black/60">{ccy1}</span> = {rate}{" "}
        <span className="text-black/60">{ccy2}</span>
      </p>
    </>
  );
};
