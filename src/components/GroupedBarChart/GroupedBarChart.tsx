import { Box, Divider } from "@mui/material";
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

export type GroupedBarChartTooltipItem = {
  label: string;
  value: string;
};

export type GroupedBarChartCategory = {
  name: string;
  color: string;
};

export type GroupedBarChartGroup = {
  id: string;
  name: string;
  unit: string;
  values: number[];
  tooltipData?: GroupedBarChartTooltipItem[][];
};

export type GroupedBarChartProps = {
  categories: GroupedBarChartCategory[];
  groups: GroupedBarChartGroup[];
  yAxisMax?: number;
  yAxisStepCount?: number;
};

const Y_AXIS_WIDTH = 28;
const GROUP_GAP = 40;
const BAR_GAP = 2;
const BAR_RADIUS = 20;
const CHART_PADDING_Y = 8;

const GroupedBarChart = ({
  categories,
  groups,
  yAxisMax: yAxisMaxProp,
  yAxisStepCount = 3,
}: GroupedBarChartProps) => {
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  const [activeBar, setActiveBar] = useState<{
    groupIndex: number;
    barIndex: number;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const svg = entries[0].target.children[0];
      setChartHeight(svg.clientHeight);
      setChartWidth(svg.clientWidth);
    });

    const currentContainer = containerRef.current;
    if (currentContainer) resizeObserver.observe(currentContainer);

    return () => {
      if (currentContainer) resizeObserver.unobserve(currentContainer);
    };
  }, []);

  const { yAxisTicks, yAxisMax } = useMemo(() => {
    const dataMax =
      yAxisMaxProp ?? Math.max(...groups.flatMap((group) => group.values));
    if (dataMax <= 0) return { yAxisTicks: [0], yAxisMax: 1 };

    // Calculate a nice step size based on order of magnitude
    const roughStep = dataMax / yAxisStepCount;
    const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
    const normalized = roughStep / magnitude;

    let niceNormalized: number;
    if (normalized <= 1) niceNormalized = 1;
    else if (normalized <= 2) niceNormalized = 2;
    else if (normalized <= 5) niceNormalized = 5;
    else niceNormalized = 10;

    const niceStep = niceNormalized * magnitude;
    const stepsNeeded = Math.ceil(dataMax / niceStep);
    const finalStepCount = Math.max(yAxisStepCount, stepsNeeded);
    const niceMax = niceStep * finalStepCount;

    const ticks: number[] = [];
    for (let i = finalStepCount; i >= 0; i--) {
      ticks.push(Math.round(niceStep * i * 1e10) / 1e10);
    }

    return { yAxisTicks: ticks, yAxisMax: niceMax };
  }, [yAxisMaxProp, groups, yAxisStepCount]);

  const drawableHeight = useMemo(
    () => Math.max(0, chartHeight - 2 * CHART_PADDING_Y),
    [chartHeight],
  );

  const baseline = useMemo(() => chartHeight - CHART_PADDING_Y, [chartHeight]);

  const factor = useMemo(
    () => (yAxisMax > 0 ? drawableHeight / yAxisMax : 0),
    [drawableHeight, yAxisMax],
  );

  const groupWidth = useMemo(() => {
    if (groups.length === 0) return 0;
    const totalGaps = Math.max(0, groups.length - 1) * GROUP_GAP;
    return Math.max(0, (chartWidth - totalGaps) / groups.length);
  }, [chartWidth, groups.length]);

  const barWidth = useMemo(() => {
    if (categories.length === 0) return 0;
    const totalGaps = Math.max(0, categories.length - 1) * BAR_GAP;
    return Math.max(0, (groupWidth - totalGaps) / categories.length);
  }, [groupWidth, categories.length]);

  const radius = useMemo(() => Math.min(BAR_RADIUS, barWidth / 2), [barWidth]);

  const gridLineYPositions = useMemo(
    () => yAxisTicks.map((tick) => baseline - tick * factor),
    [yAxisTicks, baseline, factor],
  );

  const handleBarEnter = useCallback((groupIndex: number, barIndex: number) => {
    setActiveBar({ groupIndex, barIndex });
  }, []);

  const handleBarLeave = useCallback(() => {
    setActiveBar(null);
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: event.clientX - rect.left + 16,
        y: event.clientY - rect.top - 16,
      });
    },
    [],
  );

  const tooltipContent = useMemo(() => {
    if (!activeBar) return null;
    const { groupIndex, barIndex } = activeBar;
    const group = groups[groupIndex];
    const category = categories[barIndex];
    if (!group || !category) return null;

    const value = round(group.values[barIndex]);
    const items = group.tooltipData?.[barIndex];

    return { category: category.name, value, unit: group.unit, items };
  }, [activeBar, groups, categories]);

  const labelFontSize = groups.length > 6 ? 10 : 12;
  const totalFontSize = groups.length > 6 ? 18 : groups.length > 4 ? 20 : 24;

  return (
    <Box
      ref={rootRef}
      onMouseMove={handleMouseMove}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Main row: chart column + legend */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Chart column: (y-axis + SVG) row, then group labels below */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* SVG row: y-axis + bars */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              minHeight: 0,
            }}
          >
            {/* Y-axis labels - only spans SVG height */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: Y_AXIS_WIDTH,
                flexShrink: 0,
                mr: 1,
                py: "1px",
              }}
            >
              {yAxisTicks.map((tick, index) => (
                <AgronodTypography
                  key={index}
                  sx={{
                    fontSize: 10,
                    lineHeight: "14px",
                    color: "#666461",
                    textAlign: "right",
                    fontWeight: 400,
                  }}
                >
                  {tick.toLocaleString("sv-SE")}
                </AgronodTypography>
              ))}
            </Box>

            {/* SVG chart area */}
            <Box
              ref={containerRef}
              sx={{
                flex: 1,
                minWidth: 0,
                display: "flex",
              }}
            >
              <svg width="100%" height="100%">
                <defs>
                  {groups.map((group, gi) =>
                    group.values.map((value, bi) => {
                      if (value <= 0) return null;
                      const groupX = gi * (groupWidth + GROUP_GAP);
                      const barX = groupX + bi * (barWidth + BAR_GAP);
                      const barHeight = value * factor;

                      return (
                        <clipPath
                          key={`${gi}-${bi}`}
                          id={`clip-${componentId}-${gi}-${bi}`}
                        >
                          <rect
                            x={barX}
                            y={baseline - barHeight}
                            width={barWidth}
                            height={barHeight + radius}
                            rx={radius}
                          />
                        </clipPath>
                      );
                    }),
                  )}
                </defs>

                {/* Grid lines */}
                {gridLineYPositions.map((y, index) => (
                  <line
                    key={index}
                    x1={0}
                    y1={y}
                    x2={chartWidth}
                    y2={y}
                    stroke="#E5E3E0"
                    strokeWidth={1}
                  />
                ))}

                {/* Bars */}
                {groups.map((group, gi) =>
                  group.values.map((value, bi) => {
                    if (value <= 0) return null;
                    const groupX = gi * (groupWidth + GROUP_GAP);
                    const barX = groupX + bi * (barWidth + BAR_GAP);
                    const barHeight = value * factor;

                    return (
                      <g
                        key={`bar-${gi}-${bi}`}
                        onMouseEnter={() => handleBarEnter(gi, bi)}
                        onMouseLeave={handleBarLeave}
                      >
                        <rect
                          x={barX}
                          y={baseline - barHeight}
                          width={barWidth}
                          height={barHeight}
                          fill={categories[bi]?.color || "#ccc"}
                          clipPath={`url(#clip-${componentId}-${gi}-${bi})`}
                        />
                        {/* Invisible hover area above bar */}
                        <rect
                          x={barX}
                          y={0}
                          width={barWidth}
                          height={baseline - barHeight}
                          fill="transparent"
                        />
                      </g>
                    );
                  }),
                )}
              </svg>
            </Box>
          </Box>

          {/* Group descriptions - aligned with bars */}
          <Box
            sx={{
              display: "flex",
              gap: `${GROUP_GAP}px`,
              pl: `${Y_AXIS_WIDTH + 8}px`,
              mt: 3,
              flexShrink: 0,
            }}
          >
            {groups.map((group) => {
              const total = round(group.values.reduce((sum, v) => sum + v, 0));

              return (
                <Box
                  key={group.id}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AgronodTypography
                    sx={{
                      fontSize: labelFontSize,
                      lineHeight: "16px",
                      color: "#212121",
                      fontWeight: 400,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {group.name}
                  </AgronodTypography>
                  <AgronodTypography
                    sx={{
                      fontSize: labelFontSize,
                      lineHeight: "16px",
                      color: "#666461",
                      fontWeight: 400,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {group.unit}
                  </AgronodTypography>
                  <AgronodTypography
                    sx={{
                      fontSize: totalFontSize,
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "0.18px",
                      color: "#252321",
                      mt: 1,
                    }}
                  >
                    {total.toLocaleString("sv-SE")}
                  </AgronodTypography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Legend */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flexShrink: 0,
            ml: 5,
          }}
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "4px",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  backgroundColor: category.color,
                  flexShrink: 0,
                }}
              />
              <AgronodTypography
                sx={{
                  fontSize: 12,
                  lineHeight: "normal",
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                {category.name}
              </AgronodTypography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Tooltip */}
      {tooltipContent && (
        <Box
          sx={{
            position: "absolute",
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: "translateY(-100%)",
            pointerEvents: "none",
            zIndex: 10000,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #E5E3E0",
              borderRadius: "16px",
              boxShadow: "0px 4px 30px 0px rgba(0,0,0,0.05)",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              minWidth: 200,
            }}
          >
            <AgronodTypography
              sx={{
                fontSize: 12,
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#252321",
              }}
            >
              {tooltipContent.category}
            </AgronodTypography>
            <AgronodTypography
              sx={{
                fontSize: 22,
                fontWeight: 500,
                lineHeight: "26px",
                color: "#252321",
              }}
            >
              {tooltipContent.value.toLocaleString("sv-SE")}
            </AgronodTypography>
            <AgronodTypography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "16px",
                color: "#252321",
              }}
            >
              {tooltipContent.unit}
            </AgronodTypography>
            {tooltipContent.items && tooltipContent.items.length > 0 && (
              <>
                <Divider sx={{ borderColor: "#E5E3E0" }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {tooltipContent.items.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "flex-start",
                      }}
                    >
                      <AgronodTypography
                        sx={{
                          fontSize: 10,
                          fontWeight: 600,
                          lineHeight: "14px",
                          letterSpacing: "-0.05px",
                          color: "#252321",
                          flexShrink: 0,
                        }}
                      >
                        {item.value}
                      </AgronodTypography>
                      <AgronodTypography
                        sx={{
                          fontSize: 10,
                          fontWeight: 400,
                          lineHeight: "14px",
                          color: "#252321",
                          minWidth: 100,
                        }}
                      >
                        {item.label}
                      </AgronodTypography>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GroupedBarChart;
