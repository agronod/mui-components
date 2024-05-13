import {
  Box,
  Card,
  IconButton,
  Modal as MuiModalCard,
  ModalProps as MuiModalCardProps,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useCallback, useEffect } from "react";

type ModalCardBaseProps = Pick<MuiModalCardProps, "children" | "open" | "sx">;

export interface ModalCardProps extends ModalCardBaseProps {
  title?: string;
  isBigTitle?: boolean;
  subtitle?: string;
  caption?: React.ReactElement;
  cardWidth?: string;
  cardMaxWidth?: string;
  icon?: React.ReactElement;
  alignment?: "left" | "center";
  rootPaddingTop?: { sm: number; md: number };
  rootPaddingBottom?: { sm: number; md: number };
  rootPaddingRight?: { sm: number; md: number };
  rootPaddingLeft?: { sm: number; md: number };
  fullContentSize?: boolean;
  notClosable?: boolean;
  onClose?: () => void;
}

const AgronodModalCard = (props: ModalCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const KEY_NAME_ESC = "Escape";
  const KEY_EVENT_TYPE = "keyup";

  const handleEscKey = useCallback((event: any) => {
    if (event.key === KEY_NAME_ESC) {
      props.onClose && props.onClose();
    }
  }, []);

  useEffect(() => {
    if (props.notClosable !== undefined || props.notClosable) {
      return;
    }
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);

  return (
    <MuiModalCard
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.sx,
      }}
      onClose={
        props.notClosable ? undefined : () => props.onClose && props.onClose()
      }
    >
      <Card
        sx={(theme) => ({
          paddingX: 5,
          paddingY: 7,
          paddingTop: props.rootPaddingTop?.md,
          paddingBottom: props.rootPaddingBottom?.md,
          paddingRight: props.rootPaddingRight?.md,
          paddingLeft: props.rootPaddingLeft?.md,
          padding: props.fullContentSize ? 0 : undefined,
          left: "50%",
          width: props.cardWidth ? props.cardWidth : "100%",
          maxWidth: props.cardMaxWidth ? props.cardMaxWidth : "688px",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.down("sm")]: {
            paddingX: 2,
            paddingBottom: props.rootPaddingBottom
              ? props.rootPaddingBottom?.sm
              : 4,
            paddingTop: props.rootPaddingTop?.sm,
            paddingRight: props.rootPaddingRight?.sm,
            paddingLeft: props.rootPaddingLeft?.sm,
            padding: props.fullContentSize ? 0 : undefined,
            width: "100%",
            top: "unset",
            left: "0",
            bottom: "0",
            minWidth: "unset",
            transform: "unset",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            maxHeight: "95dvh",
            overflow: "auto",
          },
        })}
      >
        {!props.notClosable && (
          <IconButton
            sx={{
              position: "absolute",
              width: "30px",
              height: "30px",
              top: "24px",
              right: "24px",
              minWidth: "auto",
              color: theme.palette.text.primary,
            }}
            onClick={() => props.onClose && props.onClose()}
          >
            <CloseRoundedIcon />
          </IconButton>
        )}
        <Box
          sx={(theme) => ({
            maxHeight: "95dvh",
            overflow: "auto",
            textAlign: props.alignment ? props.alignment : "center",
            [theme.breakpoints.down("sm")]: {
              maxHeight: "unset",
              overflow: "unset",
            },
          })}
        >
          {(props.icon || props.caption || props.title || props.subtitle) && (
            <Box
              sx={{
                paddingLeft:
                  props.rootPaddingLeft?.md === 0 || props.fullContentSize
                    ? 5
                    : undefined,
                paddingRight:
                  props.rootPaddingRight?.md === 0 || props.fullContentSize
                    ? 5
                    : undefined,
                paddingTop:
                  props.rootPaddingTop?.md === 0 || props.fullContentSize
                    ? 5
                    : undefined,

                [theme.breakpoints.down("sm")]: {
                  paddingLeft:
                    props.rootPaddingLeft?.sm === 0 || props.fullContentSize
                      ? 5
                      : undefined,
                  paddingRight:
                    props.rootPaddingRight?.sm === 0 || props.fullContentSize
                      ? 5
                      : undefined,
                  paddingTop:
                    props.rootPaddingTop?.sm === 0 || props.fullContentSize
                      ? 5
                      : undefined,
                },
              }}
            >
              {props.icon && <Box sx={{ mb: 2 }}>{props.icon}</Box>}
              {props.caption && <Box sx={{ mb: 1 }}>{props.caption}</Box>}
              {props.title && (
                <Typography
                  variant={
                    props.isBigTitle
                      ? isMobile
                        ? "h4"
                        : "h3"
                      : isMobile
                      ? "h5"
                      : "h4"
                  }
                  sx={{ pb: 2 }}
                >
                  {props.title}
                </Typography>
              )}
              {props.subtitle && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ pb: 3 }}
                >
                  {props.subtitle}
                </Typography>
              )}
            </Box>
          )}
          <Box>{props.children}</Box>
        </Box>
      </Card>
    </MuiModalCard>
  );
};

export default AgronodModalCard;
