import { Box, Skeleton } from "@mui/material";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { round } from "../utils";
import { AgronodTypography } from "../AgronodTypography";

export type VerticalBarChartData = {
  id: string;
  name: string;
  value: number;
  color: string;
};

export type VerticalBarChartProps = {
  data: Array<VerticalBarChartData>;
  selectedIds?: string[];
  onItemHover?: (id?: string) => void;
  onItemClick?: (id?: string) => void;
  showSkeleton?: boolean;
};

const TICK_WIDTH = 100;
const GRID_WIDTH = 54;
const PADDING = 16;

const Bar = ({
  data,
  onEnter,
  onLeave,
  onClick,
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
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) => {
  const width = round(data.value) * factor;

  return (
    <g onMouseDown={onClick}>
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
        onMouseEnter={(e) => {
          e.stopPropagation();
          onEnter();
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          onLeave();
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onClick();
        }}
        clipPath={`url(#round-corner${componentId}-${index})`}
      />
    </g>
  );
};

const VerticalBarChart = ({
  data,
  selectedIds,
  onItemHover,
  onItemClick,
  showSkeleton,
}: VerticalBarChartProps) => {
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setChartHeight(event[0].target.children[0].clientHeight);
      setChartWidth(event[0].target.children[0].clientWidth);
    });

    const currentContainer = containerRef.current;
    if (currentContainer) resizeObserver.observe(currentContainer);

    return () => {
      if (currentContainer) resizeObserver.unobserve(currentContainer);
    };
  }, []);

  const dataSorted = useMemo(
    () =>
      data
        .sort((a, b) => b.value - a.value)
        .map((item) => ({ ...item, value: round(item.value) })),
    [data]
  );

  const onHover = useCallback(
    (index?: number) => {
      if (onItemHover) {
        onItemHover(index !== undefined ? dataSorted[index].id : undefined);
      }
    },
    [onItemHover, dataSorted]
  );

  const onClick = useCallback(
    (index?: number) => {
      if (onItemClick) {
        onItemClick(index !== undefined ? dataSorted[index].id : undefined);
      }
    },
    [onItemHover, dataSorted]
  );
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
    // If there's less then 4, use the fixed height
    if (data.length <= 4) {
      return 100;
    }
    const totalPadding = data.length * PADDING + PADDING;
    return Math.max(0, (chartHeight - totalPadding) / data.length);
  }, [data, chartHeight]);

  const gridLines = useMemo(() => {
    if (chartWidth === 0) {
      return [];
    }
    const width = chartWidth - TICK_WIDTH;
    const numberOfGrids = Math.max(
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
  }, [chartWidth]);

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
        {!showSkeleton &&
          data.map((item, index) => (
            <g
              key={index}
              transform={`translate(0, ${
                index * (barHeight + PADDING) + PADDING
              })`}
            >
              <Bar
                onEnter={() => onHover(index)}
                onLeave={() => onHover(undefined)}
                onClick={() => onClick(index)}
                data={item}
                height={barHeight}
                x={TICK_WIDTH}
                y={0}
                factor={factor}
                color={
                  selectedIds !== undefined &&
                  selectedIds.length > 0 &&
                  !selectedIds.includes(item.id)
                    ? "#E5E3E0"
                    : item.color
                }
                selected={selectedIds?.includes(item.id)}
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
        {showSkeleton
          ? Array.from(new Array(6)).map(() => (
              <>
                <Skeleton
                  variant="text"
                  width="80px"
                  sx={{ borderRadius: "8px" }}
                />
                <Skeleton
                  variant="text"
                  width="40px"
                  sx={{ borderRadius: "8px" }}
                />
                <Skeleton
                  variant="text"
                  width="20px"
                  sx={{ borderRadius: "8px", mb: 3 }}
                />
              </>
            ))
          : data.map((item, index) => (
              <Box
                key={index}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  onHover(index);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  onHover(undefined);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(index);
                }}
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
                <AgronodTypography
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
                </AgronodTypography>
                <AgronodTypography fontWeight={600} variant="caption">
                  {round(item.value).toLocaleString("sv-SE")}
                </AgronodTypography>
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default VerticalBarChart;
