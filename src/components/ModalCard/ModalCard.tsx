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

type ModalCardBaseProps = Pick<MuiModalCardProps, "children" | "open" | "sx">;

export interface ModalCardProps extends ModalCardBaseProps {
  title: string;
  onClose: () => void;
  subtitle?: string;
  cardWidth?: string;
  icon?: React.ReactElement;
}

const ModalCard = (props: ModalCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLongTitle = props.title.length > 27;

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
            maxHeight: "95vh",
            overflow: "auto",
          },
        })}
      >
        <Button
          variant="text"
          sx={{
            position: "absolute",
            width: "30px",
            height: "30px",
            top: "24px",
            right: "24px",
            minWidth: "auto",
          }}
          onClick={() => props.onClose()}
        >
          <CloseRoundedIcon />
        </Button>

        <Box
          sx={(theme) => ({
            pt: 8,
            pb: 5,
            pl: 5,
            pr: 5,
            maxHeight: "95vh",
            overflow: "auto",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              pl: 2,
              pr: 2,
              maxHeight: "unset",
              overflow: "unset",
            },
          })}
        >
          {props.icon && <Box sx={{ mb: 3 }}>{props.icon}</Box>}
          <Typography
            id="modal-modal-title"
            variant={
              isLongTitle ? (isMobile ? "h5" : "h4") : isMobile ? "h4" : "h3"
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
