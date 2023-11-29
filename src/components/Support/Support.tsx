import {
  Box,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

type MenuItem = {
  name: string;
  clickCallback: () => void;
};

export interface SupportProps {
  buttonSize: "small" | "large";
  menuPosition: "top" | "bottom";
  menuItems: MenuItem[];
}

export default function Support(props: SupportProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      {props.buttonSize === "large" ? (
        <Tooltip
          title="Hjälp"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "common.black",
              },
            },
          }}
        >
          <Fab
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableRipple={true}
            onClick={handleClick}
            sx={(theme) => ({
              border: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.common.white,
              boxShadow: "none",
              "&: active": {
                boxShadow: "none",
              },
              "&: hover": {
                borderColor: theme.palette.input.border,
                backgroundColor: theme.palette.common.white,
              },
            })}
          >
            <QuestionMarkIcon width="24px" height="24px" />
          </Fab>
        </Tooltip>
      ) : (
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableRipple={true}
          onClick={handleClick}
        >
          <HelpOutlineOutlinedIcon width="24px" height="24px" />
        </IconButton>
      )}
      <Menu
        elevation={0}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            marginTop:
              props.menuPosition === "bottom"
                ? 5
                : props.buttonSize === "large"
                ? "-50px"
                : "-20px",
          },
        }}
      >
        {props.menuItems.map((menuItem) => (
          <MenuItem
            onClick={() => {
              handleClose();
              menuItem.clickCallback();
            }}
          >
            <Typography variant="body1"> {menuItem.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
