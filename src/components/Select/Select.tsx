import {
  InputAdornment,
  styled,
  Select as MuiSelect,
  SelectProps,
  Typography,
} from "@mui/material";
import { ErrorIcon } from "../../assets";
import Tooltip from "../Tooltip/Tooltip";

const StyledSelect = styled(MuiSelect)(({ theme, error, variant }) => ({
  "& .MuiInputAdornment-root": {
    left: 0,
  },
  "& .MuiInputAdornment-positionStart": {
    position: (error || alert) && "absolute",
    left: (error || alert) && variant !== "standard" ? -30 : 0,
  },
}));

export default function Select(props: SelectProps & { tooltiptext?: string }) {
  return (
    <StyledSelect
      {...props}
      startAdornment={
        props.error ? (
          <Tooltip
            title={
              <Typography>{props.tooltiptext ?? "Obesvarad fråga"}</Typography>
            }
            placement="top-start"
          >
            <InputAdornment position="start">
              <ErrorIcon />
            </InputAdornment>
          </Tooltip>
        ) : (
          <></>
        )
      }
    ></StyledSelect>
  );
}
