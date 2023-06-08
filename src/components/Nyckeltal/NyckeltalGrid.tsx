import { List } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  // amount of columns in grid
  columns?: number;
};

export default function NyckeltalGrid({ children, columns = 2 }: Props) {
  return (
    <List
      sx={(theme) => ({
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "repeat(auto-fill, 248px)",
        width: "100%",
        listStyle: "none",
        padding: 0,
        marginTop: 0,
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        },
      })}
    >
      <>{children}</>
    </List>
  );
}
