import { Box, Fab, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AgronodSupportDialog from "./components/AgronodSupportDialog";
import { AgronodTypography } from "../AgronodTypography";

export interface AgronodSupportProps {
  buttonSize: "small" | "large";
  menuPosition: "top" | "bottom";
  QALink: string;
  supportEmail?: string;
  supportTelephone?: string;
  respondTime?: string;
}

export default function AgronodSupport(props: AgronodSupportProps) {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
              backgroundColor: theme.palette.white,
              color: theme.palette.text.primary,
              gap: 1,
              boxShadow: "none",
              textTransform: "none",
              "&:active": {
                boxShadow: "none",
              },
              "&:hover": {
                borderColor: theme.palette.input.border,
                backgroundColor: theme.palette.white,
              },
              "&:focus-visible": {
                boxShadow: `0px 0px 0px 4.5px ${theme.palette.white}`,
                borderColor: theme.palette.white,
                outline: `2px solid ${theme.palette.text.primary}`,
              },
            })}
          >
            <QuestionMarkIcon
              fontSize="medium"
              sx={(theme) => ({
                color: theme.palette.icon.secondary,
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
              backgroundColor: theme.palette.white,
              color: theme.palette.text.primary,
              gap: 0.5,
              boxShadow: "none",
              textTransform: "none",
              "&:active": {
                boxShadow: "none",
              },
              "&:hover": {
                borderColor: theme.palette.input.border,
                backgroundColor: theme.palette.white,
              },
              "&:focus-visible": {
                boxShadow: `0px 0px 0px 4.5px ${theme.palette.white}`,
                borderColor: theme.palette.white,
                outline: `2px solid ${theme.palette.text.primary}`,
              },
            })}
          >
            <QuestionMarkIcon
              fontSize="small"
              sx={(theme) => ({
                color: theme.palette.icon.secondary,
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
          <MenuItem
            onClick={() => {
              handleClose();
              setSupportModalOpen(true);
            }}
          >
            <AgronodTypography variant="body1"> Kontakta oss</AgronodTypography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              window.open(props.QALink, "_blank");
            }}
          >
            <AgronodTypography variant="body1">
              Vanliga frågor
            </AgronodTypography>
          </MenuItem>
        </Menu>
      </Box>
      <AgronodSupportDialog
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        supportEmail={props.supportEmail}
        supportTelephone={props.supportTelephone}
        respondTime={props.respondTime}
      />
    </>
  );
}
