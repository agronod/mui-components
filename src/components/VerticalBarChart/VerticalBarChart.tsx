import { Box, Typography } from "@mui/material";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { round } from "../utils";

const brownscale: Array<string> = [
  "#73140C",
  "#852411",
  "#923F00",
  "#A26100",
  "#AA7605",
  "#AB8838",
  "#B4974E",
  "#BDA666",
  "#C7B67E",
  "#D1C498",
  "#E0D2B5",
  "#E6E0CA",
  "#F2EDE1",
  "#F2EDE1",
  "#F7F4ED",
];

export type VerticalBarChartData = {
  id: string;
  name: string;
  value: number;
  color: string;
};

export type VerticalBarChartProps = {
  data: Array<VerticalBarChartData>;
  selectedId?: string;
};

const TICK_WIDTH = 100;
const GRID_WIDTH = 54;
const PADDING = 16;

const Bar = ({
  data,
  height,
  x,
  y,
  color,
  factor,
  index,
  componentId,
  selected,
}: {
  data: VerticalBarChartData;
  height: number;
  x: number;
  y: number;
  color: string;
  factor: number;
  index: number;
  componentId: string;
  selected?: boolean;
}) => {
  const width = round(data.value) * factor;

  return (
    <g>
      {selected && (
        <rect
          x={0}
          y={y}
          width={TICK_WIDTH}
          height={height}
          fill={"#FCFAF7"}
          clipPath={`url(#round-corner${componentId}-${index})`}
        />
      )}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        clipPath={`url(#round-corner${componentId}-${index})`}
      />
    </g>
  );
};

const VerticalBarChart = ({ data, selectedId }: VerticalBarChartProps) => {
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
      Math.max(
        0,
        (chartWidth - TICK_WIDTH) /
          Math.max(...data.map((item) => round(item.value)))
      ),
    [data, chartWidth]
  );

  const barHeight = useMemo(() => {
    const totalPadding = data.length * PADDING + PADDING;
    return Math.max(0, (chartHeight - totalPadding) / data.length);
  }, [data, chartHeight]);

  const gridLines = useMemo(() => {
    if (chartWidth === 0) {
      return [];
    }
    const width = chartWidth - TICK_WIDTH;
    let numberOfGrids = Math.max(
      Math.floor(width / GRID_WIDTH) + (width % GRID_WIDTH > 0 ? 1 : 0),
      6
    );

    return [...Array(numberOfGrids).keys()];
  }, [chartWidth]);

  const adjustedGridWidth = useMemo(() => {
    const width = chartWidth - TICK_WIDTH;
    const numberOfGrids = Math.max(
      Math.floor(width / GRID_WIDTH) + (width % GRID_WIDTH > 0 ? 1 : 0),
      6
    );

    return width / (numberOfGrids - 1);
  }, [chartWidth, gridLines]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <svg width="100%" height={"100%"}>
        <defs>
          {data.map((d, index) => (
            <clipPath key={index} id={`round-corner${componentId}-${index}`}>
              <rect
                x={0}
                y={0}
                width={round(d.value) * factor + TICK_WIDTH}
                height={barHeight}
                rx={barHeight / 2}
              />
            </clipPath>
          ))}
        </defs>
        {gridLines.map((index) => (
          <line
            key={index}
            x1={TICK_WIDTH + index * adjustedGridWidth}
            y1={0}
            x2={TICK_WIDTH + index * adjustedGridWidth}
            y2={chartHeight}
            stroke="#E5E5E5"
            strokeWidth={1}
          />
        ))}
        {data.map((item, index) => (
          <g
            key={index}
            transform={`translate(0, ${
              index * (barHeight + PADDING) + PADDING
            })`}
          >
            <Bar
              data={item}
              height={barHeight}
              x={TICK_WIDTH}
              y={0}
              factor={factor}
              color={
                selectedId !== undefined && selectedId !== item.id
                  ? "#E5E3E0"
                  : item.color
              }
              selected={selectedId === item.id}
              index={index}
              componentId={componentId}
            />
          </g>
        ))}
      </svg>
      <Box
        sx={{
          position: "absolute",
          top: PADDING,
          left: 0,
          height: chartHeight - PADDING * 2,
          backgroundColor: "transparent",
          width: TICK_WIDTH,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              paddingX: 2,
              position: "absolute",
              top: barHeight * index + index * PADDING,
              left: 0,
              height: barHeight,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                width: `${TICK_WIDTH - 16}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "break-spaces",
              }}
              variant="caption"
              component={"p"}
            >
              {item.name}
            </Typography>
            <Typography fontWeight={600} variant="caption">
              {round(item.value)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VerticalBarChart;
