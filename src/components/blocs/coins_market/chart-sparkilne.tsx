import { ChartContainer } from "@/components/ui/chart";

import { type ChartConfig } from "@/components/ui/chart";
import { LineChart, XAxis, Line, YAxis } from "recharts";

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

  // determine the color of the line based on the trend
  const isNegative =
    chartData.length > 1 &&
    chartData[chartData.length - 1].sparkline_price <
      chartData[0].sparkline_price;
  const strokeColor = isNegative ? "#ff5252" : "#60e760";

  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[60px] w-[100px]">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 12,
            left: 12,
            right: 12,
          }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis hide domain={["dataMin * 0.97", "dataMax * 1.03"]} />

          <Line
            dataKey="sparkline_price"
            type="natural"
            stroke={strokeColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};
