import { Tooltip as MuiTooltip, Typography, TooltipProps } from "@mui/material";

export default function Tooltip(props: TooltipProps) {
  return (
    <MuiTooltip
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            backgroundColor: "#212121",
            borderRadius: "4px",
            padding: "8px 16px",
            maxWidth: "800px",
          },
        },
      }}
      title={
        <Typography
          color="#FFFFFF"
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "0.1px",
          }}
        >
          {props.title}
        </Typography>
      }
      placement={props.placement ?? "top-start"}
    >
      {props.children}
    </MuiTooltip>
  );
}
