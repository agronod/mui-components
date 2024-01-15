import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useId, useMemo, useRef, useState } from "react";

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
  const theme = useTheme();
  const width = data.value * factor;

  return (
    <g>
      {selected && (
        <rect
          x={0}
          y={y}
          width={width}
          height={height}
          fill={theme.palette.input.backgroundDisabled}
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
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setDimensions({
        height: event[0].contentBoxSize[0].blockSize,
        width: event[0].contentBoxSize[0].inlineSize,
      });
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
        (dimensions.width - TICK_WIDTH) /
          Math.max(...data.map((item) => item.value))
      ),
    [data, dimensions]
  );
  const barHeight = useMemo(() => {
    const totalPadding = data.length * PADDING + PADDING;
    return Math.max(0, (dimensions.width * 2 - totalPadding) / data.length);
  }, [data, dimensions]);

  const gridLines = useMemo(() => {
    if (dimensions.width === 0) {
      return [];
    }
    const width = dimensions.width - TICK_WIDTH;
    const numberOfGrids =
      Math.floor(width / GRID_WIDTH) + (width % GRID_WIDTH > 1 ? 1 : 0) + 1;

    return [...Array(numberOfGrids).keys()];
  }, [dimensions.width]);

  const adjustedGridWidth = useMemo(() => {
    const width = dimensions.width - TICK_WIDTH;
    const remainder = width % GRID_WIDTH;
    if (remainder === 0) {
      return GRID_WIDTH;
    }

    return Math.floor(width / Math.ceil(width / GRID_WIDTH));
  }, [gridLines]);

  return (
    <Box
      ref={containerRef}
      sx={{ height: "100%", width: "100%", position: "relative" }}
    >
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.width * 2}`}
        width={dimensions.width}
        height="100%"
      >
        <defs>
          {data.map((d, index) => (
            <clipPath key={index} id={`round-corner${componentId}-${index}`}>
              <rect
                x={0}
                y={0}
                width={d.value * factor + TICK_WIDTH}
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
            y2={dimensions.width * 2}
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
                  : brownscale[index % brownscale.length]
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
          height: "100%",
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
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VerticalBarChart;
