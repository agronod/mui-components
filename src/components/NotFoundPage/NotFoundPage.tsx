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
  backgroundColor: string;
  maxWidth?: string;
}

export default function NotFoundPage(props: NotFoundPageProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Stack
        sx={(theme) => ({
          margin: "auto",
          width: "100%",
          height: "100dvh",
          overflow: "auto",
          [theme.breakpoints.down("md")]: {
            height: "calc(100dvh - 65px)",
          },
        })}
        justifyContent="space-between"
      >
        <Stack
          gap={3}
          sx={(theme) => ({
            alignItems: "flex-start",
            marginBottom: 10,
            marginTop: 10,
            width: "100%",
            maxWidth: props.maxWidth ? props.maxWidth : "auto",
            paddingTop: 8,
            paddingBottom: 2,
            paddingX: 9,
            marginX: "auto",

            [theme.breakpoints.down("md")]: {
              alignItems: "center",
              paddingTop: 3,
              paddingX: 2,
            },
          })}
        >
          {isMobile ? (
            <Typography
              variant="h4"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  textAlign: "center",
                },
              })}
            >
              Sidan kunde inte hittas
            </Typography>
          ) : (
            <Typography
              variant="h2"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  textAlign: "center",
                },
              })}
            >
              Sidan kunde inte hittas
            </Typography>
          )}
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
              <Link href="mailto:support@agronod.com" target="_top">
                support@agronod.com
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
            height: "562px",
            width: "100%",
            background: `url(${NotFoundPageBackground}) left bottom repeat-x`,
            backgroundSize: "contain",
            filter: `drop-shadow(0px 0px 0 ${props.backgroundColor})`,

            [theme.breakpoints.down("md")]: {
              height: "572px",
              background: `url(${NotFoundPageBackgroundMobile}) left bottom repeat-x`,
              backgroundSize: "cover",
            },
            [theme.breakpoints.down("sm")]: {
              backgroundSize: "contain",
            },
          })}
        ></Box>
      </Stack>
    </Box>
  );
}
