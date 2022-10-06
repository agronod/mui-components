import { useTheme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NyckeltalGrid({ children }: Props) {
  const theme = useTheme();
  return (
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
      {children}
    </ul>
  );
}
