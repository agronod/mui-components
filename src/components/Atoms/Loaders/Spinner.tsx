import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";

type SpinnerBaseProps = Pick<
  MuiCircularProgressProps,
  "size" | "thickness" | "variant"
>;

interface SpinnerProps extends SpinnerBaseProps {
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
        size={props.size}
        thickness={props.thickness}
        variant={props.variant}
      />
    </Box>
  );
};

export default Spinner;
