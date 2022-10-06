import { Link } from "react-router-dom";
import { Stack, Toolbar, Typography, Link as MuiLink } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import AgrosfarPilotLogo from "../../assets/AgrosfarPilotLogo";
import { ReactChild } from "react";

interface AppBarProps extends MuiAppBarProps {
  visible?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "visible",
})<AppBarProps>(({ theme, visible }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!visible && {
    display: "none",
  }),
}));

interface IProps {
  /* Dropdown with links, used only in logged in state */
  userDropdown?: ReactChild | ReactChild[];
  /*  Child component with links for routing in the applications */
  menuLinks?: ReactChild | ReactChild[];
}

export default function Header({ userDropdown, menuLinks }: IProps) {
  return (
    <AppBar position="fixed" visible={true} elevation={1}>
      <Toolbar
        disableGutters={true}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 5,
          py: 3,
        }}
      >
        <MuiLink
          to="/"
          component={Link}
          display="inline-flex"
          maxHeight={30}
          maxWidth={166}
        >
          <AgrosfarPilotLogo />
        </MuiLink>
        <Stack
          direction={"row"}
          spacing={5}
          sx={{
            alignItems: "center",
          }}
        >
          {menuLinks && menuLinks}
          <MuiLink
            href="https://www.agronod.com/sv/om-agrosfar"
            target="_blank"
            underline="none"
          >
            <Typography variant="body1">Om agrosfär</Typography>
          </MuiLink>
          {userDropdown && userDropdown}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
