import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import { AgronodTypography } from "../AgronodTypography";
import { ReactNode } from "react";

export const tooltipTypographyStyle = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
} as const;

export default function Tooltip({ title, children, ...rest }: TooltipProps) {
  const AgronodTooltipTitle = ({ title }: { title: ReactNode }) => {
    return typeof title === "string" ? (
      <AgronodTypography sx={[tooltipTypographyStyle]}>
        {title}
      </AgronodTypography>
    ) : (
      title
    );
  };

  return (
    <MuiTooltip
      title={title ? <AgronodTooltipTitle title={title} /> : ""}
      {...rest}
      slotProps={{
        ...rest.slotProps,
        tooltip: mergeSlotProps(rest.slotProps?.tooltip, {
          sx: {
            backgroundColor: "#212121",
            borderRadius: "4px",
            padding: "8px 16px",
            maxWidth: "500px",
            marginBottom: "8px !important",
          },
        }),
        arrow: mergeSlotProps(rest.slotProps?.arrow, {
          sx: (theme) => ({
            color: theme.palette.black,
          }),
        }),
      }}
    >
      {children}
    </MuiTooltip>
  );
}
