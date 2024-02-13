import { PieChart as RePieChart, Pie, Cell, Tooltip } from "recharts";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import { round } from "../utils";

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
};

const PieChart = ({ data, onItemHover, selectedId, isPdf }: PieChartProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pieChartRef = useRef<any>(null);
  const [hoverIndex, setHoverIndex] = useState<number>();

  const total = useMemo(
    () => round(data.reduce((acc, curr) => acc + curr.value, 0)),
    [data]
  );

  const dataSorted = useMemo(
    () =>
      data
        .sort((a, b) => b.value - a.value)
        .map((item) => ({ ...item, value: round(item.value) })),
    [data]
  );

  const percentage = useMemo(() => {
    if (hoverIndex === undefined) {
      return 0;
    }
    return Math.round((dataSorted[hoverIndex].value / total) * 100);
  }, [total, dataSorted, hoverIndex]);

  const onHover = useCallback(
    (index?: number) => {
      setHoverIndex(index);
      if (onItemHover) {
        onItemHover(index !== undefined ? dataSorted[index].id : undefined);
      }

      // Until recharts supports programmatic setting of tooltip, we need to do this
      if (index !== undefined) {
        const activeItem =
          pieChartRef.current?.state.formattedGraphicalItems?.[0].props.data[
            index
          ];
        const tooltipPosition =
          pieChartRef.current?.state.formattedGraphicalItems?.[0].props.sectors[
            index
          ].tooltipPosition;
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
          isTooltipActive: false,
        });
      }
    },
    [dataSorted, onItemHover]
  );

  return (
    <Stack direction="row">
      <RePieChart width={isMobile ? 188 : 224} height={224} ref={pieChartRef}>
        <Pie
          onMouseLeave={() => onHover()}
          startAngle={-270}
          endAngle={-630}
          isAnimationActive={false}
          paddingAngle={2}
          dataKey="value"
          data={dataSorted}
          innerRadius={65}
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
        {hoverIndex !== undefined && (
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
                <Typography sx={{ color: "#FFFFFF" }} variant="caption">
                  {`${dataSorted[hoverIndex].name} ${percentage}%`}
                </Typography>
              </Stack>
            }
          />
        )}
      </RePieChart>
      <Box width="100%" mt={2} ml={isMobile && !isPdf ? 2 : 4}>
        <Box paddingX={1} mb={2}>
          <Typography variant="caption">Totalt</Typography>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {total}
          </Typography>
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
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    textAlign: "right",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </Typography>
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
