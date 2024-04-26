import {
  ChipProps as MuiChipProps,
  Chip as MuiChip,
  Typography,
} from "@mui/material";
type AgronodChipBaseProps = Pick<
  MuiChipProps,
  "size" | "color" | "disabled" | "label"
>;

export interface AgroodChipProps extends AgronodChipBaseProps {
  handleOnDelete?: () => void;
}

const AgronodChip = (props: AgroodChipProps) => {
  return (
    <MuiChip
      size={props.size}
      disabled={props.disabled}
      label={<Typography variant="body2">{props.label}</Typography>}
      skipFocusWhenDisabled={true}
      onDelete={props.handleOnDelete ? props.handleOnDelete : undefined}
      variant="filled"
      sx={(theme) => ({
        maxWidth: "auto",
        width: "auto",
        paddingY: props.size === "small" ? 0.5 : 1,
        paddingX: 1,
        height: props.size === "small" ? "24px" : "32px",
        borderRadius: "16px",
        gap: 0.5,
        justifyContent: "space-between",
        backgroundColor:
          props.color === "default" || props.color === undefined
            ? theme.palette.primary.pastel
            : theme.palette[props.color].pastel,
        color: theme.palette.text.primary,

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