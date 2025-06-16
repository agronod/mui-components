import { Box, Stack, Skeleton } from "@mui/material";
import {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { round } from "../utils";
import { AgronodTypography } from "../AgronodTypography";
import { AgronodCard } from "../AgronodCard";

export type TooltipData = {
  name: string;
  value: number;
  suffix?: string;
};

export type HorizontalBarChartData = {
  id: string;
  name: string;
  value: number | Array<number>;
  color: string | Array<string>;
  tooltipData?: Array<TooltipData>;
};
export type SubCategory = {
  name: string;
  utslappskategoriId: string;
  value: number;
  percentage: number;
};

export type HorizontalBarChartProps = {
  data: Array<HorizontalBarChartData>;
  showSkeleton?: boolean;
};

const GRID_HEIGHT = 54;
const PADDING = 16;

const Bar = ({
  data,
  width,
  x,
  y,
  factor,
  index,
  componentId,
  onEnter,
  onLeave,
}: {
  data: HorizontalBarChartData;
  width: number;
  x: number;
  y: number;
  factor: number;
  index: number;
  componentId: string;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const hoverHeight = 200;

  if (Array.isArray(data.value)) {
    const dataReversed = [...data.value].reverse();
    const color = useMemo(
      () => (Array.isArray(data.color) ? data.color.reverse() : data.color),
      [data.color]
    );
    const getColor = useCallback(
      (itemIndex: number) => (Array.isArray(color) ? color[itemIndex] : color),
      [color]
    );

    return (
      <g clipPath={`url(#round-corner${componentId}-${index})`}>
        {dataReversed.map((_, innerIndex) => {
          const height =
            round(
              dataReversed
                .slice(innerIndex)
                .reduce((acc, curr) => acc + curr, 0)
            ) * factor;

          return (
            <>
              <rect
                key={innerIndex}
                x={x}
                y={y - height}
                width={width}
                height={height}
                fill={getColor(innerIndex)}
              />
              {/* Invisible rectangle to be able to hover above the bar */}
              <rect
                key={`hover-${innerIndex}`}
                x={x}
                y={y - height - hoverHeight}
                width={width}
                height={hoverHeight}
                fill="transparent"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              />
            </>
          );
        })}
      </g>
    );
  }

  const height = round(data.value) * factor;

  return (
    <g>
      <rect
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        x={x}
        y={y - height}
        width={width}
        height={height}
        fill={Array.isArray(data.color) ? data.color[0] : data.color}
        clipPath={`url(#round-corner${componentId}-${index})`}
      />
      {/* Invisible rectangle to be able to hover above the bar */}
      <rect
        x={x}
        y={y - height - hoverHeight}
        width={width}
        height={hoverHeight}
        fill="transparent"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      />
    </g>
  );
};

const Tooltip = memo(
  ({
    style,
    active,
    payload,
    label,
  }: {
    style: React.CSSProperties;
    active: boolean;
    payload: Array<TooltipData>;
    label: string;
  }) => {
    if (payload.length === 0) return <></>;

    const tooltipList = useMemo(
      () => [
        ...payload.sort((a: TooltipData, b: TooltipData) => b.value - a.value),
      ],
      [payload]
    );

    return (
      <Box
        style={{
          position: "absolute",
          transform: "translate(-20%, -60px)",
          zIndex: 10000,
          ...style,
        }}
      >
        <AgronodCard
          sx={(theme) => ({
            textAlign: "left",
            padding: 3,
            display: "flex",
            position: "relative",
            top: -120,
            maxWidth: 300,
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
              left: -110,
              top: -110,
            },
          })}
        >
          <AgronodTypography fontWeight={500} mb={2} variant="overline">
            {label}
          </AgronodTypography>
          {tooltipList.map((listItem: TooltipData) => (
            <Stack
              key={listItem.name}
              direction="row"
              alignItems="center"
              marginBottom={0.5}
            >
              <AgronodTypography
                mb={0.5}
                fontWeight={600}
                variant="caption"
                sx={{ minWidth: "30px" }}
              >
                {`${round(listItem.value).toLocaleString("sv-SE")}${listItem.suffix || ""}`}
              </AgronodTypography>

              <AgronodTypography ml={1} mb={0.5} variant="caption">
                {listItem.name}
              </AgronodTypography>
            </Stack>
          ))}
        </AgronodCard>
      </Box>
    );
  }
);

const HorizontalBarChart = ({
  data,
  showSkeleton,
}: HorizontalBarChartProps) => {
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 400, y: 200 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  const hasTooltipData = useMemo(
    () => data.some((item) => Boolean(item.tooltipData?.length)),
    [data]
  );

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

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (!hasTooltipData) return;

      setActiveIndex(index);
      setTooltipVisible(true);
    },
    [setActiveIndex, setTooltipVisible, hasTooltipData]
  );

  const handleMouseLeave = useCallback(() => {
    if (!hasTooltipData) return;

    setActiveIndex(null);
    setTooltipVisible(false);
  }, [setActiveIndex, setTooltipVisible, hasTooltipData]);

  const handleMouseMove = useCallback(
    (event: any) => {
      if (!hasTooltipData) return;

      const { clientX, clientY } = event;
      setTooltipPosition({
        x: clientX + 80 + window.scrollX,
        y: clientY + window.scrollY,
      });
      setTooltipVisible(true);
    },
    [setTooltipPosition, setTooltipVisible, hasTooltipData]
  );

  const mapTotalValue = useCallback((item: HorizontalBarChartData) => {
    if (Array.isArray(item.value)) {
      return round(item.value.reduce((acc, curr) => acc + curr, 0));
    }

    return round(item.value);
  }, []);

  const factor = useMemo(
    () => Math.max(0, chartHeight / Math.max(...data.map(mapTotalValue))),
    [data, chartHeight, mapTotalValue]
  );

  const barWidth = useMemo(() => {
    const totalPadding = data.length * PADDING + PADDING;
    return Math.max(0, (chartWidth - totalPadding) / data.length);
  }, [data, chartWidth]);

  const gridLines = useMemo(() => {
    if (chartHeight === 0) {
      return [];
    }

    let adjustedGridHeight = GRID_HEIGHT;
    let numberOfGrids = Math.ceil(chartHeight / GRID_HEIGHT);
    numberOfGrids = Math.max(numberOfGrids, 6);

    if (numberOfGrids < 6 || chartHeight % GRID_HEIGHT !== 0) {
      adjustedGridHeight = chartHeight / (numberOfGrids - 1);
    }

    return Array.from(
      { length: numberOfGrids },
      (_, index) => chartHeight - index * adjustedGridHeight
    );
  }, [chartHeight]);

  return (
    <Box
      onMouseMove={hasTooltipData ? handleMouseMove : undefined}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          display: "flex",
          flexShrink: 0,
          flexGrow: 1,
          flexBasis: 0,
          minHeight: 0,
        }}
      >
        <svg width="100%" height={"100%"}>
          <defs>
            {data.map((d, index) => (
              <clipPath key={index} id={`round-corner${componentId}-${index}`}>
                <rect
                  x={barWidth * index + PADDING * index + PADDING}
                  y={chartHeight - mapTotalValue(d) * factor}
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
          {!showSkeleton &&
            data.map((item, index) => (
              <Bar
                key={index}
                data={item}
                width={barWidth}
                x={index * (barWidth + PADDING) + PADDING}
                y={chartHeight}
                factor={factor}
                index={index}
                componentId={componentId}
                onEnter={() => handleMouseEnter(index)}
                onLeave={handleMouseLeave}
              />
            ))}
        </svg>
      </Box>
      {tooltipVisible && activeIndex !== null && (
        <Tooltip
          active={tooltipVisible}
          payload={data[activeIndex].tooltipData || []}
          label={data[activeIndex].name}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
          }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexShrink: 1,
          flexGrow: 0,
          my: 2,
        }}
      >
        {showSkeleton
          ? Array.from(new Array(6)).map((_, index) => (
              <Box
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Skeleton
                  variant="text"
                  width="128px"
                  sx={{ borderRadius: "8px", mt: -0.5 }}
                />
                <Skeleton
                  variant="text"
                  width="64px"
                  sx={{ borderRadius: "8px", mt: -0.5 }}
                />
                <Skeleton
                  variant="text"
                  width="44px"
                  sx={{ borderRadius: "8px", mt: 1 }}
                />
              </Box>
            ))
          : data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  ml: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <AgronodTypography
                  sx={{
                    width: `${barWidth}px`,
                    overflow: "hidden",
                    wordWrap: "break-word",
                    whiteSpace: "break-spaces",
                    marginY: 1,
                  }}
                  variant="caption"
                  component={"p"}
                >
                  {item.name}
                </AgronodTypography>
                <AgronodTypography
                  fontWeight={600}
                  variant="body2"
                  fontSize={24}
                >
                  {mapTotalValue(item).toLocaleString("sv-SE")}
                </AgronodTypography>
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default HorizontalBarChart;
