import { List } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  columns?: number;
  size?: string;
};

export default function NyckeltalGrid({
  children,
  columns = 2,
  size = "md",
}: Props) {
  return (
    <List
      sx={(theme) => ({
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: `repeat(auto-fill, ${
          size === "sm" ? "235px" : "248px"
        })`,
        width: "100%",
        listStyle: "none",
        padding: 0,
        marginTop: 0,
        [theme.breakpoints.down("lg")]: {
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        },
      })}
    >
      <>{children}</>
    </List>
  );
}
