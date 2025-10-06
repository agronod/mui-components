import { ChipProps as MuiChipProps, Chip as MuiChip } from "@mui/material";
import { AgronodTypography } from "../AgronodTypography";
type AgronodChipBaseProps = Pick<
  MuiChipProps,
  "size" | "color" | "disabled" | "label" | "onMouseDown"
>;

export interface AgroodChipProps extends AgronodChipBaseProps {
  handleOnDelete?: () => void;
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
      sx={[(theme) => ({
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "100%",
        minWidth: "auto",
        width: "auto",
        paddingX: 1,
        height: "auto",
        borderRadius: "16px",
        gap: 0.5,
        justifyContent: "space-between",
        backgroundColor:
          props.color === "default" || props.color === undefined
            ? theme.palette.primary.pastel
            : theme.palette[props.color].pastel,
        color: theme.palette.text.primary,
        "& .MuiChip-label": {
          whiteSpace: "normal",
          wordBreak: "break-word",
          overflowWrap: "break-word",
          textAlign: "left",
          display: "block",
          maxWidth: "100%",
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
        }
      }), props.size === "small" ? {
        paddingY: 0.5
      } : {
        paddingY: 1
      }]}
    />
  );
};

export default AgronodChip;
