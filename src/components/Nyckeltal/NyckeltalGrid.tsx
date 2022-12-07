import { List, useTheme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NyckeltalGrid({ children }: Props) {
  const theme = useTheme();

  return (
    <List
      sx={{
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "none",
        [theme.breakpoints.up("sm")]: {
          gridTemplateColumns: "repeat(auto-fill, 248px)",
          width: "100%",
        },
        listStyle: "none",
        padding: 0,
        marginTop: 0,
      }}
    >
      <>{children}</>
    </List>
  );
}
