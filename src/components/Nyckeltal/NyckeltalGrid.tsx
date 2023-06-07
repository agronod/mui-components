import { List, useTheme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NyckeltalGrid({ children }: Props) {
  const theme = useTheme();

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
        [theme.breakpoints.between("sm", "md")]: {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      })}
    >
      <>{children}</>
    </List>
  );
}
