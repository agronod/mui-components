import {
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  styled,
  Stack,
  SxProps,
} from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import CloseIcon from "@mui/icons-material/Close";
import { AgronodTypography } from "../AgronodTypography";
import { ReactNode } from "react";

const StyledDialog = styled(Dialog)(() => ({
  "& < *": {
    backgroundColor: "red",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 12,
  top: 12,
  color: theme.palette.text.secondary,
}));

export interface AgronodDialogProps extends DialogProps {
  icon?: ReactNode;
  caption?: string | ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
  isMobile?: boolean;
  dialogContentSx?: SxProps;
  alignContent?: "start" | "center" | "end";
  alignActions?: "start" | "center" | "end";
}

const AgronodDialog = ({
  title,
  icon,
  caption,
  actions,
  children,
  onClose,
  closable = true,
  isMobile,
  dialogContentSx,
  alignContent,
  alignActions,
  ...rest
}: AgronodDialogProps) => {
  return (
    <StyledDialog
      fullScreen={isMobile}
      disableEscapeKeyDown={false}
      {...rest}
      slotProps={{
        ...rest.slotProps,
        paper: mergeSlotProps(rest.slotProps?.paper, {
          sx: {
            borderRadius: isMobile ? 0 : 4,
            width: "500px",
            paddingTop: "48px",
          },
        }),
        root: mergeSlotProps(rest.slotProps?.root, {
          sx: {
            border: "1px solid red",
          },
        }),
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: alignContent,
          alignItems: alignContent,
          gap: "24px",
          paddingTop: 0,
          paddingBottom: "48px",
          paddingLeft: "40px",
          paddingRight: "40px",
          ...dialogContentSx,
        }}
      >
        {closable && (
          <StyledIconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </StyledIconButton>
        )}
        {icon}
        {caption || title ? (
          <Stack direction={"column"}>
            {caption &&
              (typeof caption === "string" ? (
                <AgronodTypography variant={"overline"}>
                  {caption || ""}
                </AgronodTypography>
              ) : (
                caption
              ))}
            {title &&
              (typeof title === "string" ? (
                <AgronodTypography variant={"h4"}>
                  {title || ""}
                </AgronodTypography>
              ) : (
                title
              ))}
          </Stack>
        ) : null}

        {children}
        {actions && (
          <Stack
            direction={"row"}
            gap={"8px"}
            sx={{
              alignSelf: alignActions || alignContent || "end",
            }}
          >
            {actions}
          </Stack>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

export default AgronodDialog;
