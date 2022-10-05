import {
  CircularProgress,
  CircularProgressProps,
  Typography,
  Stack,
} from "@mui/material";

interface Props extends CircularProgressProps {
  message?: string;
}

export default function Spinner(props: Props) {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress {...props} />
      {props.message && (
        <Typography variant="h5" sx={{ mt: 4 }}>
          {props.message}
        </Typography>
      )}
    </Stack>
  );
}
