import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ChevronsUpDown, Check } from "lucide-react";
import { useState } from "react";

export const SelectCurrency = ({
  setCurrency,
  current,
}: {
  current: string;
  setCurrency: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(current);
  const coins: { value: string; label: string }[] = [
    {
      value: "BTC",
      label: "Bitcoin",
    },
    {
      value: "ETH",
      label: "Ethereum",
    },
    {
      value: "SOL",
      label: "Solana",
    },
    {
      value: "XRP",
      label: "XRP",
    },
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
  ];
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? coins.find((coin) => coin.value === value)?.label
            : "Select currency..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search coin..." className="h-9" />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {coins.map((coin) => (
                <CommandItem
                  className="text-black"
                  key={coin.value}
                  value={coin.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setCurrency(coin.value);
                  }}
                >
                  {coin.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === coin.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
