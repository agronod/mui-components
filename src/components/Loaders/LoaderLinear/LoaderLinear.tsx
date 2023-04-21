import {
  Box,
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from "@mui/material";

type LoaderLinearBaseProps = Pick<
  MuiLinearProgressProps,
  "color" | "sx" | "value" | "valueBuffer"
>;

export interface LoaderLinearProps extends LoaderLinearBaseProps {
  isGlobal: boolean;
}

const LoaderLinear = ({ isGlobal, ...props }: LoaderLinearProps) => {
  return (
    <Box
      component="div"
      sx={
        isGlobal
          ? {
              position: "fixed",
              top: "0",
              left: "0",
            }
          : {
              position: "relative",
            }
      }
    >
      <MuiLinearProgress {...props} />
    </Box>
  );
};

export default LoaderLinear;
