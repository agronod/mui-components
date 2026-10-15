import {
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  styled,
  Stack,
  SxProps,
  Theme,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AgronodTypography } from "../AgronodTypography";
import React, { ReactNode } from "react";

type PaperSlotProps = NonNullable<
  NonNullable<DialogProps["slotProps"]>["paper"]
>;
type PaperSlotPropsObject = Exclude<
  PaperSlotProps,
  (...args: never) => unknown
>;

// Paper defaults a caller may override through `slotProps.paper.sx`.
const paperDefaultsSx: SxProps<Theme> = (theme) => ({
  borderRadius: 4,
  paddingTop: "48px",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "16px 16px 0 0",
    maxHeight: "95vh",
  },
});

// With MUI's own `fullScreen` the paper keeps MUI's square corners and
// full-viewport size; only the space for the close button is added.
const fullScreenPaperDefaultsSx: SxProps<Theme> = { paddingTop: "48px" };

// Bottom-sheet geometry below the "sm" breakpoint. Appended after the caller's
// `slotProps.paper.sx` so a desktop width such as `width: "700px"` cannot push
// the sheet off-screen on a phone. Only placement and width are forced here;
// radius and height stay overridable through `paperDefaultsSx`.
const mobileSheetSx: SxProps<Theme> = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    width: "100%",
    maxWidth: "none",
  },
});

const toSxArray = (sx: SxProps<Theme> | undefined) =>
  sx === undefined ? [] : Array.isArray(sx) ? sx : [sx];

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

  // Paper styles are layered as: overridable defaults, then the caller's
  // `slotProps.paper.sx`, then the forced bottom-sheet geometry. With MUI's
  // own `fullScreen` the bottom sheet is skipped entirely. The caller's slot
  // props may be an object or a function of the owner state, so the result is
  // a function that resolves them first and always carries the defaults, even
  // when the caller passes `sx: undefined`.
  const { fullScreen } = rest;
  const callerPaper = rest.slotProps?.paper;
  const paperSlotProps: PaperSlotProps = (ownerState) => {
    const caller: PaperSlotPropsObject | undefined =
      typeof callerPaper === "function" ? callerPaper(ownerState) : callerPaper;
    return {
      ...caller,
      sx: [
        fullScreen ? fullScreenPaperDefaultsSx : paperDefaultsSx,
        ...toSxArray(caller?.sx),
        !fullScreen && mobileSheetSx,
      ],
    };
  };

  return (
    <Dialog
      {...rest}
      slotProps={{
        ...rest.slotProps,
        paper: paperSlotProps,
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
            sx={{
              gap: "8px",
              alignSelf: alignActions || alignContent || "end",
              flexWrap: mobileActionsDirection === "row" ? "nowrap" : "wrap",
              width: isMobile ? "100%" : "auto"
            }}>
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
