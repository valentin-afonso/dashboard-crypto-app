import { Line, LineChart, XAxis, YAxis } from "recharts";
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
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            hide={true}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis hide domain={["dataMin * 0.97", "dataMax * 1.03"]} />
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
          <Line
            dataKey="price"
            type="natural"
            stroke="black"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
