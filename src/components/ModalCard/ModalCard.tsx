import {
  Box,
  Button,
  Card,
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
  title: string;
  onClose?: () => void;
  notClosable?: boolean;
  subtitle?: string;
  cardWidth?: string;
  icon?: React.ReactElement;
  caption?: React.ReactElement;
  alignment?: "left" | "center";
  isBigTitle?: boolean;
}

const ModalCard = (props: ModalCardProps) => {
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
          left: "50%",
          width: props.cardWidth ? props.cardWidth : "100%",
          maxWidth: "688px",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.down("sm")]: {
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
          <Button
            variant="text"
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
          </Button>
        )}
        <Box
          sx={(theme) => ({
            pt: 8,
            pb: 5,
            pl: 5,
            pr: 5,
            maxHeight: "95dvh",
            overflow: "auto",
            textAlign: props.alignment ? props.alignment : "center",
            [theme.breakpoints.down("sm")]: {
              pl: 2,
              pr: 2,
              maxHeight: "unset",
              overflow: "unset",
            },
          })}
        >
          {props.icon && <Box sx={{ mb: 3 }}>{props.icon}</Box>}
          {props.caption && <Box sx={{ mb: 1 }}>{props.caption}</Box>}
          <Typography
            id="modal-modal-title"
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
          {props.subtitle && (
            <Typography variant="body1" color="text.secondary" sx={{ pb: 3 }}>
              {props.subtitle}
            </Typography>
          )}
          <Box>{props.children}</Box>
        </Box>
      </Card>
    </MuiModalCard>
  );
};

export default ModalCard;
