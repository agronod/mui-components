import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";

type LoaderBaseProps = Pick<
  MuiCircularProgressProps,
  "size" | "thickness" | "color"
>;

export interface LoaderProps extends LoaderBaseProps {
  align: string;
}

const Loader = ({ ...props }: LoaderProps) => {
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

export default Loader;
