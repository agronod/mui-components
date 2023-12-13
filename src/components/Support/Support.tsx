import { Box, Fab, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
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
    <Box sx={{ cursor: "pointer" }}>
      {props.buttonSize === "large" ? (
        <Fab
          id="supportButton"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableRipple={true}
          onClick={handleClick}
          variant="extended"
          sx={(theme) => ({
            border: "1px solid",
            borderColor: theme.palette.border,
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
            gap: 1,
            boxShadow: "none",
            textTransform: "none",
            "&:active": {
              boxShadow: "none",
            },
            "&:hover": {
              borderColor: theme.palette.input.border,
              backgroundColor: theme.palette.common.white,
            },
            "&:focus-visible": {
              boxShadow: `0px 0px 0px 4.5px ${theme.palette.common.white}`,
              borderColor: theme.palette.common.white,
              outline: `2px solid ${theme.palette.text.primary}`,
            },
          })}
        >
          <QuestionMarkIcon
            sx={(theme) => ({
              color: theme.palette.icon.secondary,
              "&.MuiSvgIcon-root": {
                width: "24px",
                height: "24px",
              },
            })}
          />
          Hjälp
        </Fab>
      ) : (
        <Fab
          id="supportButton"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableRipple={true}
          onClick={handleClick}
          variant="extended"
          sx={(theme) => ({
            height: "32px",
            border: "1px solid",
            borderColor: theme.palette.border,
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
            gap: 0.5,
            boxShadow: "none",
            textTransform: "none",
            "&:active": {
              boxShadow: "none",
            },
            "&:hover": {
              borderColor: theme.palette.input.border,
              backgroundColor: theme.palette.common.white,
            },
            "&:focus-visible": {
              boxShadow: `0px 0px 0px 4.5px ${theme.palette.common.white}`,
              borderColor: theme.palette.common.white,
              outline: `2px solid ${theme.palette.text.primary}`,
            },
          })}
        >
          <QuestionMarkIcon
            sx={(theme) => ({
              color: theme.palette.icon.secondary,
              "&.MuiSvgIcon-root": {
                width: "16px",
                height: "16px",
              },
            })}
          />
          Hjälp
        </Fab>
      )}
      <Menu
        elevation={0}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "supportButton",
        }}
        PaperProps={{
          style: {
            marginTop:
              props.menuPosition === "bottom"
                ? 5
                : props.buttonSize === "large"
                ? "-65px"
                : "-20px",
          },
        }}
      >
        {props.menuItems.map((menuItem, index) => (
          <MenuItem
            onClick={() => {
              handleClose();
              menuItem.clickCallback();
            }}
            key={index}
          >
            <Typography variant="body1"> {menuItem.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
