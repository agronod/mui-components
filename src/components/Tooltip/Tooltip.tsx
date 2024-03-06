import {
  Tooltip as MuiTooltip,
  Typography,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";

export const tooltipTypographyStyle = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
} as const;

export default function Tooltip(props: TooltipProps) {
  return (
    <MuiTooltip
      {...props}
      PopperProps={{
        sx: (theme) => ({
          "& .MuiTooltip-tooltip": {
            backgroundColor: "#212121",
            borderRadius: "4px",
            padding: "8px 16px",
            maxWidth: "500px",
            marginBottom: "8px !important",
          },
          [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.black,
          },
        }),
      }}
      title={
        props.title ? (
          <Typography sx={[tooltipTypographyStyle]}>{props.title}</Typography>
        ) : (
          ""
        )
      }
      placement={props.placement ?? "top-start"}
    >
      {props.children}
    </MuiTooltip>
  );
}
