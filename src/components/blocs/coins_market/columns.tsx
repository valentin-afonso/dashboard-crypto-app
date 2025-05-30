import { ColumnDef } from "@tanstack/react-table";
import { ChartSparkilne } from "./chart-sparkilne";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { roundNumber, formatCompactNumber } from "@/lib/number";

export type Coin = {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  sparkline_in_7d: {
    price: number[];
  };
};

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "name",
    header: () => <div>Asset Name</div>,
    cell: ({ row }) => {
      const img = row.original.image;
      const symbol = row.original.symbol;
      return (
        <div className="flex items-center gap-2 min-w-[5rem]">
          <img
            src={img}
            alt={symbol}
            width={100}
            height={100}
            className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]"
          />
          <div className="flex flex-col font-medium">
            <span className="text-sm">{row.getValue("name")}</span>
            <span className="text-xs">{symbol}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "current_price",
    header: () => <div className="only_mobile">Current Price</div>,
    cell: ({ row }) => {
      const change = row.original.price_change_percentage_24h;
      return (
        <div className="flex items-center gap-2 only_mobile">
          <div className="flex flex-col gap-2 font-medium">
            <span>${row.getValue("current_price")}</span>

            <span
              className={`${roundNumber(change)[0] !== "-" ? "text-green-500 bg-green-100 border-green-500" : "text-red-500 bg-red-100 border-red-500"} border rounded-2xl w-max text-xs font-normal px-2`}
            >
              {roundNumber(change)} %
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "current_price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="only_desktop"
        >
          Current Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="only_desktop">${row.getValue("current_price")}</div>
      );
    },
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="only_desktop"
        >
          Change
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("price_change_percentage_24h") as number;
      return <div className="only_desktop">{roundNumber(value)} %</div>;
    },
  },
  {
    accessorKey: "market_cap",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="only_desktop"
        >
          Market cap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("market_cap") as number;
      return <div className="only_desktop">${formatCompactNumber(value)}</div>;
    },
  },
  {
    accessorKey: "total_volume",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="only_desktop"
        >
          Volume
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("total_volume") as number;
      return <div className="only_desktop">${formatCompactNumber(value)}</div>;
    },
  },
  {
    accessorKey: "sparkline_in_7d",
    header: "Chart",
    cell: ({ row }) => {
      const sparkline = row.original.sparkline_in_7d.price;
      return (
        <>
          <ChartSparkilne sparkline={sparkline} />
        </>
      );
    },
  },
];
