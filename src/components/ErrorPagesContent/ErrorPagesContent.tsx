import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import NotFoundPageBackground from "../../assets/NotFoundPageBackground.png";
import NotFoundBackgroundMobile from "../../assets/NotFoundBackgroundMobile.png";
import { AgronodTypography } from "../AgronodTypography";
import { AgronodLink } from "../AgronodLink";
import { AgronodButton } from "../AgronodButton";

export interface ErrorPagesContentProps {
  backgroundColor: string;
  pageEmail: string;
  pageType: 500 | 404;
  pageLink?: string;
  maxWidth?: string;
  calculatedHeight?: string;
  customButtonText?: string;
  marginTop?: string;
}

export default function ErrorPagesContent(props: ErrorPagesContentProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        margin: "auto",
        width: "100%",
        height: props.calculatedHeight ?? "100dvh",
        overflow: "auto",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.page,
        marginTop: props.marginTop ?? props.marginTop,
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
        <AgronodTypography
          variant={isMobile ? "h4" : "h2"}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          })}
        >
          {props.pageType === 404
            ? "Sidan kunde inte hittas"
            : "Något gick fel"}
        </AgronodTypography>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          })}
        >
          {props.pageType === 404 ? (
            <>
              {" "}
              <AgronodTypography variant="body1">
                Kontrollera att din webbadress är korrekt.
              </AgronodTypography>
              <AgronodTypography variant="body1">
                Kontakta oss på{" "}
                <AgronodLink
                  type="classic"
                  href={`mailto:${props.pageEmail}`}
                  target="_top"
                >
                  {props.pageEmail}
                </AgronodLink>{" "}
                om felet kvarstår.
              </AgronodTypography>
            </>
          ) : (
            <AgronodTypography variant="body1">
              Prova igen senare. Kontakta oss på{" "}
              <AgronodLink
                type="classic"
                href={`mailto:${props.pageEmail}`}
                target="_top"
              >
                {props.pageEmail}
              </AgronodLink>{" "}
              om felet kvarstår.
            </AgronodTypography>
          )}
        </Box>
        {props.pageType === 404 ? (
          <AgronodButton href={props.pageLink} variant="contained">
            {props.customButtonText
              ? props.customButtonText
              : "Tillbaka till hem"}
          </AgronodButton>
        ) : (
          <AgronodButton variant="contained" href="/">
            {props.customButtonText ? props.customButtonText : "Ladda om"}
          </AgronodButton>
        )}
      </Stack>
      <Box
        sx={(theme) => ({
          width: "100%",
          background: `url(${NotFoundPageBackground}) left bottom repeat-x`,
          backgroundColor: props.backgroundColor,
          backgroundSize: "contain",
          paddingTop: "30.51%",

          [theme.breakpoints.down("md")]: {
            background: `url(${NotFoundBackgroundMobile}) left bottom repeat-x`,
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
