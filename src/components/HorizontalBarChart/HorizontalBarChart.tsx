import { Box, Card, Stack, Typography } from "@mui/material";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { round } from "../utils";

export type HorizontalBarChartData = {
  id: string;
  name: string;
  value: number | Array<number>;
  color: string | Array<string>;
};

export type HorizontalBarChartProps = {
  data: Array<HorizontalBarChartData>;
  tooltipData: Array<any>;
};

const GRID_HEIGHT = 54;
const PADDING = 16;

const Tooltip = ({ style, active, payload, label, subkategori }: any) => {
  type Category = {
    name: string;
    utslappskategoriId: string;
    value: number;
    percentage: number;
  };
  console.log("sub", subkategori, payload, active);
  if (!subkategori) return <></>;

  if (active && payload && payload.length) {
    let subcategories = subkategori
      .filter((category: Category) => {
        if (category.value === 0) {
          return;
        }
        return category.utslappskategoriId === payload[0].payload?.name;
      })
      .sort((a: Category, b: Category) => a.percentage - b.percentage)
      .reverse();
    return (
      <div
        style={{
          position: "absolute",
          padding: "6px 10px",
          background: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          borderRadius: "4px",
          ...style,
        }}
      >
        <Card
          sx={(theme) => ({
            textAlign: "left",
            padding: 3,
            border: "1px solid #e0e0e0",
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
          <Typography fontWeight={500} mb={2} variant="overline">
            {label}
          </Typography>
          {subcategories.map((category: Category) => (
            <Stack
              key={category.name}
              direction="row"
              alignItems="center"
              marginBottom={0.5}
            >
              <Typography
                mb={0.5}
                fontWeight={600}
                variant="caption"
                sx={{ minWidth: "30px" }}
              >
                {Math.round(category.percentage)}%
              </Typography>

              <Typography ml={1} mb={0.5} variant="caption">
                {category.name}
              </Typography>
            </Stack>
          ))}
        </Card>
      </div>
    );
  }
  return null;
};

const Bar = ({
  data,
  width,
  x,
  y,
  factor,
  index,
  componentId,
  setTooltipContent,
  setTooltipVisible,
  setTooltipPosition,
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
  setTooltipContent: (content: string) => void;
  setTooltipVisible: (isVisible: boolean) => void;
  setTooltipPosition: ({ x, y }: { x: any; y: any }) => void;
  onEnter: any;
  onLeave: any;
}) => {
  if (Array.isArray(data.value)) {
    const dataReversed = data.value.reverse();

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
          const heigth =
            round(
              dataReversed
                .slice(innerIndex)
                .reduce((acc, curr) => acc + curr, 0)
            ) * factor;

          return (
            <rect
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              key={innerIndex}
              x={x}
              y={y - heigth}
              width={width}
              height={heigth}
              fill={getColor(innerIndex)}
            />
          );
        })}
      </g>
    );
  }
  const handleMouseEnter = (
    event: React.MouseEvent,
    value: number | number[]
  ) => {
    setTooltipContent(`${data.name}: ${value}`);
    setTooltipVisible(true);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  const heigth = round(data.value) * factor;

  return (
    <g>
      <rect
        onMouseEnter={(event) => handleMouseEnter(event, data.value)}
        onMouseLeave={handleMouseLeave}
        x={x}
        y={y - heigth}
        width={width}
        height={heigth}
        fill={Array.isArray(data.color) ? data.color[0] : data.color}
        clipPath={`url(#round-corner${componentId}-${index})`}
      />
    </g>
  );
};

const HorizontalBarChart = ({ data, tooltipData }: HorizontalBarChartProps) => {
  console.log(data);
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setTooltipVisible(false);
  };

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
      onMouseMove={(event) =>
        setTooltipPosition({ x: event.clientX, y: event.clientY })
      }
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
        {tooltipVisible && (
          <Tooltip
            style={{
              top: tooltipPosition.y + "px",
              left: tooltipPosition.x + "px",
              position: "fixed",
              transform: "translate(-50%, -20px)",
              zIndex: 1000,
              pointerEvents: "none",
            }}
          >
            {tooltipContent}
          </Tooltip>
        )}
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
          {data.map((item, index) => (
            <Bar
              key={index}
              data={item}
              width={barWidth}
              x={index * (barWidth + PADDING) + PADDING}
              y={chartHeight}
              factor={factor}
              index={index}
              componentId={componentId}
              setTooltipContent={setTooltipContent}
              setTooltipVisible={setTooltipVisible}
              setTooltipPosition={setTooltipPosition}
              onEnter={() => handleMouseEnter(index)}
              onLeave={handleMouseLeave}
            />
          ))}
        </svg>
      </Box>
      {tooltipVisible && activeIndex !== null && (
        <Tooltip
          active={tooltipVisible}
          payload={[{ payload: data[activeIndex] }]}
          label={data[activeIndex].name}
          subkategori={tooltipData}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            transform: "translate(-50%, -20px)",
            zIndex: 1000,
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
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              marginX: 2,
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
              {mapTotalValue(item).toLocaleString("sv-SE")}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalBarChart;
