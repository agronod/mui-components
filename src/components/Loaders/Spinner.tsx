import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";

type SpinnerBaseProps = Pick<
  MuiCircularProgressProps,
  "size" | "thickness" | "color"
>;

export interface SpinnerProps extends SpinnerBaseProps {
  align: string;
}

const Spinner = ({ ...props }: SpinnerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: props.align,
      }}
    >
      <MuiCircularProgress
        color={props.color}
        size={props.size}
        thickness={props.thickness}
      />
    </Box>
  );
};

export default Spinner;
