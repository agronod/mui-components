import {
  Tooltip as MuiTooltip,
  Typography,
  TooltipProps,
  ClickAwayListener,
} from "@mui/material";
import { isValidElement } from "react";

export const tooltipTypographyStyle = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
} as const;

interface ExtendedTooltipProps extends TooltipProps {
  onClose: () => void;
}

export default function Tooltip(props: ExtendedTooltipProps) {
  return (
    <>
      <ClickAwayListener onClickAway={props.onClose}>
        <MuiTooltip
          {...props}
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                backgroundColor: "#212121",
                borderRadius: "4px",
                padding: "8px 16px",
                maxWidth: "500px",
                marginBottom: "8px !important",
              },
            },
          }}
          title={
            isValidElement(props.title) ? (
              props.title
            ) : (
              <Typography
                sx={[
                  tooltipTypographyStyle,
                  {
                    display: "flex",
                    alignItems: "center",
                  },
                ]}
              >
                {props.title}
              </Typography>
            )
          }
          placement={props.placement ?? "top-start"}
        >
          {props.children}
        </MuiTooltip>
      </ClickAwayListener>
    </>
  );
}
