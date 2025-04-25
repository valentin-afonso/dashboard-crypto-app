import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { formatDate } from "@/lib/format-date";

const chartConfig = {
  price: {
    label: "$",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const ChartSParklineTeaser = ({
  chartData,
}: {
  chartData: { time: string; price: number }[];
}) => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="min-h-[100px]">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            hide={true}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis hide domain={["dataMin * 0.99", "dataMax * 1.01"]} />

          <ChartTooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                const formattedDate = formatDate(data.timestamp);
                return (
                  <div className="bg-background p-2 rounded-lg border">
                    <p className="text-sm">{formattedDate}</p>
                    <p className="text-sm font-bold">
                      ${data.price.toFixed(2)}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <defs>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="price"
            type="natural"
            fill="url(#fillMobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};
