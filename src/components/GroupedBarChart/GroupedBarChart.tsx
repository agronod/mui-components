import { Box, Divider } from "@mui/material";
import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  name: ReactNode;
  unit: ReactNode;
  values: number[];
  tooltipData?: GroupedBarChartTooltipItem[][];
};

export type GroupedBarChartProps = {
  categories: GroupedBarChartCategory[];
  groups: GroupedBarChartGroup[];
  yAxisMax?: number;
  yAxisStepCount?: number;
  minGroupWidth?: number;
};

const formatValue = (value: number): string => {
  if (value > 0 && value < 0.01) return "<0,01";
  return round(value).toLocaleString("sv-SE");
};

const Y_AXIS_WIDTH = 28;
const GROUP_GAP = 40;
const BAR_GAP = 2;
const BAR_RADIUS = 20;
const ROW_GAP = 24;
const LABEL_AREA_HEIGHT = 70;

const GroupedBarChart = ({
  categories,
  groups,
  yAxisMax: yAxisMaxProp,
  yAxisStepCount = 3,
  minGroupWidth = 120,
}: GroupedBarChartProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [activeBar, setActiveBar] = useState<{
    groupIndex: number;
    barIndex: number;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const el = entries[0].target;
      setContainerWidth(el.clientWidth);
      setContainerHeight(el.clientHeight);
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
    const niceMax = niceStep * stepsNeeded;

    const ticks: number[] = [];
    for (let i = stepsNeeded; i >= 0; i--) {
      ticks.push(Math.round(niceStep * i * 1e10) / 1e10);
    }

    return { yAxisTicks: ticks, yAxisMax: niceMax };
  }, [yAxisMaxProp, groups, yAxisStepCount]);

  const gridLinePercentages = useMemo(
    () => yAxisTicks.map((tick) => (tick / yAxisMax) * 100),
    [yAxisTicks, yAxisMax],
  );

  const groupsPerRow = useMemo(() => {
    if (containerWidth <= 0 || groups.length === 0) return groups.length || 1;
    const availableForGroups = containerWidth - Y_AXIS_WIDTH - 8;
    const perRow = Math.max(
      1,
      Math.floor(
        (availableForGroups + GROUP_GAP) / (minGroupWidth + GROUP_GAP),
      ),
    );
    return Math.min(perRow, groups.length);
  }, [containerWidth, groups.length, minGroupWidth]);

  const rows = useMemo(() => {
    const result: { group: GroupedBarChartGroup; gi: number }[][] = [];
    for (let i = 0; i < groups.length; i += groupsPerRow) {
      result.push(
        groups.slice(i, i + groupsPerRow).map((group, idx) => ({
          group,
          gi: i + idx,
        })),
      );
    }
    return result;
  }, [groups, groupsPerRow]);

  const barAreaHeight = useMemo(() => {
    if (containerHeight <= 0) return 200;
    const totalLabelHeight = rows.length * LABEL_AREA_HEIGHT;
    const totalRowGaps = Math.max(0, rows.length - 1) * ROW_GAP;
    return Math.max(
      80,
      (containerHeight - totalLabelHeight - totalRowGaps) / rows.length,
    );
  }, [containerHeight, rows.length]);

  const handleBarEnter = useCallback(
    (groupIndex: number, barIndex: number) => {
      setActiveBar({ groupIndex, barIndex });
    },
    [],
  );

  const handleBarLeave = useCallback(() => {
    setActiveBar(null);
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      setTooltipPosition({
        x: event.clientX + 16,
        y: event.clientY - 16,
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

    const value = formatValue(group.values[barIndex]);
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
      {/* Main row: chart + legend */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Chart area */}
        <Box
          ref={containerRef}
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: `${ROW_GAP}px`,
          }}
        >
          {rows.map((rowGroups, rowIndex) => (
            <Box key={rowIndex} sx={{ display: "flex", flexDirection: "column" }}>
              {/* Y-axis + bar area */}
              <Box sx={{ display: "flex", height: barAreaHeight }}>
                {/* Y-axis labels */}
                <Box
                  sx={{
                    position: "relative",
                    width: Y_AXIS_WIDTH,
                    flexShrink: 0,
                    mr: 1,
                  }}
                >
                  {yAxisTicks.map((tick, index) => (
                    <AgronodTypography
                      key={index}
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: `${gridLinePercentages[index]}%`,
                        transform: "translateY(50%)",
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

                {/* Row bar area with grid lines spanning full width */}
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    position: "relative",
                    display: "flex",
                    gap: `${GROUP_GAP}px`,
                  }}
                >
                  {/* Grid lines */}
                  {gridLinePercentages.map((pct, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: `${pct}%`,
                        borderTop: "1px solid #E5E3E0",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  ))}

                  {/* Groups in this row */}
                  {rowGroups.map(({ group, gi }) => (
                    <Box
                      key={group.id}
                      sx={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        gap: `${BAR_GAP}px`,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {group.values.map((value, bi) => {
                        const heightPct =
                          value > 0 && yAxisMax > 0
                            ? (value / yAxisMax) * 100
                            : 0;

                        return (
                          <Box
                            key={bi}
                            sx={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                            }}
                            onMouseEnter={() => handleBarEnter(gi, bi)}
                            onMouseLeave={handleBarLeave}
                          >
                            {value > 0 && (
                              <Box
                                sx={{
                                  height: `${heightPct}%`,
                                  backgroundColor:
                                    categories[bi]?.color || "#ccc",
                                  borderRadius: `${BAR_RADIUS}px ${BAR_RADIUS}px 0 0`,
                                }}
                              />
                            )}
                          </Box>
                        );
                      })}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Group labels for this row */}
              <Box
                sx={{
                  display: "flex",
                  gap: `${GROUP_GAP}px`,
                  pl: `${Y_AXIS_WIDTH + 8}px`,
                  mt: 3,
                }}
              >
                {rowGroups.map(({ group }) => {
                  const total = formatValue(
                    group.values.reduce((sum, v) => sum + v, 0),
                  );

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
                        {total}
                      </AgronodTypography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ))}
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
            position: "fixed",
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
              {tooltipContent.value}
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
