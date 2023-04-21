import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";

type LoaderCircularBaseProps = Pick<
  MuiCircularProgressProps,
  "size" | "thickness" | "color"
>;

export interface LoaderCircularProps extends LoaderCircularBaseProps {
  align: string;
}

const LoaderCircular = ({ ...props }: LoaderCircularProps) => {
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

export default LoaderCircular;
