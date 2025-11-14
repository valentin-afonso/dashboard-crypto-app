import { useState } from "react";
import { SelectCurrency } from "./SelectCurrency";
import { ResultCalc } from "./result-calc";
import { IconCalc } from "@/components/svg/icon-calc";

export const CalcForm = () => {
  const [ccy1, setCcy1] = useState("BTC");
  const [ccy2, setCcy2] = useState("USD");

  return (
    <div className="p-8 flex flex-col gap-4 justify-center items-center">
      <ResultCalc ccy1={ccy1} ccy2={ccy2} />
      <form action="" className="flex flex-col gap-2 mt-4 max-w-full">
        <div className="flex gap-4 items-center">
          <SelectCurrency current={ccy1} setCurrency={setCcy1} />
          <IconCalc />
          <SelectCurrency current={ccy2} setCurrency={setCcy2} />
        </div>
      </form>
    </div>
  );
};
