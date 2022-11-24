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
        gridTemplateColumns: "repeat(auto-fill, 160px)",
        listStyle: "none",
        padding: 0,
        marginTop: 0,
      }}
    >
      <>{children}</>
    </ul>
  );
}
