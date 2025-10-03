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
import { useTheme } from "@mui/material";
import { BarRectangleItem } from "recharts/types/cartesian/Bar";

export type BarChartProps = {
  data: BarRectangleItem[];
  name?: string;
  dataKey?: keyof BarRectangleItem;
  isAnimationActive?: boolean;
  xAxisOptions?: Partial<XAxisProps>;
  yAxisOptions?: Partial<YAxisProps>;
  barOptions?: Partial<BarProps>;
  barCellsOptions?: Array<Partial<CellProps> | Array<Partial<CellProps>>>;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  TooltipContent?: React.FC;
  colorScheme?: "primary" | "secondary" | "tertiary";
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
  colorScheme,
}) => {
  const theme = useTheme();

  const bars = React.useMemo(() => {
    const value = data[0]?.[dataKey];
    if (Array.isArray(value)) {
      return value.map((_, index) => (
        <Bar
          key={index}
          stackId="a"
          dataKey={`${dataKey}[${index}]`}
          isAnimationActive={isAnimationActive}
          {...(index + 1 === value.length ? (barOptions as Omit<Partial<BarProps>, 'ref'>) : {})}
        >
          {Array.isArray(barCellsOptions) &&
            barCellsOptions.length > 0 &&
            barCellsOptions.map(
              (
                child: CellProps | Array<CellProps> | undefined,
                innerIndex: number
              ) => (
                <Cell
                  key={innerIndex}
                  {...(Array.isArray(child) ? child[index] : child)}
                  fill={
                    colorScheme === undefined
                      ? (Array.isArray(child) ? child[index] : child)?.fill
                      : theme.palette[colorScheme].main
                  }
                />
              )
            )}
        </Bar>
      ));
    }

    return (
      <Bar
        dataKey={dataKey}
        isAnimationActive={isAnimationActive}
        {...(barOptions as Omit<Partial<BarProps>, 'ref'>)}
      >
        {Array.isArray(barCellsOptions) &&
          barCellsOptions.length > 0 &&
          barCellsOptions.map(
            (
              child: CellProps | Array<CellProps> | undefined,
              index: number
            ) => (
              <Cell
                key={index}
                {...(Array.isArray(child) ? child[0] : child)}
                fill={
                  colorScheme === undefined
                    ? (Array.isArray(child) ? child[0] : child)?.fill
                    : theme.palette[colorScheme].main
                }
              />
            )
          )}
      </Bar>
    );
  }, [
    data,
    dataKey,
    barCellsOptions,
    barOptions,
    colorScheme,
    isAnimationActive,
    theme.palette,
  ]);

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

          {bars}

          {layout === "vertical" ? (
            <>
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                {...xAxisOptions}
              />
              {TooltipContent && (
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  wrapperStyle={{ outline: "none" }}
                  content={<TooltipContent />}
                />
              )}
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
