import { Link } from "react-router-dom";
import { Stack, Toolbar, Link as MuiLink } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { AgrosfarPilotLogo, AgronodLogo } from "../../assets";

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
  userDropdown?: React.ReactNode | React.ReactNode[];
  /*  Child component with links for routing in the applications */
  menuLinks?: React.ReactNode | React.ReactNode[];
  /*  Boolean to show or hide the agronod logo */
  agronodLogo?: boolean;
}

export default function Header({
  userDropdown,
  menuLinks,
  agronodLogo,
}: IProps) {
  return (
    <AppBar sx={{ height: 78 }} position="fixed" visible={true} elevation={1}>
      <Toolbar
        disableGutters={true}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          px: 5,
          py: 3,
          [theme.breakpoints.down("md")]: {
            px: 2,
          },
        })}
      >
        <MuiLink
          to="/"
          component={Link}
          display="inline-flex"
          maxHeight={30}
          maxWidth={166}
        >
          {agronodLogo ? <AgronodLogo /> : <AgrosfarPilotLogo />}
        </MuiLink>
        <Stack
          direction={"row"}
          spacing={5}
          sx={{
            alignItems: "center",
          }}
        >
          <>
            {menuLinks && menuLinks}
            {userDropdown && userDropdown}
          </>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
