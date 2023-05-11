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
  align?: string;
  justify?: string;
  sx?: any;
}

const LoaderCircular = ({ ...props }: LoaderCircularProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: props.justify || "center",
        alignItems: props.align || "center",
        height: "100%",
        ...props.sx,
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
