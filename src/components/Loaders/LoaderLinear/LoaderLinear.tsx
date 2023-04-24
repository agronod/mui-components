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
    <MuiLinearProgress
      {...props}
      sx={
        isGlobal
          ? {
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
            }
          : {
              position: "relative",
            }
      }
    />
  );
};

export default LoaderLinear;
