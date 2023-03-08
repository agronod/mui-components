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
    position: error && "absolute",
    left: error && variant !== "standard" ? -30 : 0,
  },
}));

export default function Select(props: SelectProps & { helpertext?: string }) {
  return (
    <StyledSelect
      {...props}
      startAdornment={
        props.error ? (
          <Tooltip
            title={<Typography>{props.helpertext}</Typography>}
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
