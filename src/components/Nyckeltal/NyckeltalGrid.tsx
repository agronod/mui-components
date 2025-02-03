import { Grid, List, useTheme } from "@mui/material";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export default function NyckeltalGrid({ children }: Props) {
  const theme = useTheme();
  return (
    <Grid
      container
      gap={2}
      sx={{
        padding: 0,
        marginTop: 0,
      }}
    >
      <>{children}</>
    </Grid>
  );
}
