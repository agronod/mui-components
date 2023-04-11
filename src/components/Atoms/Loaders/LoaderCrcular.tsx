import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";

type LoaderCircularBaseProps = Pick<
  MuiCircularProgressProps,
  "size" | "thickness" | "variant"
>;

interface LoaderCircularProps extends LoaderCircularBaseProps {
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
        size={props.size}
        thickness={props.thickness}
        variant={props.variant}
      />
    </Box>
  );
};

export default LoaderCircular;
