import * as React from "react";
import {
  Bar,
  BarChart as ReBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  XAxisProps,
  YAxisProps,
  BarProps,
  Cell,
  CellProps,
  Tooltip,
} from "recharts";
import ResponsiveContainer from "./ResponsiveContainer";

export type BarChartProps = {
  data: any;
  name?: string;
  dataKey?: string;
  isAnimationActive?: boolean;
  xAxisOptions?: Partial<XAxisProps>;
  yAxisOptions?: Partial<YAxisProps>;
  barOptions?: Partial<BarProps>;
  barCellsOptions?: Partial<CellProps[]>;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  TooltipContent?: any;
};

export const BarChart: React.FC<BarChartProps> = ({
  children,
  data,
  name = "name",
  dataKey = "value",
  isAnimationActive = true,
  xAxisOptions = {},
  yAxisOptions = {},
  barOptions = {},
  barCellsOptions = [],
  layout = "horizontal",
  TooltipContent,
}) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.log(`No data to show for barchart: ${name}`);
    return <></>;
  }

  return (
    <ResponsiveContainer>
      {data && (
        <ReBarChart
          layout={layout}
          data={data}
          margin={{ top: 2, right: 0, left: 0, bottom: 32 }}
          barCategoryGap={10}
        >
          <CartesianGrid vertical={false} stroke="#e5e5e5" />
          <Bar
            dataKey={dataKey}
            isAnimationActive={isAnimationActive}
            {...(barOptions as any)}
          >
            {Array.isArray(barCellsOptions) &&
              barCellsOptions.length > 0 &&
              barCellsOptions.map(
                (child: CellProps | undefined, index: number) => (
                  <Cell key={index} {...child} />
                )
              )}
          </Bar>

          {layout === "vertical" ? (
            <>
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                {...xAxisOptions}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                {...yAxisOptions}
              />
            </>
          ) : (
            <>
              <YAxis axisLine={false} tickLine={false} {...yAxisOptions} />
              {TooltipContent && (
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  wrapperStyle={{ outline: "none" }}
                  content={<TooltipContent />}
                />
              )}
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                {...xAxisOptions}
              />
            </>
          )}
          {children}
        </ReBarChart>
      )}
    </ResponsiveContainer>
  );
};

export default BarChart;
