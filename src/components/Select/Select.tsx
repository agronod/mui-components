import {
  InputAdornment,
  styled,
  Select as MuiSelect,
  SelectProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { ErrorIcon } from "../../assets";

const StyledSelect = styled(MuiSelect)(({ theme, error, variant }) => ({}));

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
            <InputAdornment
              position="start"
              sx={{
                position: props.error && "absolute",
                left: -43, // error && variant !== "standard" ? theme.spacing(1) : 0,
              }}
            >
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
