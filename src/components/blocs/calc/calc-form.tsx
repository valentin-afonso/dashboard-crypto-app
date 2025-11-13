import { postCalc } from "@/api/coins";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { SelectCurrency } from "./SelectCurrency";

export const CalcForm = () => {
  const [ccy1, setCcy1] = useState("BTC");
  const [ccy2, setCcy2] = useState("USD");

  const { data, isLoading, error } = useQuery({
    queryKey: ["calc", ccy1, ccy2],
    queryFn: () => postCalc(ccy1, ccy2),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const rate = data[0];
  return (
    <div>
      <p className="text-2xl font-bold py-4">
        {rate} <span className="text-black/60">{ccy2}</span>
      </p>
      <form action="" className="flex flex-col gap-2 mt-4 w-[600px] max-w-full">
        <SelectCurrency setCurrency={setCcy1} />
        <SelectCurrency setCurrency={setCcy2} />

        <Button type="submit" className="w-max">
          Calculate
        </Button>
      </form>
    </div>
  );
};
