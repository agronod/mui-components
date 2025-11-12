import {
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  styled,
  Stack,
  SxProps,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import CloseIcon from "@mui/icons-material/Close";
import { AgronodTypography } from "../AgronodTypography";
import React, { ReactNode } from "react";

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
  dialogContentSx?: SxProps;
  alignContent?: "start" | "center" | "end";
  alignActions?: "start" | "center" | "end";
  mobileActionsDirection?: "row" | "column";
}

const AgronodDialog = ({
  title,
  icon,
  caption,
  actions,
  children,
  onClose,
  closable = true,
  dialogContentSx,
  alignContent,
  alignActions,
  mobileActionsDirection,
  ...rest
}: AgronodDialogProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      maxWidth={false}
      disableEscapeKeyDown={false}
      {...rest}
      slotProps={{
        ...rest.slotProps,
        paper: mergeSlotProps(rest.slotProps?.paper, {
          sx: {
            borderRadius: isMobile ? "16px 16px 0 0" : 4,
            paddingTop: "48px",
            ...(isMobile && {
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              maxHeight: "95vh",
              maxWidth: "none",
              width: "100%",
              margin: 0,
            }),
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
                <AgronodTypography
                  sx={{ fontSize: isMobile ? "22px" : "32px" }}
                  variant={"h4"}
                >
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
            direction={isMobile ? mobileActionsDirection || "column" : "row"}
            gap={"8px"}
            sx={{
              alignSelf: alignActions || alignContent || "end",
              flexWrap: mobileActionsDirection === "row" ? "nowrap" : "wrap",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {(() => {
              // If actions is a Fragment, unwrap it to get the actual children
              const actionsList =
                React.isValidElement(actions) && actions.type === React.Fragment
                  ? React.Children.toArray(actions.props.children)
                  : React.Children.toArray(actions);

              return actionsList.map((action, index) => {
                if (!React.isValidElement(action)) {
                  return action;
                }
                if (isMobile) {
                  return (
                    <Box key={action.key || index} sx={{ width: "100%" }}>
                      {React.cloneElement(action, {
                        ...action.props,
                        fullWidth: true,
                      })}
                    </Box>
                  );
                }
                return action;
              });
            })()}
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AgronodDialog;
