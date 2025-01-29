import { ChipProps as MuiChipProps, Chip as MuiChip } from "@mui/material";
import { AgronodTypography } from "../AgronodTypography";
type AgronodChipBaseProps = Pick<
  MuiChipProps,
  "size" | "color" | "disabled" | "label" | "onMouseDown"
>;

export interface AgroodChipProps extends AgronodChipBaseProps {
  handleOnDelete?: (e?: any) => void;
}

const AgronodChip = (props: AgroodChipProps) => {
  return (
    <MuiChip
      size={props.size}
      disabled={props.disabled}
      label={
        <AgronodTypography variant="body2">{props.label}</AgronodTypography>
      }
      skipFocusWhenDisabled={true}
      onDelete={props.handleOnDelete ? props.handleOnDelete : undefined}
      onMouseDown={props.onMouseDown}
      variant="filled"
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "100%", // Ensures it doesn’t overflow
        minWidth: "auto",
        width: "auto",
        paddingY: props.size === "small" ? 0.5 : 1,
        paddingX: 1,
        height: "auto", // Allows height to adjust
        borderRadius: "16px",
        gap: 0.5,
        justifyContent: "space-between",
        backgroundColor:
          props.color === "default" || props.color === undefined
            ? theme.palette.primary.pastel
            : theme.palette[props.color].pastel,
        color: theme.palette.text.primary,

        "& .MuiChip-label": {
          whiteSpace: "normal", // Allows text to wrap
          wordBreak: "break-word", // Ensures long words break
          overflowWrap: "break-word", // Extra word-breaking support
          textAlign: "center", // Centers text
          display: "block", // Ensures it takes the full available space
          maxWidth: "100%", // Prevents text from overflowing
        },

        "&.Mui-disabled": {
          backgroundColor: theme.palette.buttonDisabled,
          color: theme.palette.text.disabled,
          "& .MuiChip-deleteIcon": {
            color: theme.palette.text.disabled,
          },
        },
        "& .MuiChip-deleteIcon": {
          color: theme.palette.primary.main,
          borderRadius: "50%",
          height: "16px",
          width: "16px",
          margin: 0,
          "&:hover": {
            color: theme.palette.primary.dark,
          },
        },
        "& span": {
          padding: 0,
        },
        "&:focus-visible": {
          backgroundColor: theme.palette.primary.pastel,

          "& .MuiChip-deleteIcon": {
            border: `1px solid ${theme.palette.white}`,
            boxShadow: `0px 0px 0px 3.5px ${theme.palette.white}`,
            outline: ` 1.5px solid ${theme.palette.black}`,
          },
        },
      })}
    />
  );
};

export default AgronodChip;
