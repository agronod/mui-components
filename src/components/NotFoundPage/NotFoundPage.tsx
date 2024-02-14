import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotFoundPageBackground from "../../assets/NotFoundPageBackground.png";
import NotFoundPageBackgroundMobile from "../../assets/NotFoundBackgroundMobile.png";

export interface NotFoundPageProps {
  pageLink: string;
  pageEmail: string;
  backgroundColor: string;
  maxWidth?: string;
  calculatedHeight?: string;
}

export default function NotFoundPage(props: NotFoundPageProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  debugger;
  return (
    <Stack
      sx={{
        margin: "auto",
        width: "100%",
        height: props.calculatedHeight ?? "100dvh",
        overflow: "auto",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.page,
      }}
    >
      <Stack
        gap={3}
        sx={(theme) => ({
          alignItems: "flex-start",
          width: "100%",
          maxWidth: props.maxWidth ? props.maxWidth : "auto",
          paddingTop: 10,
          paddingBottom: 6,
          paddingX: 9,
          marginX: "auto",

          [theme.breakpoints.down("md")]: {
            alignItems: "center",
            paddingTop: 3,
            paddingX: 2,
          },
        })}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          })}
        >
          Sidan kunde inte hittas
        </Typography>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          })}
        >
          <Typography variant="body1">
            Kontrollera att din webbadress är korrekt.
          </Typography>
          <Typography variant="body1">
            Kontakta oss på{" "}
            <Link href={`mailto:${props.pageEmail}`} target="_top">
              {props.pageEmail}
            </Link>{" "}
            om felet kvarstår.
          </Typography>
        </Box>
        <Button href={props.pageLink} variant="contained">
          Tillbaka till hem
        </Button>
      </Stack>
      <Box
        sx={(theme) => ({
          width: "100%",
          background: `url(${NotFoundPageBackground}) left bottom repeat-x`,
          backgroundColor: props.backgroundColor,
          backgroundSize: "contain",
          paddingTop: "30.51%",

          [theme.breakpoints.down("md")]: {
            background: `url(${NotFoundPageBackgroundMobile}) left bottom repeat-x`,
            backgroundColor: props.backgroundColor,
            backgroundSize: "contain",
            paddingTop: "49.51%",
          },
          [theme.breakpoints.down("sm")]: {
            backgroundSize: "contain",
          },
        })}
      ></Box>
    </Stack>
  );
}
