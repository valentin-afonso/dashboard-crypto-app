import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { type ChartConfig } from "@/components/ui/chart";
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts";

const chartConfig = {
  sparkline_price: {
    label: "Price",
    color: "black",
  },
} satisfies ChartConfig;

export type ChartSparkilneProps = {
  sparkline: number[];
};

export const ChartSparkilne = (props: ChartSparkilneProps) => {
  const samplingRate = 12;
  const sampledSparkline = props.sparkline.filter(
    (_, index) => index % samplingRate === 0
  );
  const chartData = sampledSparkline.map((price, index) => ({
    index,
    sparkline_price: price,
  }));
  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[60px] w-[100px]">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis hide domain={["dataMin * 0.97", "dataMax * 1.03"]} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="sparkline_price"
            type="natural"
            stroke="black"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};
