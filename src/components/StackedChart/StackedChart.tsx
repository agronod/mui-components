import * as React from "react";
import { getNyckeltalVarde } from "../Nyckeltal/utils";
import { Box, Card, Typography, useTheme } from "@mui/material";

const colors = ["#123F25", "#2C7A4D", "#59B87F", "#BDBDBD"];

export type StackedChartDataProps = {
  name: string;
  percentage: string | number;
  unit: string;
  value: number;
};

type StackedChartProps = {
  data: StackedChartDataProps[];
  headline: string;
  resultPage?: boolean;
  colorScheme?: "primary" | "secondary" | "tertiary";
};

export const StackedChart: React.FC<StackedChartProps> = ({
  data,
  headline,
  resultPage,
  colorScheme,
}) => {
  const theme = useTheme();
  // TODO: fix color scheme according to design
  // const colors = {
  //   primary: [],
  //   secondary: [],
  //   tertiary: [],
  // };

  if (!Array.isArray(data) || data.length === 0) {
    console.log(`No data to show for barchart: ${name}`);
    return <></>;
  }

  return (
    <Card
      sx={(theme) => ({
        py: 2,
        px: 2,
        borderRadius: 4,
        boxShadow: "none",
        border: `1px solid ${theme.palette.divider}`,
        mt: resultPage ? 0 : 2,
        [theme.breakpoints.down("sm")]: {
          padding: 0,
        },
      })}
    >
      <Typography
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            padding: 2,
          },
        })}
        variant="subtitle2"
      >
        {headline}
      </Typography>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          borderRadius: 4,
          [theme.breakpoints.down("sm")]: {
            px: 2,
            pb: 2,
          },
        })}
      >
        {data.map((item: StackedChartDataProps, index: number) => {
          return (
            item.value > 0 && (
              <Box
                key={index}
                component="span"
                sx={{
                  my: 1,
                  height: 16,
                  width: `${item.percentage}%`,
                  borderRadius: "0 0 0 0",
                  background: colors[index],
                  "&:last-child": {
                    borderRadius: "0 16px 16px 0",
                  },
                  "&:first-of-type": {
                    borderRadius: "16px 0 0 16px",
                  },
                }}
              />
            )
          );
        })}
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        })}
      >
        {data.map((item: StackedChartDataProps, index: number) => {
          return (
            item.value > 0 && (
              <Box
                key={index}
                sx={(theme) => ({
                  pr: 3,
                  [theme.breakpoints.down("sm")]: {
                    p: 2,
                    borderTop: "1px solid",
                    borderColor: theme.palette.border,
                  },
                })}
              >
                <Typography variant="caption">{item.name}</Typography>
                <Typography component="p" variant="caption">
                  {getNyckeltalVarde(item.value).toLocaleString("sv-SE")}{" "}
                  {item.unit}
                </Typography>
                <Typography
                  color={colors[index]}
                  marginTop={0.5}
                  fontWeight={600}
                  variant="body2"
                  fontSize={24}
                >
                  {item.percentage}%
                </Typography>
              </Box>
            )
          );
        })}
      </Box>
    </Card>
  );
};

export default StackedChart;
