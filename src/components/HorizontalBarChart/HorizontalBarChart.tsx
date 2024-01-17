import { Box, Typography } from "@mui/material";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export type HorizontalBarChartData = {
  id: string;
  name: string;
  value: number;
  color: string;
};

export type HorizontalBarChartProps = {
  data: Array<HorizontalBarChartData>;
};

const TICK_HEIGHT = 75;
const GRID_HEIGHT = 54;
const PADDING = 16;

const Bar = ({
  data,
  width,
  x,
  y,
  color,
  factor,
  index,
  componentId,
}: {
  data: HorizontalBarChartData;
  width: number;
  x: number;
  y: number;
  color: string;
  factor: number;
  index: number;
  componentId: string;
}) => {
  const heigth = data.value * factor;

  return (
    <g>
      <rect
        x={x}
        y={y - heigth}
        width={width}
        height={heigth}
        fill={color}
        clipPath={`url(#round-corner${componentId}-${index})`}
      />
    </g>
  );
};

const HorizontalBarChart = ({ data }: HorizontalBarChartProps) => {
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setChartHeight(event[0].target.children[0].clientHeight);
      setChartWidth(event[0].target.children[0].clientWidth);
    });

    if (containerRef?.current) resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef?.current) resizeObserver.unobserve(containerRef.current);
    };
  }, [containerRef?.current]);

  const factor = useMemo(
    () =>
      Math.max(0, chartHeight / Math.max(...data.map((item) => item.value))),
    [data, chartHeight]
  );

  const barWidth = useMemo(() => {
    const totalPadding = data.length * PADDING + PADDING;
    return Math.max(0, (chartWidth - totalPadding) / data.length);
  }, [data, chartWidth]);

  const gridLines = useMemo(() => {
    if (chartHeight === 0) {
      return [];
    }

    const remainder = chartHeight % GRID_HEIGHT;
    let adjustedGridHeight = GRID_HEIGHT;
    if (remainder !== 0) {
      adjustedGridHeight = Math.floor(
        chartHeight / Math.ceil(chartHeight / GRID_HEIGHT)
      );
    }

    const numberOfGrids =
      Math.floor(chartHeight / adjustedGridHeight) +
      (chartHeight % adjustedGridHeight > 1 ? 1 : 0) +
      1;

    return [...Array(numberOfGrids).keys()].reduce((acc, _, index) => {
      return [...acc, chartHeight - index * adjustedGridHeight];
    }, [] as Array<number>);
  }, [chartHeight]);

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          height: "100%",
        }}
      >
        <svg width="100%" height="auto" preserveAspectRatio="none">
          <defs>
            {data.map((d, index) => (
              <clipPath key={index} id={`round-corner${componentId}-${index}`}>
                <rect
                  x={barWidth * index + PADDING * index + PADDING}
                  y={chartHeight - d.value * factor}
                  height={chartHeight + 20}
                  width={barWidth}
                  rx={20}
                />
              </clipPath>
            ))}
          </defs>
          {gridLines.map((y, index) => (
            <line
              key={index}
              x1={0}
              y1={y}
              x2={chartWidth}
              y2={y}
              stroke="#E5E5E5"
              strokeWidth={1}
            />
          ))}
          {data.map((item, index) => (
            <Bar
              key={index}
              data={item}
              width={barWidth}
              x={index * (barWidth + PADDING) + PADDING}
              y={chartHeight}
              factor={factor}
              color={item.color}
              index={index}
              componentId={componentId}
            />
          ))}
        </svg>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: TICK_HEIGHT,
          width: chartWidth - PADDING * 2,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              paddingX: 2,
              position: "absolute",
              bottom: 0,
              left: barWidth * index + index * PADDING,
              height: barWidth,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                width: `${barWidth - 16}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "break-spaces",
                marginY: 1,
              }}
              variant="caption"
              component={"p"}
            >
              {item.name}
            </Typography>
            <Typography fontWeight={600} variant="body2" fontSize={24}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalBarChart;
