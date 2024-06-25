import { Box, Card, useTheme } from "@mui/material";
import { AgronodTypography } from "../../components";

type ColorItemProps = {
  name: string;
  code?: string;
};

const ColorItem = (props: ColorItemProps) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 0,
        borderRadius: "20px",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        width: "130px",
      }}
    >
      <Box
        sx={{
          width: "130px",
          height: "80px",
          borderBottom: "1px solid",
          borderColor: theme.palette.border,
          backgroundColor: props.code,
        }}
      ></Box>
      <Box sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}>
        <AgronodTypography variant="body2" sx={{ wordBreak: "break-all" }}>
          <code>{props.name}</code>
        </AgronodTypography>
        <AgronodTypography variant="caption">{props.code}</AgronodTypography>
      </Box>
    </Card>
  );
};

export default ColorItem;
