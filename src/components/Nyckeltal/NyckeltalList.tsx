import { Paper, Typography, useTheme } from "@mui/material";
import NyckeltalListItem from "./NyckeltalListItem";

type Props = {
  data: [] | any;
  padding: number;
  title: string;
};

export default function NyckeltalList({
  data,
  padding = 4,
  title = "Nyckeltal",
}: Props) {
  const theme = useTheme();

  if (!data || data.length < 1) return null;

  return (
    <Paper
      sx={{
        m: 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 10%)",
        padding: padding,
      }}
    >
      <Typography component="h2" variant="subtitle1">
        {title}
      </Typography>
      <ul
        style={{
          display: "grid",
          gap: theme.spacing(2),
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          listStyle: "none",
          margin: `${theme.spacing(7)} 0 0`,
          padding: 0,
        }}
      >
        {data.map((x: any, index: number) => (
          <NyckeltalListItem item={x} key={index} />
        ))}
      </ul>
    </Paper>
  );
}
