import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import { round } from "../utils";
import { AgronodTypography } from "../AgronodTypography";

export type PieChartData = {
  id: string;
  name: string;
  value: number;
  color: string;
};

export type PieChartProps = {
  data: Array<PieChartData>;
  onItemHover?: (id?: string) => void;
  selectedId?: string;
  isPdf?: boolean;
  sort?: "asc" | "desc" | "none";
  showAsPercentage?: boolean;
};

const PieChart = ({
  data,
  onItemHover,
  selectedId,
  isPdf,
  sort = "desc",
  showAsPercentage = false,
}: PieChartProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pieChartRef = useRef<any>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>();

  const total = useMemo(
    () => round(data.reduce((acc, curr) => acc + curr.value, 0)),
    [data]
  );

  const dataSorted = useMemo(() => {
    const sorted =
      sort === "none"
        ? data
        : sort === "asc"
          ? data.toSorted((a, b) => a.value - b.value)
          : data.toSorted((a, b) => b.value - a.value);

    return sorted.map((item) => ({ ...item, value: round(item.value) }));
  }, [sort, data, total, showAsPercentage]);

  const tooltipValue = useMemo(() => {
    if (hoverIndex === undefined) {
      return 0;
    }
    if (hoverIndex !== null) {
      return showAsPercentage && total > 0
        ? `${round(dataSorted[hoverIndex].value, 2)}`
        : `${round((dataSorted[hoverIndex].value / total) * 100)}%`;
    }
  }, [showAsPercentage, total, dataSorted, hoverIndex]);

  const onHover = useCallback(
    (index?: number) => {
      const isIndexDefined =
        index !== undefined && index >= 0 && index < dataSorted.length;
      setHoverIndex(isIndexDefined ? index : null);

      if (onItemHover) {
        onItemHover(isIndexDefined ? dataSorted[index].id : undefined);
      }

      if (pieChartRef.current) {
        if (isIndexDefined) {
          const activeItem =
            pieChartRef.current.state.formattedGraphicalItems?.[0].props.data[
              index
            ];
          const tooltipPosition =
            pieChartRef.current.state.formattedGraphicalItems?.[0].props
              .sectors[index].tooltipPosition;

          pieChartRef.current.setState(
            {
              activeTooltipIndex: index,
            },
            () => {
              pieChartRef.current.handleItemMouseEnter({
                tooltipPayload: [activeItem],
                tooltipPosition: {
                  x: tooltipPosition.x,
                  y: tooltipPosition.y,
                },
              });
            }
          );
        } else {
          pieChartRef.current.setState({
            activeTooltipIndex: -1,
            isTooltipActive: false,
          });
        }
      }
    },
    [dataSorted, onItemHover]
  );
  useMemo(() => {
    if (selectedId !== undefined) {
      const selectedIndex = dataSorted.findIndex(
        (item) => item.id === selectedId
      );
      onHover(selectedIndex);
    } else {
      onHover();
    }
  }, [selectedId, dataSorted, onHover]);
  return (
    <Stack direction="row">
      <ResponsiveContainer aspect={1}>
        <RePieChart width={isMobile ? 188 : 224} height={224} ref={pieChartRef}>
          <Pie
            onMouseLeave={() => onHover()}
            startAngle={-270}
            endAngle={-630}
            isAnimationActive={false}
            paddingAngle={2}
            dataKey="value"
            data={dataSorted}
            innerRadius={60}
            outerRadius={95}
            cornerRadius={5}
          >
            {dataSorted.map((item, index) => (
              <Cell
                onMouseOver={() => onHover(index)}
                key={item.id}
                fill={
                  selectedId !== undefined && selectedId !== item.id
                    ? "#E5E3E0"
                    : item.color
                }
              />
            ))}
          </Pie>
          {hoverIndex !== undefined && hoverIndex !== null && (
            <Tooltip
              isAnimationActive={false}
              content={
                <Stack
                  px={1}
                  py={1}
                  gap={"4px"}
                  direction="row"
                  alignItems="center"
                  sx={{
                    opacity: 1,
                    background: theme.palette.text.primary,
                    borderRadius: "3px",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      border: "1px solid #FFFFFF",
                      background: dataSorted[hoverIndex].color,
                    }}
                  />
                  <AgronodTypography
                    sx={{ color: "#FFFFFF" }}
                    variant="caption"
                  >
                    {`${dataSorted[hoverIndex].name} ${tooltipValue}`}
                  </AgronodTypography>
                </Stack>
              }
            />
          )}
        </RePieChart>
      </ResponsiveContainer>
      <Box width="100%" mt={2} ml={isMobile && !isPdf ? 2 : 4}>
        <Box paddingX={1} mb={2}>
          <AgronodTypography variant="caption">Totalt</AgronodTypography>
          <AgronodTypography variant="h5" sx={{ fontWeight: 600 }}>
            {total}
          </AgronodTypography>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box sx={{}} onMouseLeave={() => onHover()}>
            {dataSorted.map((item, index) => (
              <Box
                key={item.id}
                onMouseOver={() => onHover(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                  pb: 0.5,
                  borderRadius: "4px",
                  backgroundColor:
                    index === hoverIndex || selectedId == item.id
                      ? "#FCFAF7"
                      : undefined,
                  cursor: "default",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    mr: 1,
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    pr: 1,
                  }}
                >
                  <AgronodTypography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.name}
                  </AgronodTypography>
                </Box>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    textAlign: "right",
                  }}
                >
                  <AgronodTypography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {showAsPercentage && total > 0
                      ? `${round((item.value / total) * 100)} %`
                      : item.value}
                  </AgronodTypography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default PieChart;
