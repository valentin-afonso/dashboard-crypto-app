import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SelectCurrency } from "./blocs/calc/SelectCurrency";

export const DialogFav = () => {
  const [coin, setCoin] = useState("BTC");
  return (
    <>
      <DialogHeader>
        <DialogTitle>Please select a coins to add to favorites</DialogTitle>
        <DialogDescription>
          Please select a coins to add to favorites
        </DialogDescription>
      </DialogHeader>
      <SelectCurrency current={coin} setCurrency={setCoin} />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button asChild>
            <Link to="/signin">Add</Link>
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};
